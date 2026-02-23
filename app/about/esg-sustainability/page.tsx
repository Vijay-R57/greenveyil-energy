import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export const metadata = {
    title: "ESG & Sustainability | Greenveyil Energy",
    description: "Building Responsible Solar Infrastructure for India",
}

export default function ESGSustainabilityPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0 opacity-15">
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark to-transparent"></div>
                        {/* Subtle repeating leaf/solar pattern placeholder */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.energy-yellow/20)_0%,transparent_60%)]"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow">
                                ESG & Sustainability
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                                Building Responsible Solar Infrastructure for India
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light">
                                At Greenveyil Energy Pvt Ltd, sustainability is not a separate initiative — it is embedded in how we design, build and operate solar infrastructure across India.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* INTRODUCTION BLOCK */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20 text-center">
                    <ScrollReveal className="max-w-4xl mx-auto space-y-6">
                        <p className="text-xl md:text-2xl font-light text-energy-green-dark leading-relaxed">
                            Our ESG framework integrates environmental responsibility, disciplined governance and measurable social impact into every stage of our solar projects.
                        </p>
                        <p className="text-lg text-muted-foreground font-medium">
                            By focusing exclusively on solar energy, we contribute directly to India’s renewable transition with clarity and accountability.
                        </p>
                    </ScrollReveal>
                </section>

                {/* ESG PILLARS SECTION (Infographics) */}
                <section className="bg-muted/30 py-16 lg:py-24 border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Our ESG Pillars
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
                                Our sustainability framework is structured around three interconnected pillars that guide every solar infrastructure project we develop across India.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">

                            {/* Energy Pillar */}
                            <ScrollReveal delay={100} className="bg-card rounded-2xl p-8 lg:p-10 shadow border border-border/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#EDB83D]"></div>
                                <div className="w-16 h-16 mx-auto bg-[#EDB83D] rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <span className="text-2xl drop-shadow-sm">⚡</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#B88A12] mb-4 text-center">Energy</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-center">
                                    Delivering high-performance solar infrastructure that strengthens India's renewable capacity and reduces long-term carbon emissions.
                                </p>
                                <p className="text-xs text-left bg-[#F4F5F4] p-5 rounded-lg text-foreground flex items-center min-h-[100px] leading-relaxed">
                                    Our projects are engineered for long-term generation stability, operational efficiency and measurable carbon reduction.
                                </p>
                            </ScrollReveal>

                            {/* Environment Pillar */}
                            <ScrollReveal delay={200} className="bg-[#032B11] text-white rounded-2xl p-8 lg:p-10 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                <div className="w-16 h-16 mx-auto bg-black/25 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <span className="text-2xl drop-shadow-sm">🌱</span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-white text-center">Environment</h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-8 text-center">
                                    Designing solar systems with environmental responsibility, regulatory compliance and lifecycle efficiency.
                                </p>
                                <p className="text-xs text-left bg-black/20 p-5 rounded-lg text-white/90 flex items-center min-h-[100px] leading-relaxed">
                                    Each installation is designed with environmental sensitivity — from land assessment and structural optimization to lifecycle monitoring.
                                </p>
                            </ScrollReveal>

                            {/* People Pillar */}
                            <ScrollReveal delay={300} className="bg-card rounded-2xl p-8 lg:p-10 shadow border border-border/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#EDB83D]"></div>
                                <div className="w-16 h-16 mx-auto bg-[#F8F5EE] rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <span className="text-2xl drop-shadow-sm">👥</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#032B11] mb-4 text-center">People</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-center">
                                    Ensuring workforce safety, ethical governance and community engagement across all operational states.
                                </p>
                                <p className="text-xs text-left bg-[#F4F5F4] p-5 rounded-lg text-foreground flex items-center min-h-[100px] leading-relaxed">
                                    We prioritize workforce safety, ethical conduct, local employment generation and transparent stakeholder engagement.
                                </p>
                            </ScrollReveal>

                        </div>

                        <ScrollReveal delay={400}>
                            <p className="mt-12 text-sm font-medium uppercase tracking-widest text-secondary bg-secondary/10 inline-block px-6 py-3 rounded-full border border-secondary/20">
                                These pillars guide our decision-making beyond financial metrics.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* TWO-COLUMN CONTENT & IMAGE BLOCKS */}

                {/* Renewable Energy & Environmental Responsibility */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

                        {/* Image Group */}
                        <ScrollReveal className="relative min-h-[500px] w-full lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 flex items-center justify-center">
                            <Image src="/images/section-solar.jpg" alt="Renewable Energy Integration" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                            <div className="absolute inset-0 bg-energy-green-dark/30 mix-blend-multiply"></div>
                            {/* Decorative Overlay Box */}
                            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/40 shadow-xl max-w-xs">
                                <p className="text-energy-green-dark font-bold text-lg leading-tight mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-energy-yellow"></span> Discipline</p>
                                <p className="text-sm text-muted-foreground">We contribute not through diversification, but through disciplined specialization.</p>
                            </div>
                        </ScrollReveal>

                        {/* Text Content */}
                        <div className="space-y-16 order-1 lg:order-2">

                            {/* Sub-section 1 */}
                            <ScrollReveal className="space-y-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-3xl">☀️</span>
                                    <h3 className="text-2xl font-light tracking-tight text-energy-green-dark md:text-3xl">Renewable Energy for India</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed text-[15px]">
                                    India’s economic growth requires dependable and scalable renewable infrastructure. Through rooftop solar systems, ground-mounted plants and no-cost OPEX/PPA models, Greenveyil enables enterprises and communities to transition confidently toward solar power.
                                </p>
                                <div className="border-l-2 border-secondary pl-5 space-y-3">
                                    <p className="text-xs uppercase tracking-widest text-secondary font-semibold">Our solar-only focus allows us to:</p>
                                    <ul className="space-y-2 text-sm text-foreground">
                                        {["Reduce industrial and commercial carbon footprints", "Support grid stability through distributed generation", "Lower long-term electricity costs", "Strengthen India’s renewable energy penetration"].map((point, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-energy-yellow mt-0.5">•</span> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Sub-section 2 */}
                            <ScrollReveal delay={100} className="space-y-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-3xl">🌍</span>
                                    <h3 className="text-2xl font-light tracking-tight text-energy-green-dark md:text-3xl">Environmental Responsibility</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed text-[15px]">
                                    Environmental stewardship is integrated into every project lifecycle. By concentrating exclusively on solar infrastructure, we maintain focused environmental accountability within one renewable sector.
                                </p>
                                <div className="bg-muted p-5 rounded-xl border border-border/50 text-sm">
                                    <p className="text-xs uppercase tracking-widest text-energy-green-dark font-semibold mb-3">Our approach includes:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                        {["Detailed site feasibility and shading analysis", "Structural integrity assessments", "Compliance with state electricity board regulations", "Preventive maintenance programs", "Performance optimization systems"].map((point, i) => (
                                            <div key={i} className="flex items-center gap-2 text-muted-foreground">
                                                <span className="text-secondary opacity-70">✓</span> {point}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* SOCIAL & GOVERNANCE SECTION (Dark Theme) */}
                <section className="bg-energy-green-dark text-white py-16 lg:py-24 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-energy-yellow/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                            {/* Social Responsibility */}
                            <ScrollReveal className="space-y-6 bg-white/5 p-8 lg:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-light tracking-tight md:text-3xl text-energy-yellow">Social Responsibility</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Sustainable infrastructure depends on responsible human systems. Our operations across major Indian states support regional employment and technical development.
                                </p>
                                <div className="space-y-4 pt-4">
                                    <p className="text-xs uppercase tracking-widest font-semibold opacity-70">Greenveyil is committed to:</p>
                                    <ul className="space-y-3">
                                        {[
                                            { t: "Safe and compliant project execution", i: "👷" },
                                            { t: "Technical skill development and workforce training", i: "📚" },
                                            { t: "Transparent communication with partners", i: "🗣️" },
                                            { t: "Engagement with local contractors and suppliers", i: "🤝" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm">
                                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">{item.i}</span>
                                                {item.t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Governance & Ethical Ops */}
                            <ScrollReveal delay={100} className="space-y-6 bg-white/5 p-8 lg:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-light tracking-tight md:text-3xl text-energy-yellow">Governance & Ethical Operations</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Strong governance ensures long-term sustainability. We believe that disciplined governance is fundamental to building renewable infrastructure that endures.
                                </p>
                                <div className="space-y-4 pt-4">
                                    <p className="text-xs uppercase tracking-widest font-semibold opacity-70">Greenveyil operates with:</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {["Structured commercial agreements", "Transparent pricing frameworks", "Regulatory compliance across states", "Contractual accountability", "Performance-based operational monitoring"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-white/90 bg-black/20 p-3 rounded-lg border border-white/5 h-full">
                                                <span className="text-energy-yellow shrink-0 mt-[1px]">▸</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* ALIGNMENT & CLOSING SECTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <ScrollReveal className="lg:col-span-7 space-y-6">
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Alignment with Sustainable Development Objectives
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Greenveyil’s solar initiatives align with broader global sustainability principles and India’s renewable mission. By delivering reliable solar systems across industrial and commercial sectors, we contribute to long-term environmental resilience and energy independence.
                            </p>
                            <div className="bg-muted p-8 rounded-2xl border border-border/50">
                                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-6">Our work directly supports:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col border-l-2 border-energy-yellow pl-4">
                                        <span className="font-semibold text-energy-green-dark">Affordable & Clean Energy</span>
                                        <span className="text-xs text-muted-foreground mt-1">Expanding grid access</span>
                                    </div>
                                    <div className="flex flex-col border-l-2 border-energy-yellow pl-4">
                                        <span className="font-semibold text-energy-green-dark">Decent Work & Growth</span>
                                        <span className="text-xs text-muted-foreground mt-1">Regional employment</span>
                                    </div>
                                    <div className="flex flex-col border-l-2 border-energy-yellow pl-4">
                                        <span className="font-semibold text-energy-green-dark">Climate Action</span>
                                        <span className="text-xs text-muted-foreground mt-1">Emission reduction</span>
                                    </div>
                                    <div className="flex flex-col border-l-2 border-energy-yellow pl-4">
                                        <span className="font-semibold text-energy-green-dark">Responsible Infrastructure</span>
                                        <span className="text-xs text-muted-foreground mt-1">Sustainable development</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="lg:col-span-5 bg-energy-yellow rounded-3xl p-8 lg:p-12 text-center shadow-lg relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            <h4 className="text-2xl font-bold text-energy-green-dark mb-6">Creating Sustainable Value for Partners and Communities</h4>
                            <p className="text-energy-green-dark/80 font-medium leading-relaxed mb-8">
                                Greenveyil Energy Pvt Ltd remains committed to building solar infrastructure that creates measurable environmental, economic and social value. Sustainability at Greenveyil is not an external promise — it is embedded within our engineering standards, operational frameworks and governance discipline.
                            </p>
                            <div className="bg-energy-green-dark px-6 py-5 rounded-xl shadow-inner text-white text-left inline-block w-full">
                                <p className="text-xs uppercase tracking-widest text-energy-yellow font-semibold mb-2">Our Objective is clear:</p>
                                <p className="text-[15px] font-light italic">
                                    "To expand India’s solar capacity responsibly, efficiently and sustainably — one project at a time."
                                </p>
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
