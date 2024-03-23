import Contact from "@/components/Contact";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/project";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { TabsDemo } from "@/ui/tabs/Tab.index";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Projects />
    <Skills />
    <Contact />
    <TabsDemo />

    {/*       
      <Experience />
       */}
    </main>
  );
}
