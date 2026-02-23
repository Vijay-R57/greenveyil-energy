import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Factory, Home, Target, ShieldCheck, MapPin, BarChart3, Settings } from "lucide-react"

export const metadata = {
    title: "Portfolio Overview | Greenveyil Energy",
    description: "Structured Solar Infrastructure Across India",
}

export default function PortfolioOverviewPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/80 mix-blend-multiply z-10"></div>
                        <Image src="/images/section-solar.jpg" alt="Solar Portfolio India" fill className="object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl pt-8">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Target className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Portfolio Overview</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                                Structured Solar Infrastructure Across India
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Developing and deploying disciplined solar infrastructure tailored rigorously to residential, commercial and industrial energy consumers.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* PORTFOLIO SNAPSHOT & INTRODUCTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-6">
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Engineering Precision & Operational Accountability
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our portfolio reflects focused specialization in solar — executed with strict engineering precision, regulatory compliance, and unwavering long-term operational accountability.
                            </p>
                            <div className="border-l-4 border-energy-yellow pl-5 py-2 mt-4 bg-muted/50 rounded-r-xl">
                                <p className="text-sm font-semibold text-energy-green-dark uppercase tracking-widest">We do not diversify across renewable categories. Our strength lies strictly in dedicated solar expertise.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="bg-card p-10 rounded-3xl border border-border/60 shadow-xl relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-energy-green-dark/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                            <h4 className="text-lg font-bold text-energy-green-dark mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-energy-yellow" /> Executed Project Structures
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Distributed rooftop solar systems",
                                    "Industrial high-capacity installations",
                                    "Commercial solar deployments",
                                    "Group captive solar participation models"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                        <div className="w-5 h-5 rounded-full bg-energy-green-dark/10 flex items-center justify-center shrink-0">
                                            <span className="text-energy-green-dark text-[10px]">✓</span>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-xs text-muted-foreground italic">
                                *Each project is structured independently based on site feasibility, energy load requirements, and rigorous regulatory alignment.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* PORTFOLIO METRICS */}
                <section className="bg-energy-green-dark py-20 lg:py-28 relative overflow-hidden isolate">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl">
                                Portfolio Metrics
                            </h2>
                            <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                                Our portfolio represents structured, repeatable execution capabilities across varied energy consumption profiles nationwide.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Capacity Box */}
                            <ScrollReveal delay={100} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <BarChart3 className="w-8 h-8 text-secondary mb-6" />
                                <h4 className="text-lg font-bold text-white mb-4">Installed Capacity</h4>
                                <ul className="space-y-3">
                                    {["MW-scale industrial deployments", "Distributed commercial rooftops", "Residential urban clusters"].map((item, i) => (
                                        <li key={i} className="text-sm text-white/70 flex gap-2 items-start">
                                            <span className="text-secondary mt-0.5">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Impact Box */}
                            <ScrollReveal delay={200} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <TrendingUp className="w-8 h-8 text-secondary mb-6" />
                                <h4 className="text-lg font-bold text-white mb-4">Performance Impact</h4>
                                <ul className="space-y-3">
                                    {["Long-term electricity cost stabilization", "Measurable grid dependency reduction", "Contribution to renewable adoption"].map((item, i) => (
                                        <li key={i} className="text-sm text-white/70 flex gap-2 items-start">
                                            <span className="text-secondary mt-0.5">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Client Categories Box */}
                            <ScrollReveal delay={300} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <Building2 className="w-8 h-8 text-secondary mb-6" />
                                <h4 className="text-lg font-bold text-white mb-4">Categories Served</h4>
                                <ul className="space-y-3">
                                    {["Manufacturing & industrial facilities", "Commercial office complexes", "Educational & Healthcare institutions", "Residential communities"].map((item, i) => (
                                        <li key={i} className="text-sm text-white/70 flex gap-2 items-start">
                                            <span className="text-secondary mt-0.5">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* PORTFOLIO BY SEGMENT */}
                <section className="bg-muted py-20 lg:py-28 relative isolate border-b border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-energy-green-dark md:text-4xl">
                                Portfolio by Segment
                            </h2>
                            <p className="mt-4 text-muted-foreground text-lg">Structured engineering tailored for specific architectural and load-bearing requirements.</p>
                        </ScrollReveal>

                        <div className="grid lg:grid-cols-3 gap-8">

                            {/* Residential */}
                            <ScrollReveal delay={100} className="bg-card flex flex-col p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-14 h-14 bg-energy-green-dark/10 rounded-2xl flex items-center justify-center mb-8">
                                    <Home className="w-7 h-7 text-energy-green-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Residential</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                    Systems designed strictly for efficiency, safety, and 25-year lifecycle sustainability within housing communities.
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-border/50">
                                    {["Net metering integration", "Structural load assessment", "Optimized space utilization", "Long-term reliability"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm font-semibold text-foreground items-center">
                                            <ArrowRight className="w-3 h-3 text-secondary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Commercial */}
                            <ScrollReveal delay={200} className="bg-card flex flex-col p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-14 h-14 bg-energy-green-dark/10 rounded-2xl flex items-center justify-center mb-8">
                                    <Building2 className="w-7 h-7 text-energy-green-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Commercial</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                    Cost-optimization installations built entirely around predictable corporate returns and operational stability.
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-border/50">
                                    {["Medium to large rooftop systems", "Deep Financial modelling support", "Structured OPEX / PPA formats", "Performance monitoring"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm font-semibold text-foreground items-center">
                                            <ArrowRight className="w-3 h-3 text-secondary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Industrial */}
                            <ScrollReveal delay={300} className="bg-card flex flex-col p-8 lg:p-10 rounded-3xl border border-energy-green-dark/20 shadow-md relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                                <div className="absolute right-0 top-0 w-32 h-32 bg-energy-yellow/10 rounded-bl-full -z-10"></div>
                                <div className="w-14 h-14 bg-energy-yellow/20 rounded-2xl flex items-center justify-center mb-8 border border-energy-yellow/30">
                                    <Factory className="w-7 h-7 text-energy-yellow-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Industrial</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                    Massive rooftop and ground-mounted frameworks engineered for sustained MW-level continuous factory performance.
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-border/50">
                                    {["High-capacity system design", "Load-matched generation planning", "Long-term PPA stability frameworks", "SCADA-enabled analytics"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm font-semibold text-foreground items-center">
                                            <ArrowRight className="w-3 h-3 text-energy-yellow-dark" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* FEATURED SNAPSHOTS & EXECUTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

                        {/* Snapshots Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <ScrollReveal>
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark mb-8">
                                    Featured Project Snapshots
                                </h3>
                            </ScrollReveal>

                            {[
                                { title: "Industrial Manufacturing Unit", loc: "Tamil Nadu", desc: "High-capacity rooftop solar installation securely designed for highly stable industrial load management." },
                                { title: "Commercial Business Park", loc: "Karnataka", desc: "Optimized corporate rooftop solar deployment drastically reducing long-term electricity expenditure." },
                                { title: "Group Captive Participation", loc: "Maharashtra", desc: "Highly structured off-site solar allocation model delivering complete corporate tariff stability." }
                            ].map((snap, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="bg-muted p-6 rounded-2xl border-l-4 border-energy-green-dark group">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-foreground group-hover:text-energy-green-dark transition-colors">{snap.title}</h4>
                                        <span className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded">
                                            <MapPin className="w-3 h-3" /> {snap.loc}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{snap.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Engineering & Compliance Column */}
                        <div className="lg:col-span-7 space-y-12">
                            <ScrollReveal className="bg-card p-10 lg:p-12 border border-border/60 shadow-sm rounded-3xl relative">
                                <Settings className="absolute top-8 right-8 w-32 h-32 text-muted opacity-30" />
                                <h4 className="text-2xl font-bold text-energy-green-dark mb-6 relative z-10">Engineering & Execution Capability</h4>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed relative z-10">
                                    Each project strictly follows a defined execution roadmap from preliminary feasibility to final grid commissioning.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                                    {["In-house engineering assessment", "Rigorous structured EPC workflow", "Regulatory document coordination", "State electricity compliance", "Dedicated O&M division fallback"].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center text-sm font-semibold text-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-energy-green-dark" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100} className="bg-energy-yellow border border-energy-yellow-dark/20 p-10 lg:p-12 rounded-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-energy-green-dark rounded-xl flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-energy-green-dark">Compliance & Quality</h4>
                                </div>
                                <p className="text-energy-green-dark/80 font-medium mb-6">
                                    Execution discipline ensures long-term asset reliability. Every portfolio project operates strictly within:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {["State board regulations", "Structural safety limits", "Electrical protection codes", "Grid syncing protocols"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm font-bold text-energy-green-dark bg-white/50 px-4 py-3 rounded-lg border border-energy-green-dark/10">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>

                    </div>
                </section>

                {/* EXPANSION & FINAL CTA SECTION */}
                <section className="bg-energy-green-dark text-white py-20 lg:py-28 relative overflow-hidden text-center isolate">
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                                Ongoing Portfolio Expansion
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 font-light leading-relaxed">
                                Greenveyil responsibly expands critical solar infrastructure across high-demand regions in India. Our growth strategy remains measured, highly calculated, and purely performance-driven.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-16">
                                {["Industrial-Scale Installations", "Commercial Rooftop Adoption", "Structured OPEX Models", "Long-Term PPA Management"].map((tag, i) => (
                                    <span key={i} className="inline-block px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-black/20 p-8 rounded-3xl border border-white/5">
                                <h3 className="text-2xl font-bold text-energy-yellow mb-4">Explore Detailed Projects</h3>
                                <p className="text-sm text-white/70 mb-8 max-w-lg mx-auto">
                                    Review our segment-wise and region-specific projects to clearly understand the depth and scale of our structural solar execution capabilities.
                                </p>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-full bg-energy-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-energy-green-dark transition-all hover:bg-white hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                                >
                                    View Detailed Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
