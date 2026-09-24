import { Header } from "./components/Header";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Portfolio } from "./components/Portfolio";
import { Showcase } from "./components/Showcase";
import { Process } from "./components/Process";
import { WhyUs } from "./components/WhyUs";
import { Vastu } from "./components/Vastu";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1001] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <Showcase />
        <Process />
        <WhyUs />
        <Vastu />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
