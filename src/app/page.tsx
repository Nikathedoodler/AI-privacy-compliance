import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pt-2">
      <Navigation />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Pricing Section */}
      <Pricing />
      {/* Footer Section */}
    </div>
  );
}
