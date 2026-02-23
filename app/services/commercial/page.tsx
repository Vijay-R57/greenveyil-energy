import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Building2, TrendingUp, ShieldCheck, Leaf, Factory, Zap } from "lucide-react"

export const metadata = {
    title: "Commercial Solar | Greenveyil Energy",
    description: "Scalable Solar Infrastructure for Commercial Enterprises",
}

export default function CommercialSolarPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION - BOARDROOM READY */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/80 mix-blend-multiply z-10"></div>
                        <Image src="/images/commercial r1.jpeg" alt="Commercial Solar India" fill className="object-cover opacity-60" />
                        {/* Decorative dark gradient for board-room feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.energy-yellow/10)_0%,transparent_70%)] z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow flex items-center justify-center gap-2">
                                <Building2 className="w-4 h-4" /> Commercial Solar
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
                                Scalable Solar Infrastructure for Commercial Enterprises
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Greenveyil Energy Pvt Ltd delivers high-performance rooftop and ground-mounted solar solutions engineered to reduce operating expenditure, stabilize electricity costs, and support long-term renewable transition goals.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* COMMERCIAL ENERGY LANDSCAPE */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl mb-4">
                                    The Commercial Energy Landscape
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Commercial properties — including office buildings, educational institutions, retail complexes, hotels, and hospitals — face rising electricity tariffs and demand charges. We focus exclusively on solar EPC infrastructure, ensuring specialized execution and measurable performance outcomes.
                                </p>
                            </div>

                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
                                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-6">Strategic Advantages of Solar:</p>
                                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                                    {[
                                        "Lower and predictable energy costs",
                                        "Reduced grid dependency",
                                        "Improved ESG positioning",
                                        "Long-term financial efficiency"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex gap-3 items-start group">
                                            <TrendingUp className="w-5 h-5 text-energy-yellow shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-medium text-foreground leading-tight">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group border border-border/50">
                            <Image src="/images/commersian c1.jpeg" alt="Commercial Energy Context" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 saturate-50" />
                            <div className="absolute inset-0 bg-energy-green-dark/30 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-energy-green-dark/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-energy-green-dark/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl max-w-sm">
                                    <p className="font-bold text-white text-lg flex items-center gap-2 mb-2">
                                        <ShieldCheck className="w-5 h-5 text-energy-yellow" /> Regulatory Alignment
                                    </p>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        Greenveyil structures commercial solar projects aligned directly with state electricity regulations and crucial business continuity requirements.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* OUR COMMERCIAL SOLUTIONS */}
                <section className="bg-energy-green-dark py-20 lg:py-28 relative overflow-hidden isolate">
                    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                                Enterprise-Grade Solar Solutions
                            </h2>
                            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                                Each installation is engineered for durability, safety, and long-term generation stability tailored to intensive commercial loads.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {/* Rooftop Solar Card */}
                            <ScrollReveal delay={100} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col">
                                <div className="w-12 h-12 bg-energy-yellow/20 rounded-xl flex items-center justify-center mb-6 border border-energy-yellow/30">
                                    <Building2 className="w-6 h-6 text-energy-yellow" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Rooftop Solar Systems</h3>
                                <ul className="space-y-4 flex-grow">
                                    {["Custom system design based on load profile", "Structural rooftop evaluation", "High-efficiency solar modules", "Centralized inverter systems", "Grid synchronization & compliance"].map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
                                            <div className="w-4 h-4 rounded-full bg-energy-yellow flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-energy-green-dark font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Ground Mounted Card */}
                            <ScrollReveal delay={200} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col">
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 border border-secondary/30">
                                    <Factory className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Ground-Mounted Plants <span className="block text-xs font-normal text-white/50 mt-1">(Where Applicable)</span></h3>
                                <ul className="space-y-4 flex-grow">
                                    {["Detailed site feasibility studies", "Complete land optimization", "Utility-scale system design", "Intensive project execution"].map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
                                            <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-white font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Group Captive Card */}
                            <ScrollReveal delay={300} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col">
                                <div className="w-12 h-12 bg-energy-yellow/20 rounded-xl flex items-center justify-center mb-6 border border-energy-yellow/30">
                                    <Zap className="w-6 h-6 text-energy-yellow" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Group Captive Participation</h3>
                                <ul className="space-y-4 flex-grow">
                                    {["Shared renewable capacity allocation", "Structured power purchase agreements", "Regulatory framework coordination", "Financial yield optimization"].map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
                                            <div className="w-4 h-4 rounded-full bg-energy-yellow flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-energy-green-dark font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* FINANCIAL STRUCTURES (BOARDROOM FOCUS) */}
                <section className="bg-muted/30 py-20 lg:py-28 border-b border-border/50 relative overflow-hidden">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                            <ScrollReveal className="lg:col-span-5 relative h-full min-h-[400px] w-full isolate">
                                <div className="absolute inset-0 border-2 border-energy-yellow/50 rounded-3xl -translate-x-4 -translate-y-4 -z-10"></div>
                                <div className="relative h-full w-full bg-card rounded-3xl overflow-hidden shadow-xl p-10 flex flex-col justify-center border border-border/50">
                                    <div className="w-16 h-16 bg-energy-green-dark/5 rounded-full flex items-center justify-center mb-6">
                                        <TrendingUp className="w-8 h-8 text-energy-green-dark" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-energy-green-dark mb-4">Financial Clarity</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                        Commercial solar adoption requires structured financial clarity. We provide models tailored strictly to operating expenditure reduction and ROI predictability.
                                    </p>
                                    <div className="space-y-4">
                                        {["Immediate cost reduction", "No capital lock-in (OPEX)", "Performance accountability", "Long-term energy price stability"].map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm font-semibold text-energy-green-dark bg-energy-green-dark/5 p-3 rounded-xl border border-energy-green-dark/10">
                                                <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0" />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100} className="lg:col-span-7 space-y-8">
                                <div>
                                    <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl mb-6">
                                        Financial Structures for Commercial Clients
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {/* CAPEX */}
                                    <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <h4 className="text-xl font-bold text-energy-green-dark">CAPEX Model</h4>
                                            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Asset Ownership</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Client-owned solar system with an upfront capital investment. This secures maximum long-term energy savings, accelerated depreciation tax benefits, and absolute asset ownership.
                                        </p>
                                    </div>

                                    {/* OPEX */}
                                    <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-energy-yellow"></div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <h4 className="text-xl font-bold text-energy-green-dark">OPEX / PPA Model</h4>
                                            <span className="bg-energy-yellow/20 text-energy-yellow-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Zero Upfront Cash</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            No upfront capital investment. Greenveyil partners design, install, and maintain the system. The commercial client purchases the generated power through a Power Purchase Agreement (PPA) at a pre-agreed tariff significantly lower than grid rates.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* IMPLEMENTATION / FRAMEWORK */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                            Our Implementation Framework
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            Every commercial solar project follows a disciplined execution model. This structured methodology ensures strict business continuity and full compliance.
                        </p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
                        {[
                            { step: "01", title: "Energy Audit", desc: "Granular electrical load & demand assessment." },
                            { step: "02", title: "Modelling", desc: "Detailed feasibility & comprehensive financial modelling." },
                            { step: "03", title: "Coordination", desc: "State regulatory & specific net metering compliance." },
                            { step: "04", title: "Engineering", desc: "System engineering & precision installation." },
                            { step: "05", title: "Synchronization", desc: "Commissioning & seamless grid integration." },
                            { step: "06", title: "Assurance", desc: "Long-term performance monitoring & yield tracking." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 50} className="bg-muted p-8 rounded-2xl border border-border/40 hover:border-energy-yellow/50 transition-colors">
                                <span className="text-4xl font-light text-energy-green-dark/20 block mb-4">{item.step}</span>
                                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ESG & USE CASES SPLIT */}
                <section className="bg-energy-green-dark text-white py-20 lg:py-28 relative overflow-hidden isolate">
                    {/* Abstract background graphics */}
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-energy-yellow/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 -z-10 pointer-events-none"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* ESG Positioning */}
                        <ScrollReveal className="space-y-8">
                            <div className="flex items-center gap-4 mb-4">
                                <Leaf className="w-10 h-10 text-energy-yellow" />
                                <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                                    Strengthening ESG Positioning
                                </h3>
                            </div>
                            <p className="text-white/80 leading-relaxed text-lg">
                                Commercial solar adoption actively enhances corporate sustainability commitments. Solar infrastructure directly supports both financial performance and long-term environmental objectives.
                            </p>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <ul className="space-y-4">
                                    {[
                                        "Reducing carbon emissions sustainably",
                                        "Supporting corporate renewable energy targets",
                                        "Improving mandatory ESG reporting metrics",
                                        "Demonstrating active environmental responsibility"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex gap-3 items-start text-white/90">
                                            <div className="w-5 h-5 rounded-full bg-energy-yellow flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-energy-green-dark font-bold">✓</span>
                                            </div>
                                            <span className="leading-tight font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Ideal Use Cases + O&M Summary */}
                        <ScrollReveal delay={100} className="space-y-10">

                            {/* Use Cases block */}
                            <div>
                                <h4 className="text-xl font-bold text-energy-yellow mb-6">Ideal Commercial Scenarios</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        "Office Complexes", "Educational Institutes", "Healthcare Facilities", "Retail Chains", "Hospitality Properties", "Commercial Warehouses"
                                    ].map((useCase, i) => (
                                        <div key={i} className="bg-black/20 text-white/90 text-sm font-medium p-3 rounded-lg border border-white/10 text-center flex items-center justify-center min-h-[60px]">
                                            {useCase}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-white/50 mt-4 italic">Each project is tailored to energy consumption patterns and infrastructure capacity.</p>
                            </div>

                            {/* Brief O&M Callout inside this block to save vertical space but retain importance */}
                            <div className="border-t border-white/10 pt-8">
                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-secondary" /> Operational Assurance
                                </h4>
                                <p className="text-sm text-white/80 leading-relaxed mb-4">
                                    Solar infrastructure is a long-term asset. Our O&M services include generation monitoring, annual maintenance, and analytics. We ensure measurable energy output and predictable return on investment over decades.
                                </p>
                            </div>

                        </ScrollReveal>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="bg-energy-yellow py-20 lg:py-24 relative overflow-hidden text-center isolate">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Schedule a Commercial Solar Consultation
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Evaluate how structured solar infrastructure can reduce operational expenditure for your commercial property.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {["Tariff comparison analysis", "System capacity estimation", "ROI projection", "Financial model recommendation"].map((tag, i) => (
                                    <span key={i} className="inline-block px-4 py-2 bg-white/50 border border-white backdrop-blur-sm rounded-full text-xs font-semibold text-energy-green-dark uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-8 py-4 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                            >
                                Schedule Free Commercial Assessment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
