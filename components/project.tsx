"use client";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HeroParallaxDemo } from "@/ui/projects/Project.Index";
export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    return (

        <div ref={ref} id="projects" className="w-3/4 content-center justify-self-center -mb-52">
            <HeroParallaxDemo />
        </div>

    )
}