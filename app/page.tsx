import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { SelectedProjects } from "@/components/SelectedProjects/SelectedProjects";
import { Stack } from "@/components/Stack/Stack";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="pageShell">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Stack />
        <SelectedProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
