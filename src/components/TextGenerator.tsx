import React, { useState, FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const TextGenerator = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Something went wrong.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setPrompt("");
      setResponse(data.result || "No response from AI.");
    } catch (err) {
      setError("Failed to connect to AI service.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!response) return;
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    if (!response) return;
    const blob = new Blob([response], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-output.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 1500);
  };

  const handleClear = () => {
    setResponse("");
    setError("");
  };

  const markdownComponents: Components = {
    code(props) {
      const { children, className, ...rest } = props;
      // react-markdown v8+ passes 'inline' as a boolean prop
      // @ts-ignore
      const inline = props.inline;
      return (
        <code
          className={
            "bg-[#232a41] rounded px-1 py-0.5 text-[#B9FF66] text-base" +
            (inline ? "" : " block my-2 p-2 overflow-x-auto")
          }
          {...rest}
        >
          {children}
        </code>
      );
    },
    pre(props) {
      const { children, ...rest } = props;
      return (
        <pre
          className="bg-[#232a41] rounded-xl p-3 my-2 overflow-x-auto"
          {...rest}
        >
          {children}
        </pre>
      );
    },
    li(props) {
      const { children, ...rest } = props;
      return (
        <li className="ml-4 list-disc" {...rest}>
          {children}
        </li>
      );
    },
  };

  return (
    <div className="bg-[#232a41] rounded-4xl p-8 shadow-lg flex flex-col gap-6 w-full xl:w-full">
      <div className="text-2xl font-bold mb-2">Gemini Text Generator</div>
      <p className="text-gray-400 mb-4">
        Enter a prompt and let Gemini generate creative, helpful, or informative
        text for you. Try the example prompts below or write your own!
      </p>
      {/* Example prompts */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Write a short poem about a cat.",
          "Summarize the plot of Hamlet.",
          "Describe the benefits of AI in healthcare.",
          "Suggest a catchy slogan for a new coffee shop.",
        ].map((ex, i) => (
          <button
            key={i}
            type="button"
            className="px-3 py-1 rounded-lg bg-[#31374a] text-gray-200 text-sm hover:bg-[#3D55B6] transition border border-[#3D55B6]"
            onClick={() => setPrompt(ex)}
            disabled={loading}
          >
            {ex}
          </button>
        ))}
      </div>
      {/* Prompt guidance */}
      <div className="text-xs text-gray-400 mb-2">
        <span className="font-semibold text-[#B9FF66]">Tips:</span> Be specific.
        Use keywords. Describe the desired tone or style. Try creative,
        technical, or summarization tasks!
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <label className="font-semibold" htmlFor="prompt">
          Enter your prompt here
        </label>
        <textarea
          id="prompt"
          className="bg-[#191E2C] border border-[#3D55B6] rounded-xl p-3 text-white resize-none focus:outline-none focus:border-[#B9FF66] transition"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
          placeholder="Ask the AI anything..."
          required
        />
        <div className="flex gap-4 mt-2">
          <button
            type="submit"
            className="bg-[#B9FF66] text-black font-bold px-6 py-2 rounded-xl cursor-pointer hover:bg-[#A0E95A] transition"
            disabled={loading}
          >
            {loading ? "Running..." : "Run AI"}
          </button>
        </div>
      </form>
      {/* AI result output placeholder */}
      <div className="bg-[#191E2C] rounded-xl p-4 min-h-[60px] mt-2 text-[#B9FF66] text-lg relative overflow-x-auto">
        {loading ? (
          <span className="opacity-60 animate-pulse">
            Generating AI response...
          </span>
        ) : error ? (
          <span className="text-red-400">{error}</span>
        ) : response ? (
          <>
            <div className="prose prose-invert max-w-none text-gray-300 ">
              <ReactMarkdown components={markdownComponents}>
                {response}
              </ReactMarkdown>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                type="button"
                className={`px-4 py-2 rounded-lg bg-[#B9FF66] text-black font-bold hover:bg-[#A0E95A] transition flex items-center gap-2 ${
                  copied ? "ring-2 ring-[#B9FF66]" : ""
                }`}
                onClick={handleCopy}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="9"
                    y="9"
                    width="13"
                    height="13"
                    rx="2"
                    stroke="currentColor"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="13"
                    height="13"
                    rx="2"
                    stroke="currentColor"
                  />
                </svg>
                {copied ? "Copied!" : "Copy"}
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg bg-[#459BBE] text-white font-bold hover:bg-[#357ca0] transition flex items-center gap-2 ${
                  downloaded ? "ring-2 ring-[#459BBE]" : ""
                }`}
                onClick={handleDownload}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" />
                  <rect
                    x="5"
                    y="19"
                    width="14"
                    height="2"
                    rx="1"
                    stroke="currentColor"
                  />
                </svg>
                {downloaded ? "Downloaded!" : "Download"}
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-[#31374a] text-white font-bold hover:bg-[#3D55B6] transition flex items-center gap-2"
                onClick={handleClear}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" />
                </svg>
                Clear
              </button>
            </div>
          </>
        ) : (
          <span className="opacity-60">AI output will appear here...</span>
        )}
      </div>
    </div>
  );
};

export default TextGenerator;
