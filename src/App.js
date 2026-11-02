import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { initLenis } from "@/lib/lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => initLenis(), []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div className="min-h-screen bg-paper font-body text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Research />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
