import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
    title: "Solar Services | Greenveyil Energy",
    description: "Structured Solar Infrastructure for Every Energy Segment",
}

export default function ServicesPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark to-transparent z-10"></div>
                        <Image src="/images/section-solar.jpg" alt="Solar Panels India" fill className="object-cover mix-blend-overlay opacity-50" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.energy-yellow/15)_0%,transparent_60%)] z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow">
                                Solar Services
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                                Structured Solar Infrastructure for Every Energy Segment
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light">
                                Greenveyil Energy Pvt Ltd delivers specialized solar EPC solutions designed for residential, commercial and industrial energy requirements across India.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* SOLAR EXECUTION PHILOSOPHY */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <ScrollReveal className="space-y-6">
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Our Solar Execution Philosophy
                            </h3>
                            <div className="h-1 w-12 bg-secondary rounded-full"></div>
                            <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                                Our focus is singular: long-term solar infrastructure engineered for performance, compliance and measurable cost efficiency.
                            </p>
                            <div className="bg-muted p-6 rounded-xl border border-border/50 text-energy-green-dark font-medium italic border-l-4 border-l-energy-yellow mt-4">
                                "We build solar assets — not short-term installations."
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="bg-card rounded-2xl shadow-sm border border-border/60 p-8 lg:p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                            <p className="text-xs text-secondary uppercase font-semibold tracking-widest mb-6">Every solar project follows a disciplined execution model:</p>

                            <ul className="space-y-4">
                                {[
                                    "Site feasibility & structural analysis",
                                    "Energy load and savings modelling",
                                    "Regulatory coordination & net metering integration",
                                    "Engineering-driven installation",
                                    "Long-term monitoring & maintenance"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-foreground items-start group/item">
                                        <div className="w-6 h-6 rounded-full bg-energy-green-dark/5 flex items-center justify-center shrink-0 group-hover/item:bg-energy-yellow transition-colors border border-border/50">
                                            <span className="text-[11px] font-bold text-energy-green-dark">{i + 1}</span>
                                        </div>
                                        <span className="leading-relaxed font-medium mt-0.5 group-hover/item:text-energy-green-dark transition-colors">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </section>

                {/* SOLAR SEGMENTS - PREMIUM GRID SECTION */}
                <section className="bg-muted/30 py-20 lg:py-28 border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Solar Solutions by Segment
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                                We engineer customized solar solutions tailored to the specific operational and financial needs of each sector.
                            </p>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

                            {/* Residential Card */}
                            <ScrollReveal delay={100} className="bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image src="/images/resedential solar r1.jpeg" alt="Residential Solar" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-energy-green-dark/20 mix-blend-multiply"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-energy-green-dark shadow-sm">Home & Society</div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold text-energy-green-dark mb-3">Residential Solar</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        Rooftop solar systems for independent homes and housing societies, designed to reduce electricity costs while ensuring net metering compliance.
                                    </p>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {["Rooftop Installation", "Group Captive Models", "Performance Monitoring"].map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/services/residential" className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full border border-energy-green-dark text-energy-green-dark font-medium transition-colors hover:bg-energy-green-dark hover:text-white group/btn">
                                        Explore Residential <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Commercial Card */}
                            <ScrollReveal delay={200} className="bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image src="/images/commercial r1.jpeg" alt="Commercial Solar" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-energy-green-dark/20 mix-blend-multiply"></div>
                                    <div className="absolute top-4 left-4 bg-energy-yellow/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-energy-green-dark shadow-sm">Business & Retail</div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold text-energy-green-dark mb-3">Commercial Solar</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        Scalable solar infrastructure for offices, institutions and retail establishments seeking stable and lower operating costs.
                                    </p>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {["Customized Rooftop Systems", "OPEX / PPA Models", "Lifecycle Asset Management"].map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/services/commercial" className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full border border-energy-green-dark text-energy-green-dark font-medium transition-colors hover:bg-energy-green-dark hover:text-white group/btn">
                                        Explore Commercial <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </ScrollReveal>

                            {/* Housing Society Card */}
                            <ScrollReveal delay={300} className="bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image src="/images/housing society r1.jpeg" alt="Housing Society Solar" fill className="object-cover group-hover:scale-105 transition-transform duration-700 sepia-[.1]" />
                                    <div className="absolute inset-0 bg-energy-green-dark/30 mix-blend-multiply"></div>
                                    <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">Apartments & Gated Communities</div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold text-energy-green-dark mb-3">Housing Society Solar</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        Structured rooftop solutions designed specifically to eliminate common electricity expenses in large housing societies.
                                    </p>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {["Group Net Metering", "Zero Investment OPEX", "Common Area Offsetting"].map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/services/housing-society" className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full border border-energy-green-dark text-energy-green-dark font-medium transition-colors hover:bg-energy-green-dark hover:text-white group/btn">
                                        Explore Housing Solar <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* OPERATIONS & MAINTENANCE - PREMIUM SECTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
                    <div className="bg-energy-green-dark rounded-3xl overflow-hidden shadow-2xl relative isolate">
                        {/* Background stylistic touches */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 -z-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-energy-yellow/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 -z-10 pointer-events-none"></div>

                        <div className="grid lg:grid-cols-2 items-center">
                            <div className="p-10 lg:p-16">
                                <ScrollReveal>
                                    <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl mb-4">
                                        Operations & Maintenance
                                    </h3>
                                    <p className="text-lg text-energy-yellow font-medium mb-6">
                                        Protecting Solar Performance Over Decades
                                    </p>
                                    <p className="text-white/80 leading-relaxed mb-8">
                                        Greenveyil’s O&M division ensures operational reliability across all solar installations. Solar infrastructure is only as strong as its maintenance discipline.
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">Our services include:</p>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                "Annual Maintenance Contracts",
                                                "Preventive System Diagnostics",
                                                "Real-Time Performance Monitoring",
                                                "Compliance & Reporting Support"
                                            ].map((service, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-white/90 items-start bg-white/5 p-3 rounded-lg border border-white/10">
                                                    <div className="w-5 h-5 rounded-full bg-energy-yellow flex items-center justify-center shrink-0">
                                                        <span className="text-[10px] text-energy-green-dark font-bold">✓</span>
                                                    </div>
                                                    <span className="leading-tight mt-0.5">{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link href="/services/operations-maintenance" className="inline-flex items-center gap-2 text-energy-yellow font-semibold hover:text-white transition-colors group">
                                        Explore O&M Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </ScrollReveal>
                            </div>

                            <div className="hidden lg:block relative h-full min-h-[500px]">
                                <Image src="/images/section-solar.jpg" alt="Solar Maintenance" fill className="object-cover opacity-80 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-r from-energy-green-dark via-energy-green-dark/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA BAND */}
                <section className="bg-energy-yellow py-20 lg:py-24 relative overflow-hidden text-center">
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Schedule a Free Solar Assessment
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Evaluate your rooftop or industrial solar potential with a structured feasibility review.
                            </p>
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-8 py-4 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                            >
                                Sign Up for Free Electricity Consultation
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
