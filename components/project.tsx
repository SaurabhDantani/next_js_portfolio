"use client";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HeroParallaxDemo } from "@/ui/projects/Project.Index";
export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <>
            <section ref={ref} id="projects">
                <div className="w-96">
                    <HeroParallaxDemo />
                </div>
            </section>
        </>
    )
}