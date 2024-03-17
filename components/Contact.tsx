"use client";
import { useSectionInView } from "@/lib/hooks";
import { SignupFormDemo } from "@/ui/contact/Contact.Index";
export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    return (
        <>
            <section ref={ref} id="contact">
                <SignupFormDemo />
            </section>
        </>
    )
}