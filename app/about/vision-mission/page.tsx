import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export const metadata = {
    title: "Vision & Mission | Greenveyil Energy",
    description: "Shaping India’s Solar Energy Future with Purpose and Discipline",
}

export default function VisionMissionPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.energy-yellow/30)_0%,transparent_70%)]"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow">
                                Vision & Mission
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                                Shaping India’s Solar Energy Future with Purpose and Discipline
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light">
                                Greenveyil Energy Pvt Ltd is driven by a long-term commitment to strengthening India’s renewable infrastructure through reliable, scalable and performance-driven solar solutions.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* INTRODUCTION STATEMENT */}
                <section className="bg-muted/30 py-12 lg:py-16 border-b border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-lg md:text-xl text-energy-green-dark font-medium">
                                <p>Our direction is clear.</p>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-energy-yellow"></div>
                                <p>Our focus is singular.</p>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-energy-yellow"></div>
                                <p>Our foundation is engineering excellence.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* VISION & MISSION SPLIT */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* VISION CARD */}
                        <ScrollReveal className="bg-card border border-border/60 rounded-2xl p-8 lg:p-12 shadow-sm relative overflow-hidden group hover:border-energy-yellow/50 transition-colors flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-energy-green-light/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-energy-green-dark text-energy-yellow">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                To become a trusted leader in India’s solar infrastructure sector by delivering dependable, high-performance solar energy systems that support long-term energy independence.
                            </p>
                            <div className="space-y-4 flex-grow">
                                <p className="font-semibold text-energy-green-dark text-sm uppercase tracking-wider">We envision an India where:</p>
                                <ul className="space-y-3">
                                    {["Solar power is accessible across residential, commercial and industrial sectors",
                                        "Businesses reduce dependency on conventional grid electricity",
                                        "Renewable infrastructure supports economic growth",
                                        "Clean energy adoption is structured, scalable and financially viable"].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5"></span>
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="mt-8 pt-6 border-t border-border/50 text-sm font-medium italic text-energy-green-dark/80">
                                Our vision is not built on rapid expansion alone, but on disciplined execution and sustainable growth.
                            </div>
                        </ScrollReveal>

                        {/* MISSION CARD */}
                        <ScrollReveal delay={100} className="bg-energy-green-dark text-white rounded-2xl p-8 lg:p-12 shadow-lg relative overflow-hidden flex flex-col h-full">
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-tl-full -z-10"></div>
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-energy-yellow">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-3xl font-light tracking-tight mb-4">
                                Our Mission
                            </h3>
                            <p className="text-white/80 text-lg leading-relaxed mb-6">
                                Our mission is to design, build and maintain solar infrastructure that delivers measurable value over decades.
                            </p>
                            <div className="space-y-4 flex-grow">
                                <p className="font-semibold text-energy-yellow text-sm uppercase tracking-wider">We are committed to:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Providing end-to-end solar EPC solutions",
                                        "Enabling no-cost solar adoption through structured OPEX/PPA models",
                                        "Ensuring high system performance through proactive operations & maintenance",
                                        "Aligning with Indian regulatory frameworks and net metering policies",
                                        "Supporting enterprises in achieving renewable energy targets"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                                            <span className="text-energy-yellow shrink-0 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 text-sm font-medium text-white/95 bg-white/5 p-4 rounded-lg">
                                We focus exclusively on solar energy because specialization drives reliability.
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

                {/* CORE PRINCIPLES WITH IMAGE HOLDER */}
                <section className="bg-muted/40 py-16 lg:py-24 border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Our Core Principles
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                                Greenveyil operates under a clear set of operational values:
                            </p>
                        </ScrollReveal>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Principles List */}
                            <div className="space-y-8">
                                {[
                                    { title: "Engineering First", desc: "Every project begins with technical feasibility, structural integrity and performance modeling.", icon: "📐" },
                                    { title: "Long-Term Accountability", desc: "We do not build systems for short-term output. We design solar assets for sustained energy generation.", icon: "⏳" },
                                    { title: "Regulatory Compliance", desc: "All installations align with Indian electricity board standards and renewable energy policies.", icon: "⚖️" },
                                    { title: "Transparent Commercial Models", desc: "Clear pricing, structured agreements and long-term performance clarity.", icon: "🤝" },
                                    { title: "Sustainable Impact", desc: "Reducing carbon emissions while supporting India’s energy security.", icon: "🌱" }
                                ].map((principle, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 100} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-card border border-border/60 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-energy-yellow/10 transition-colors text-xl">
                                            {principle.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-energy-green-dark mb-1">{principle.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {/* Image Feature / Placeholder */}
                            <ScrollReveal className="relative min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg border border-border/50 hidden lg:block bg-card group">
                                <Image src="/images/section-solar.jpg" alt="Greenveyil Core Principles" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-energy-green-dark/20 mix-blend-multiply"></div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* COMMITMENT & CLOSING SECTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
                    <div className="bg-energy-gray/5 border border-border/60 rounded-3xl p-8 lg:p-16 relative overflow-hidden isolate">

                        {/* Decorative graphic background */}
                        <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-30 mix-blend-multiply pointer-events-none">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-energy-yellow/20">
                                <polygon fill="currentColor" points="100,0 100,100 0,100" />
                            </svg>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Text block */}
                            <ScrollReveal className="space-y-6">
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                    Commitment to India’s Renewable Growth
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    India’s renewable journey requires infrastructure partners who understand both technology and regulation.
                                </p>
                                <div className="bg-card p-6 rounded-xl border border-border/50">
                                    <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">Greenveyil Works Closely With:</p>
                                    <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-foreground">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Industrial enterprises</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Commercial establishments</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>Residential communities</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>State electricity boards</li>
                                    </ul>
                                </div>
                                <p className="text-base italic text-energy-green-dark/80 font-medium border-l-4 border-energy-yellow pl-4">
                                    Our role is not just to install solar systems, but to build dependable renewable energy infrastructure that integrates seamlessly with India’s power ecosystem.
                                </p>
                            </ScrollReveal>

                            {/* Highlight Box */}
                            <ScrollReveal delay={100} className="bg-energy-green-dark text-white rounded-2xl p-8 lg:p-12 shadow-xl text-center flex flex-col justify-center h-full">
                                <h4 className="text-2xl font-semibold mb-6">Building for the Next Generation</h4>
                                <div className="inline-flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 mb-6">
                                    <span className="text-energy-yellow font-medium text-lg mb-1">Solar energy is not a trend.</span>
                                    <span className="text-2xl font-light tracking-widest uppercase">It is infrastructure.</span>
                                </div>
                                <p className="text-white/80 leading-relaxed mb-8">
                                    Our long-term objective is to expand responsibly across India while maintaining quality, safety and performance standards. Greenveyil Energy Pvt Ltd remains committed to contributing to India’s renewable capacity growth through disciplined engineering and structured project execution.
                                </p>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
