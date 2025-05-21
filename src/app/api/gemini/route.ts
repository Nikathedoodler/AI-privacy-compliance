import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }
    const completion = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // For GoogleGenAI, the response is typically in completion.candidates[0].content.parts[0].text
    let aiText = "";
    if (completion && completion.candidates && completion.candidates[0]?.content?.parts?.[0]?.text) {
      aiText = completion.candidates[0].content.parts[0].text;
    } else {
      aiText = "No response from Gemini.";
    }
    return NextResponse.json({ result: aiText });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate AI response." },
      { status: 500 }
    );
  }
}
