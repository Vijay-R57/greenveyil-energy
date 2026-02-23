import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export const metadata = {
    title: "Our History | Greenveyil Energy",
    description: "Our Journey in Solar Infrastructure & India's Solar Future",
}

export default function OurHistoryPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.energy-yellow/20)_0%,transparent_100%)]"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow">
                                Our History
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                                Our Journey in Solar Infrastructure
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light">
                                Greenveyil Energy Pvt Ltd was founded with a clear and focused mission — to accelerate solar energy adoption across India through engineering excellence and long-term infrastructure development.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FOUNDING STORY */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <ScrollReveal>
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                    How Greenveyil Began
                                </h3>
                                <div className="mt-4 h-1 w-12 bg-secondary rounded-full" />
                            </ScrollReveal>
                            <ScrollReveal delay={100}>
                                <p className="text-lg leading-relaxed text-muted-foreground font-medium border-l-4 border-energy-yellow pl-5">
                                    Greenveyil was established in Chennai with a vision to create scalable solar EPC solutions tailored to Indian industrial and commercial demand.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From the beginning, our commitment has been singular: solar power. We do not diversify into wind, hydro or energy trading. Our strength lies in developing dependable solar assets that deliver measurable energy output and financial returns.
                                </p>
                                <div className="mt-6">
                                    <p className="font-semibold text-energy-green-dark mb-4 text-sm uppercase tracking-wider">In our early years, we focused on:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                                        {["Rooftop solar systems for commercial establishments", "Industrial solar infrastructure for manufacturing units", "Compliance with state-level net metering policies", "Structured operations & maintenance frameworks"].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 bg-muted/40 p-3 rounded-md border border-border/50">
                                                <div className="h-5 w-5 rounded bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="text-secondary text-xs">✓</span>
                                                </div>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <p className="text-base font-medium text-foreground bg-energy-green-dark text-white p-5 rounded-lg mt-6 shadow-md">
                                    As India’s renewable sector expanded, so did our footprint across Tamil Nadu and neighboring states.
                                </p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal className="relative min-h-[450px] w-full lg:min-h-[550px] order-first lg:order-last">
                            <div className="absolute inset-0 bg-energy-gray/10 rounded-2xl overflow-hidden flex items-center justify-center">
                                <Image src="/images/sunrize solar1.jpg" alt="Greenveyil Founding Journey" fill className="object-cover opacity-90 sepia-[.2]" />
                                {/* Styling overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark/60 via-transparent to-transparent"></div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* GROWTH TIMELINE */}
                <section className="bg-muted/30 py-16 lg:py-24 border-y border-border/50 relative">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal>
                            <div className="mb-16 text-center">
                                <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                    Growth Milestones
                                </h2>
                                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                                    Today, Greenveyil operates across multiple Indian states with a structured solar-only growth strategy
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Timeline Connector Line */}
                            <div className="absolute left-[28px] lg:left-1/2 top-4 bottom-4 w-0.5 bg-border/80 lg:-translate-x-1/2 rounded-full"></div>

                            <div className="space-y-12 lg:space-y-0 relative">
                                {[
                                    {
                                        phase: "Phase 1",
                                        title: "Foundation (Initial Operations)",
                                        points: ["Established headquarters in Chennai", "Delivered first commercial rooftop solar project", "Built in-house engineering design team"]
                                    },
                                    {
                                        phase: "Phase 2",
                                        title: "Regional Expansion",
                                        points: ["Expanded operations into Karnataka and Telangana", "Introduced no-cost solar installation models (PPA/OPEX)", "Strengthened long-term O&M services"]
                                    },
                                    {
                                        phase: "Phase 3",
                                        title: "Industrial Scale Projects",
                                        points: ["Commissioned ground-mounted solar plants", "Partnered with large industrial enterprises", "Expanded into Maharashtra, Gujarat and Rajasthan"]
                                    }
                                ].map((item, i) => (
                                    <div key={i} className={`relative flex flex-col lg:flex-row items-start lg:justify-between lg:even:flex-row-reverse group lg:py-8`}>

                                        {/* Center Node */}
                                        <div className="absolute left-0 lg:left-1/2 w-14 h-14 bg-card border-4 border-muted rounded-full flex items-center justify-center lg:-translate-x-1/2 z-10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-energy-yellow">
                                            <div className="w-5 h-5 bg-energy-green-dark rounded-full"></div>
                                        </div>

                                        {/* Content Box */}
                                        <ScrollReveal
                                            delay={i * 100}
                                            className={`w-full lg:w-[calc(50%-4rem)] pl-20 lg:pl-0 pt-2 lg:pt-0 ${i % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}
                                        >
                                            <div className={`bg-card p-6 md:p-8 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow relative
                          ${i % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                                {/* Minimal arrow pointing to center node - visible on large screens */}
                                                <div className={`hidden lg:block absolute top-6 w-4 h-4 bg-card border-y border-border/60 rotate-45 
                             ${i % 2 === 0 ? '-right-2 border-r' : '-left-2 border-l'}`}></div>

                                                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">{item.phase}</span>
                                                <h4 className="text-xl font-semibold text-energy-green-dark mb-4">{item.title}</h4>
                                                <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 !== 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                                                    {item.points.map((pt, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            {i % 2 !== 0 ? (
                                                                <>
                                                                    <span className="hidden lg:inline">{pt}</span>
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-energy-yellow shrink-0"></span>
                                                                    <span className="lg:hidden">{pt}</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-energy-yellow shrink-0"></span>
                                                                    <span>{pt}</span>
                                                                </>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIDEO SECTION (Media Block) */}
                <section className="hidden bg-energy-green-dark py-20 lg:py-28 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url(/images/section-solar.jpg)] bg-cover bg-fixed bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
                        <ScrollReveal className="text-center mb-10">
                            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                                Our Solar Impact in Action
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="max-w-4xl mx-auto">
                            <div className="relative aspect-video bg-black/40 rounded-2xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer backdrop-blur-sm">
                                {/* Placeholder for actual Video Embed */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-energy-yellow rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Play className="w-8 h-8 text-energy-green-dark" fill="currentColor" />
                                    </div>
                                </div>
                                {/* Subtitle */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10 w-fit">
                                        <p className="text-white font-medium text-sm">Greenveyil Corporate Overview</p>
                                        <p className="text-white/60 text-xs">Watch our journey and infrastructure capabilities</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* EXPANSION & CULTURE (Split Section) */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* Expansion block */}
                        <ScrollReveal className="space-y-6">
                            <h3 className="text-2xl font-light tracking-tight text-energy-green-dark md:text-3xl flex items-center gap-3">
                                <span className="text-secondary bg-secondary/10 w-10 h-10 rounded-full flex items-center justify-center">📍</span>
                                Expanding Across India
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our expansion has always been driven by disciplined execution rather than rapid scaling. Each new region is supported by localized execution teams and regulatory alignment with state electricity boards.
                            </p>
                            <div className="bg-muted/40 p-6 rounded-xl border border-border/50">
                                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">We operate in:</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Tamil Nadu", "Karnataka", "Telangana", "Andhra Pradesh", "Maharashtra", "Gujarat", "Rajasthan"].map((state, i) => (
                                        <span key={i} className="bg-card px-3 py-1.5 rounded-full text-sm font-medium border border-border/60 text-foreground shadow-sm">
                                            {state}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="border-l-2 border-energy-yellow pl-4 text-energy-green-dark font-medium italic">
                                We prioritize long-term solar infrastructure — not short-term project volume.
                            </p>
                        </ScrollReveal>

                        {/* Culture block */}
                        <ScrollReveal delay={100} className="space-y-6">
                            <h3 className="text-2xl font-light tracking-tight text-energy-green-dark md:text-3xl flex items-center gap-3">
                                <span className="text-secondary bg-secondary/10 w-10 h-10 rounded-full flex items-center justify-center">🤝</span>
                                Culture & People
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Although our operations have grown, our foundation remains centered on our people. We believe infrastructure success is built on human expertise.
                            </p>
                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">Greenveyil fosters:</p>
                                {["Engineering-first culture", "Accountability at every level", "Safety and compliance standards", "Continuous learning in renewable technologies", "Collaborative execution teams"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 border-b border-border/40 pb-2 text-sm text-foreground">
                                        <span className="w-1.5 h-1.5 bg-energy-green-light rounded-full"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

                {/* CAREERS CTA & FINAL TRANSITION */}
                <section className="bg-muted py-20 lg:py-28 relative overflow-hidden">
                    <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy-green-light/5 rounded-full blur-3xl mix-blend-multiply"></div>
                    <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy-yellow/10 rounded-full blur-3xl mix-blend-multiply"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 flex flex-col items-center max-w-4xl text-center">

                        <ScrollReveal className="w-full bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border/50 mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-energy-green-dark md:text-4xl mb-4">
                                Build the Future of Solar Energy in India
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                                At Greenveyil, we are always looking for professionals committed to advancing solar infrastructure. Whether you are an engineer, project manager, site supervisor or operations specialist — your work contributes directly to India’s renewable transformation.
                            </p>
                            <Link
                                href="/careers"
                                className="inline-flex items-center justify-center rounded-sm bg-secondary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-energy-green-dark hover:scale-[1.02] shadow-sm"
                            >
                                Explore Open Positions
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="max-w-3xl space-y-4 text-energy-green-dark/90 font-medium">
                            <p className="text-lg">
                                Greenveyil Energy Pvt Ltd continues to expand responsibly, focusing solely on solar infrastructure that supports India’s energy independence.
                            </p>
                            <p className="text-lg">
                                Our journey is defined by structured growth, disciplined execution and a long-term commitment to renewable solar power.
                            </p>
                        </ScrollReveal>

                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
