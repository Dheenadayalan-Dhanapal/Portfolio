import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveBlob from "@/components/InteractiveBlob";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <InteractiveBlob />
      <Navbar />

      {/* Container for content */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
