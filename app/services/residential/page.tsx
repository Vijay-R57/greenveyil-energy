import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Home, Building, ShieldCheck, Zap } from "lucide-react"

export const metadata = {
    title: "Residential Solar | Greenveyil Energy",
    description: "Smart Rooftop Solar for Independent Homes & Housing Societies",
}

export default function ResidentialSolarPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/80 mix-blend-multiply z-10"></div>
                        <Image src="/images/resedential solar r1.jpeg" alt="Residential Solar India" fill className="object-cover opacity-60" />
                        {/* Decorative dark gradient for board-room feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.energy-yellow/10)_0%,transparent_70%)] z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow flex items-center justify-center gap-2">
                                <Home className="w-4 h-4" /> Residential Solar
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
                                Smart Rooftop Solar for Homes & Housing Societies
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Greenveyil Energy Pvt Ltd designs and installs structured rooftop solar systems engineered to reduce electricity dependency, ensure regulatory compliance, and deliver long-term stability.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* OVERVIEW & WHY RESIDENTIAL (Split Block) */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal>
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                                <Image src="/images/rooftop.jpg" alt="Rooftop Installation" fill className="object-cover group-hover:scale-105 transition-transform duration-700 sepia-[.1]" />
                                <div className="absolute inset-0 bg-energy-green-dark/20 mix-blend-multiply"></div>
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-energy-yellow/20 rounded-full flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-energy-yellow-dark" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-energy-green-dark">Exclusive Specialization</p>
                                            <p className="text-sm text-muted-foreground mt-1">Built for performance under Indian climatic conditions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl mb-4">
                                    Why Residential Solar in India
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    India’s residential electricity demand continues to grow. Rooftop solar enables homeowners and housing societies to actively manage their energy consumption and independence.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Reduce monthly electricity expenditure",
                                    "Stabilize long-term energy costs",
                                    "Contribute to renewable capacity growth",
                                    "Utilize unused rooftop space efficiently"
                                ].map((benefit, i) => (
                                    <div key={i} className="bg-muted/50 p-4 rounded-xl border border-border/50 hover:border-energy-yellow/50 transition-colors flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-energy-yellow shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-foreground leading-tight">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-energy-green-dark/5 p-5 border-l-4 border-energy-green-dark rounded-r-xl">
                                <p className="text-sm text-energy-green-dark font-medium leading-relaxed">
                                    With supportive net metering policies across multiple states, residential solar has become both technically viable and financially beneficial.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* OUR RESIDENTIAL SOLUTIONS */}
                <section className="bg-muted/30 py-20 lg:py-28 border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Our Residential Solar Solutions
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                                Greenveyil offers structured residential solar systems tailored to individual consumption patterns. Each system is designed for maximum generation efficiency while maintaining safety and durability.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                            {/* Rooftop Solar Card */}
                            <ScrollReveal delay={100} className="bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="p-1 bg-energy-yellow"></div>
                                <div className="p-8 lg:p-10">
                                    <div className="w-14 h-14 bg-energy-green-dark/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Home className="w-7 h-7 text-energy-green-dark" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Rooftop Solar Installation</h3>
                                    <p className="text-muted-foreground text-sm mb-6">Structured on-grid rooftop solar systems for independent properties.</p>

                                    <ul className="space-y-3">
                                        {["On-grid rooftop solar systems", "Structural load evaluation", "Shadow and orientation analysis", "Inverter and panel optimization", "Grid synchronization"].map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-foreground font-medium">
                                                <div className="w-5 h-5 rounded-full bg-energy-green-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="text-[10px] text-energy-green-dark">✓</span>
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Group Captive Card */}
                            <ScrollReveal delay={200} className="bg-energy-green-dark text-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 relative isolate">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                                <div className="p-1 bg-energy-yellow"></div>
                                <div className="p-8 lg:p-10">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Building className="w-7 h-7 text-energy-yellow" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Group Captive & Community Solar</h3>
                                    <p className="text-white/80 text-sm mb-6">Tailored for housing societies and large gated communities.</p>

                                    <ul className="space-y-3">
                                        {["Shared rooftop generation", "Distributed energy allocation", "Regulatory coordination", "Society billing integration"].map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                                                <div className="w-5 h-5 rounded-full bg-energy-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="text-[10px] text-energy-yellow">✓</span>
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* INSTALLATION PROCESS (Timeline/Steps) */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                            Our Installation Process
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            We follow a disciplined and transparent execution model. Every stage is documented to ensure clarity and compliance.
                        </p>
                    </ScrollReveal>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden md:block absolute top-[28px] left-[50px] right-[50px] h-1 bg-border/40 z-0"></div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                            {[
                                { title: "Assessment", desc: "Energy Consumption Analysis" },
                                { title: "Survey", desc: "Structural & Feasibility Check" },
                                { title: "Design", desc: "System Sizing & Savings Model" },
                                { title: "Approval", desc: "Regulatory & Net Metering" },
                                { title: "Installation", desc: "Deployment & Synchronization" },
                                { title: "Handover", desc: "Performance Testing & Docs" }
                            ].map((step, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-full bg-card border-4 border-background shadow-md flex items-center justify-center mb-4 relative">
                                        {/* Colored border based on position */}
                                        <div className="absolute inset-x-0 inset-y-0 rounded-full border-2 border-energy-green-dark/20 pointer-events-none"></div>
                                        <span className="text-lg font-bold text-energy-green-dark">{i + 1}</span>
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-tight">{step.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINANCIAL & O&M SPLIT SECTIONS */}
                <section className="bg-energy-green-dark text-white py-20 lg:py-28 relative overflow-hidden isolate">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 -z-10"></div>
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Financial Models */}
                        <ScrollReveal className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-light tracking-tight text-energy-yellow md:text-4xl mb-4">
                                    Financial Models & Net Metering
                                </h3>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    Greenveyil provides flexible financial structures based on client requirements. We coordinate natively with state electricity boards to ensure net metering compliance and smooth grid integration.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-energy-yellow"></div>
                                        <h4 className="text-lg font-semibold text-white">CAPEX Model</h4>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed pl-5">
                                        Homeowner-owned system with upfront investment and maximized long-term savings through complete asset ownership.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-energy-yellow"></div>
                                        <h4 className="text-lg font-semibold text-white">OPEX / No-Cost Model</h4>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed pl-5">
                                        Where applicable, structured agreements enable reduced electricity cost without high initial investment, paying strictly for the power generated.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Monitoring & Maintenance */}
                        <ScrollReveal delay={100} className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl mb-4">
                                    Monitoring & Maintenance
                                </h3>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    Solar infrastructure must perform reliably for decades. We ensure sustained energy output and asset longevity.
                                </p>
                            </div>

                            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/10">
                                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-6">Our O&M services include:</p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Real-time performance monitoring",
                                        "Annual maintenance contracts",
                                        "Preventive system inspections",
                                        "Inverter diagnostics",
                                        "Performance reporting"
                                    ].map((service, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-foreground/90 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" />
                                            <span className="font-medium">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-border/50">
                                    <p className="text-sm text-muted-foreground italic">"Engineering discipline defines our residential solar execution."</p>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

                {/* SAFETY & COMPLIANCE */}
                <section className="bg-muted py-16">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-card rounded-3xl p-8 lg:p-12 border border-border/50 shadow-sm">
                            <div className="lg:max-w-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck className="w-8 h-8 text-energy-green-dark" />
                                    <h3 className="text-2xl font-bold text-energy-green-dark">Safety & Compliance</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    All residential installations stringently adhere to structural and electrical safety standards required by regional mandates.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 w-full lg:w-1/2">
                                {["State electricity board guidelines", "Electrical safety standards", "Structural safety norms", "Fire and surge protection standards"].map((item, i) => (
                                    <div key={i} className="bg-muted px-4 py-3 rounded-xl border border-border/40 text-sm font-medium text-foreground flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-energy-green-dark shrink-0"></div>
                                        {item}
                                    </div>
                                ))}
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
                                Schedule a Residential Solar Assessment
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Understand your rooftop’s solar potential through a structured feasibility review.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {["Electricity bill analysis", "System sizing recommendation", "Savings projection", "Installation roadmap"].map((tag, i) => (
                                    <span key={i} className="inline-block px-4 py-2 bg-white/50 border border-white backdrop-blur-sm rounded-full text-xs font-semibold text-energy-green-dark uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-8 py-4 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                            >
                                Schedule a Free Solar Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
