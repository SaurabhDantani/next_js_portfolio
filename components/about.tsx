"use client";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { StickyScrollRevealDemo } from "@/ui/about/AboutIndex";
export default function About() {
    const { ref } = useSectionInView("About", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return(
        <>
        <section ref={ref} id="about">
            <h1>hello how are you</h1>
        <StickyScrollRevealDemo />
        </section>
    </>
    )
}