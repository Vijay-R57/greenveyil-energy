import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, BarChart3, Settings, AlertTriangle, Wrench } from "lucide-react"

export const metadata = {
    title: "Operations & Maintenance | Greenveyil Energy",
    description: "Protecting Solar Performance for the Long Term",
}

export default function OperationsMaintenancePage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/80 mix-blend-multiply z-10"></div>
                        <Image src="/images/maintainance hs1.jpeg" alt="Solar Maintenance India" fill className="object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark via-transparent to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Settings className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Operations & Maintenance</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                                Protecting Solar Performance for the Long Term
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Greenveyil Energy Pvt Ltd provides comprehensive O&M services to ensure sustained energy generation, precise asset protection, and financial return stability over your system’s 20–25 year lifespan.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* WHY O&M + PHILOSOPHY */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl mb-4">
                                    Why O&M is Critical for Solar Infrastructure
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Solar infrastructure is designed to operate for decades, but performance consistency depends on disciplined operations and structured maintenance. Without it, systems face critical risks.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Reduced generation efficiency",
                                    "Premature module degradation",
                                    "Inverter performance issues",
                                    "Wiring faults and safety risks",
                                    "Long-term financial underperformance"
                                ].map((risk, i) => (
                                    <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                                        <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-foreground leading-tight">{risk}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-l-4 border-energy-yellow pl-5 py-2">
                                <p className="text-lg font-bold text-energy-green-dark">O&M is not an afterthought — it is integral to infrastructure longevity.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border/60 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-energy-green-dark/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>

                            <h3 className="text-2xl font-bold text-energy-green-dark mb-6 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-energy-yellow" /> Our O&M Philosophy
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Greenveyil treats all solar installations strictly as long-term energy assets. We maintain a solar-only specialization, ensuring focused technical expertise.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Predictive monitoring",
                                    "Preventive maintenance",
                                    "Data-driven performance optimization",
                                    "Rapid corrective response",
                                    "Regulatory compliance continuity"
                                ].map((philosophy, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-energy-green-dark">
                                        <div className="w-6 h-6 rounded-full bg-energy-green-dark/10 flex items-center justify-center shrink-0">
                                            <span className="text-[10px] text-energy-green-dark">✓</span>
                                        </div>
                                        {philosophy}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CORE O&M SERVICES */}
                <section className="bg-energy-green-dark text-white py-20 lg:py-28 relative isolate overflow-hidden">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-energy-yellow md:text-5xl">
                                Core O&M Services
                            </h2>
                            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                                Our structured maintenance programs are designed to protect your investment and maximize energy generation efficiency all year round.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {/* AMC Card */}
                            <ScrollReveal delay={100} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col pt-10 relative mt-6">
                                <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 bg-energy-yellow rounded-xl flex items-center justify-center shadow-lg">
                                    <Settings className="w-7 h-7 text-energy-green-dark" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Annual Maintenance Contracts (AMC)</h3>
                                <ul className="space-y-4 flex-grow">
                                    {["Scheduled site inspections", "Module cleaning and inspection", "Electrical testing and safety audits", "Thorough inverter diagnostics"].map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
                                            <div className="w-4 h-4 rounded-full bg-energy-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-energy-yellow font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Preventive Card */}
                            <ScrollReveal delay={200} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col pt-10 relative mt-6">
                                <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 bg-energy-yellow rounded-xl flex items-center justify-center shadow-lg">
                                    <ShieldCheck className="w-7 h-7 text-energy-green-dark" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Preventive Maintenance</h3>
                                <ul className="space-y-4 flex-grow">
                                    {["Thermal scanning configurations", "Structural inspection", "Loose connection checks", "Surge protection validation"].map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
                                            <div className="w-4 h-4 rounded-full bg-energy-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-energy-yellow font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Corrective Card */}
                            <ScrollReveal delay={300} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col pt-10 relative mt-6">
                                <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 bg-energy-yellow rounded-xl flex items-center justify-center shadow-lg">
                                    <Wrench className="w-7 h-7 text-energy-green-dark" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">Corrective Maintenance</h3>
                                <ul className="space-y-4 flex-grow">
                                    {["Immediate fault identification", "Inverter replacement coordination", "Module replacement support", "Rapid technical intervention"].map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
                                            <div className="w-4 h-4 rounded-full bg-energy-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-energy-yellow font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* MONITORING, LIFECYCLE, COMPLIANCE */}
                <section className="bg-muted py-20 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                            {/* Monitoring */}
                            <ScrollReveal className="bg-card p-10 lg:p-12 border border-border/60 shadow-sm rounded-3xl relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                    <BarChart3 className="w-64 h-64 text-energy-green-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-energy-green-dark mb-4">Monitoring & Performance Analytics</h3>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                    Our framework integrates digital monitoring systems for real-time visibility. Clients receive structured data insights to evaluate system efficiency and ROI.
                                </p>
                                <ul className="space-y-3 relative z-10">
                                    {["SCADA-based monitoring (for large projects)", "Remote generation tracking", "Performance benchmarking", "Yield analysis", "Monthly and quarterly reporting"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-semibold text-energy-green-dark bg-muted/50 p-3 rounded-lg border border-border/50">
                                            <Activity className="w-4 h-4 text-energy-yellow shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Lifecycle & Compliance */}
                            <div className="space-y-8">
                                <ScrollReveal delay={100} className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-energy-green-dark/5 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-energy-green-dark" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-energy-green-dark mb-3">Compliance & Safety Assurance</h4>
                                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Safety remains non-negotiable.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {["State board guidelines", "Industrial safety standards", "Structural integrity norms", "Fire safety regulations"].map((item, i) => (
                                                <li key={i} className="flex gap-2 items-start text-sm font-medium text-foreground">
                                                    <span className="text-energy-green-dark pt-1">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={200} className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-energy-yellow/20 flex items-center justify-center shrink-0">
                                        <Settings className="w-6 h-6 text-energy-yellow-dark" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-energy-green-dark mb-3">Asset Lifecycle Management</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            Solar systems degrade gradually over time. Structured monitoring allows proactive lifecycle management.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Performance Tracking", "Degradation Analysis", "Replacement Planning", "Output Forecasting"].map((tag, i) => (
                                                <span key={i} className="text-[11px] font-bold uppercase tracking-wider bg-muted text-foreground px-3 py-1.5 rounded-full border border-border/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                    </div>
                </section>

                {/* SEGMENTS BAND */}
                <section className="bg-energy-yellow py-10 lg:py-14 border-t border-energy-green-dark/10">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-energy-green-dark md:w-1/3 text-center md:text-left">
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Suitable For All Segments</h3>
                                <p className="text-sm font-medium opacity-80">Tailored to system size and operational requirements.</p>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end gap-3 flex-grow w-full">
                                {[
                                    "Residential Rooftop",
                                    "Commercial Installations",
                                    "Industrial MW-Scale",
                                    "Ground-Mounted Projects"
                                ].map((segment, i) => (
                                    <div key={i} className="bg-white text-energy-green-dark text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-full shadow-sm border border-energy-yellow-dark/20 text-center">
                                        {segment}
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-background py-20 lg:py-28 relative overflow-hidden text-center isolate">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-energy-yellow/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Ensure Long-Term Solar Reliability
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground font-medium leading-relaxed">
                                Greenveyil Energy Pvt Ltd provides structured maintenance programs designed to protect your solar investment and maximize energy generation. Schedule an O&M evaluation to assess performance and identify optimization opportunities.
                            </p>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-10 py-5 text-sm font-bold uppercase tracking-widest text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                            >
                                Schedule an O&M Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
