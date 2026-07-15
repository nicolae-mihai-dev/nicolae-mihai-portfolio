import { About } from "@/components/About/About";
import { CaseStudyFormat } from "@/components/CaseStudyFormat/CaseStudyFormat";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Process } from "@/components/Process/Process";
import { Services } from "@/components/Services/Services";
import { SelectedProjects } from "@/components/SelectedProjects/SelectedProjects";
import { Stack } from "@/components/Stack/Stack";
import { WorkTracks } from "@/components/WorkTracks/WorkTracks";

export default function Home() {
  return (
    <div className="pageShell">
      <Header />
      <main>
        <Hero />
        <Services />
        <WorkTracks />
        <SelectedProjects />
        <CaseStudyFormat />
        <Process />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
