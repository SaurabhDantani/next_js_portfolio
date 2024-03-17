"use client";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { StickyScrollRevealDemo } from "@/ui/about/AboutIndex";
export default function About() {
    const { ref } = useSectionInView("About", 0.5);
    return (
        <>
            <section ref={ref} id="about">
                <StickyScrollRevealDemo />
            </section>
        </>
    )
}