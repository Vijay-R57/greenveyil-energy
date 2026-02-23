import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Building, Zap, Sun, ShieldCheck, ClipboardCheck, ArrowUpRight, Activity } from "lucide-react"

export const metadata = {
    title: "Housing Society Solar | Greenveyil Energy",
    description: "Structured Solar Solutions for Residential Communities across India.",
}

export default function HousingSocietyPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/80 mix-blend-multiply z-10"></div>
                        <Image src="/images/housing.jpg" alt="Housing Society Solar" fill className="object-cover opacity-60" />
                        {/* Decorative dark gradient for board-room feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.energy-yellow/10)_0%,transparent_70%)] z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow flex items-center justify-center gap-2">
                                <Building className="w-4 h-4" /> Residential Communities
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
                                Housing Society Solar Infrastructure
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Greenveyil Energy Pvt Ltd designs and delivers rooftop solar systems tailored specifically for apartment complexes and gated housing societies across India.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* INTRODUCTION / THE NEED */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">The Market Reality</h2>
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Why Housing Societies Need Solar Adaptation
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our solutions are engineered to directly reduce common area electricity expenses, severely stabilize long-term energy costs, and simplify structural renewable adoption for large residential communities.
                            </p>
                            <div className="mt-8 space-y-6">
                                <div className="border-l-4 border-destructive/80 pl-6 py-2 opacity-90">
                                    <h4 className="text-sm font-bold text-destructive uppercase tracking-widest mb-3">Core Challenges:</h4>
                                    <ul className="space-y-2">
                                        {["Continually rising electricity tariffs for common areas", "Unsustainably high monthly maintenance charges", "Increasing grid dependency", "Growing structural sustainability expectations"].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-foreground/80 font-medium items-center">
                                                <div className="w-1 h-1 bg-destructive rounded-full shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100} className="bg-card p-10 lg:p-12 rounded-3xl border border-border/60 shadow-xl relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-48 h-48 bg-energy-green-dark/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                            <h4 className="text-xl font-bold text-energy-green-dark mb-6 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-energy-yellow" /> The Solar Transformation
                            </h4>
                            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">Engineered infrastructure transforms unused rooftop space into a long-term economic asset, allowing societies to directly:</p>
                            <ul className="space-y-4">
                                {[
                                    { t: "Reduce common area electricity bills structurally" },
                                    { t: "Lower systemic monthly maintenance burden for residents" },
                                    { t: "Improve overall property valuation natively" },
                                    { t: "Contribute securely to renewable energy adoption" }
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-foreground font-semibold items-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> {step.t}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ROOFTOP & GROUP NET METERING CORE ARCHITECTURE */}
                <section className="bg-energy-green-dark py-20 lg:py-32 relative text-white isolate overflow-hidden">
                    <div className="absolute right-0 top-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16 lg:mb-24">
                            <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl max-w-3xl mx-auto leading-tight">
                                Structural Rooftop Consumption & Distribution
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                            <ScrollReveal delay={100} className="bg-black/20 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white mb-4">Common Area Deployment</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-8">
                                    Housing society solar systems are meticulously installed ensuring structural integrity and zero waterproofing disturbances. We utilize:
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Rooftop Terraces", "Elevated Super-Structures", "Parking Shed Structures"].map((tag, i) => (
                                        <span key={i} className="bg-white/10 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">{tag}</span>
                                    ))}
                                </div>
                                <h4 className="text-xs uppercase tracking-widest text-energy-yellow font-bold mb-4">Primary Load Offsetting:</h4>
                                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                                    {["Lift Operations", "Water Pumps", "Corridor Lighting", "Clubhouse Facilities", "Security Infrastructure"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-white/90">
                                            <div className="w-1.5 h-1.5 bg-energy-yellow rounded-full"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={200} className="bg-black/20 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden">
                                <Activity className="absolute bottom-4 right-4 w-40 h-40 text-white/5 -z-10" />
                                <h3 className="text-2xl font-bold text-white mb-4">Group Net Metering Framework</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-8">
                                    Where permitted by absolute state regulations, we engineer advanced metering protocols. We navigate the complete regulatory framework natively.
                                </p>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        { title: "Distributed Allocation", desc: "Solar power generated on main rooftops is distributed logically across multiple common meters." },
                                        { title: "Grid Exportation", desc: "Excess energy generated during peak hours is directly exported to the state grid." },
                                        { title: "Credit Adjustment", desc: "Grid exports are automatically adjusted against monthly bills as metering credits." }
                                    ].map((feature, i) => (
                                        <li key={i} className="flex gap-4">
                                            <Activity className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-bold text-sm">{feature.title}</h4>
                                                <p className="text-white/60 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* FINANCIAL MODELS - TWO PATHWAYS */}
                <section className="bg-muted/30 py-20 lg:py-28 relative overflow-hidden">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Financial Engineering</h2>
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl">
                                Tailored Financial Pathways
                            </h3>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <ScrollReveal delay={100} className="bg-card rounded-3xl border border-border flex flex-col shadow-sm max-h-[100%]">
                                <div className="p-8 lg:p-10 border-b border-border/50 bg-energy-green-dark/5">
                                    <h4 className="text-2xl font-bold text-energy-green-dark mb-2">Direct CAPEX Model</h4>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Asset Ownership System</p>
                                </div>
                                <div className="p-8 lg:p-10 flex-grow">
                                    <p className="text-sm text-foreground/80 leading-relaxed mb-8 font-medium">
                                        The housing society invests upfront in the solar capital infrastructure and natively owns the asset directly.
                                    </p>
                                    <h5 className="text-xs font-bold text-energy-green-dark uppercase tracking-widest mb-4">Structural Results:</h5>
                                    <ul className="space-y-3 mb-8">
                                        {["Savings directly slash common electricity bills", "Maximum long-term ROI over 20–25 years", "Absolute control of energy generation"].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-muted-foreground items-start">
                                                <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={200} className="bg-energy-green-dark rounded-3xl border border-border flex flex-col shadow-xl text-white">
                                <div className="p-8 lg:p-10 border-b border-white/10 bg-white/5 relative overflow-hidden">
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-energy-yellow/20 rounded-bl-full -z-10"></div>
                                    <h4 className="text-2xl font-bold text-white mb-2">OPEX (Zero Investment)</h4>
                                    <p className="text-xs uppercase tracking-widest text-energy-yellow font-semibold">Structured PPA System</p>
                                </div>
                                <div className="p-8 lg:p-10 flex-grow">
                                    <p className="text-sm text-white/80 leading-relaxed mb-8 font-medium">
                                        Greenveyil strictly funds, installs, and maintains the tier-1 system with zero upfront capital contribution from the society whatsoever.
                                    </p>
                                    <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Structural Results:</h5>
                                    <ul className="space-y-3 mb-8">
                                        {["No large capital outflow required", "Pay a dedicated tariff lower than standard grid rates", "Absolute performance accountability held by us", "Immediate cost reductions"].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-white/80 items-start text-sm">
                                                <Sun className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* PROCESS AND MAINTENANCE (Grid of cards) */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Process */}
                        <ScrollReveal className="bg-card p-10 lg:p-12 rounded-3xl border border-border/60 shadow-sm relative overflow-hidden">
                            <ClipboardCheck className="absolute top-6 right-6 w-32 h-32 text-muted/40 -z-10" />
                            <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Society Coordination Process</h3>
                            <p className="text-sm text-muted-foreground mb-8">Solar deployment in dense housing societies requires intensely structured coordination and communication.</p>

                            <div className="space-y-5">
                                {[
                                    { "title": "Site Feasibility & Evaluation", "desc": "Detailed rooftop structural analysis for load viability." },
                                    { "title": "Society Management Support", "desc": "Technical presentations targeting committee approvals directly." },
                                    { "title": "Regulatory Documentation", "desc": "Complete net metering application execution." },
                                    { "title": "Precision Commissioning", "desc": "Tier-1 installation resulting in final grid synchronization." },
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-energy-green-dark flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-foreground">{step.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Maintenance */}
                        <ScrollReveal delay={100} className="bg-card p-10 lg:p-12 rounded-3xl border border-border/60 shadow-sm relative overflow-hidden h-full flex flex-col justify-center bg-gradient-to-br from-card to-muted">
                            <ShieldCheck className="absolute bottom-6 right-6 w-40 h-40 text-background -z-10" />
                            <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Long-Term Diagnostics</h3>
                            <p className="text-sm text-muted-foreground mb-8">Rooftop infrastructure must safely operate linearly over 25+ years. We provide unyielding post-installation support strictly managing reliability.</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Real-time performance metrics", "Annual maintenance contracts", "Preventative diagnostics", "Committee transparency reporting"].map((bullet, i) => (
                                    <div key={i} className="bg-background border border-border/50 p-4 rounded-xl flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" />
                                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground leading-tight">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FINAL CTA - ASSESSMENTS */}
                <section className="bg-energy-yellow py-20 lg:py-24 relative overflow-hidden text-center isolate">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-energy-green-dark/5 blur-[100px] rounded-full -z-10"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Schedule a Society Solar Assessment
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Evaluate exactly how Tier-1 rooftop solar integration can systematically eliminate your society’s common electricity overheads accurately today.
                            </p>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-10 py-5 text-sm font-bold uppercase tracking-wider text-energy-yellow transition-all hover:bg-white hover:text-energy-green-dark hover:scale-[1.02] shadow-xl hover:shadow-2xl group border border-transparent hover:border-energy-green-dark/20"
                            >
                                Schedule Housing Society Consultation <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>

                            <p className="text-xs mt-6 text-energy-green-dark/60 font-semibold uppercase tracking-widest max-w-md mx-auto">
                                Includes: Common Load Analysis • Capacity Evaluation • ROI Pathway Guidance
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
