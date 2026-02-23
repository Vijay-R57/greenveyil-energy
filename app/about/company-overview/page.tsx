import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Company Overview | Greenveyil Energy",
    description: "Powering India with Reliable Solar Infrastructure",
}

export default function CompanyOverviewPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0">
                {/* HERO BANNER */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow">
                                Company Overview
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                                Powering India with Reliable Solar Infrastructure
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl font-light">
                                Greenveyil Energy Pvt Ltd is a Bangalore-based solar EPC company delivering sustainable, cost-effective and long-term solar energy solutions across India.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <ScrollReveal>
                                <h3 className="text-3xl font-light tracking-tight text-foreground md:text-4xl text-energy-green-dark">
                                    Who We Are
                                </h3>
                            </ScrollReveal>
                            <ScrollReveal delay={100}>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Greenveyil Energy Pvt Ltd is an Indian engineering, procurement and construction (EPC) company dedicated entirely to solar energy. We work closely with businesses, industries, residential communities and institutions to deliver scalable and reliable solar infrastructure solutions.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Our approach combines technical expertise, regulatory compliance and execution efficiency. From site assessment and system design to commissioning and long-term maintenance, every stage of our projects is managed with structured processes and measurable performance benchmarks.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <div className="border-l-2 border-secondary pl-6 pt-2 pb-2">
                                    <p className="text-base font-medium text-foreground">
                                        Headquartered in Chennai, we operate across key renewable growth states including Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Maharashtra, Gujarat and Rajasthan.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                        {/* Visual Element */}
                        <ScrollReveal className="relative min-h-[400px] w-full lg:min-h-[500px]">
                            <div className="absolute inset-0 bg-muted rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
                                <Image src="/images/company.jpg" alt="Solar Infrastructure" fill className="object-cover" />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* WHAT WE DO */}
                <section className="bg-muted/30 py-16 lg:py-24 overflow-hidden border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal>
                            <div className="mb-12 text-center lg:mb-16">
                                <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl text-energy-green-dark">
                                    What We Do
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                    We provide end-to-end solar solutions built around performance, durability and financial viability.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Solar EPC Projects",
                                    desc: "Comprehensive engineering, procurement and construction services for rooftop and ground-mounted solar plants designed to meet industrial and commercial energy demands."
                                },
                                {
                                    title: "No-Cost Solar Models",
                                    desc: "OPEX and Power Purchase Agreement (PPA) structures enabling clients to adopt solar without upfront capital investment. We design, finance, build and maintain."
                                },
                                {
                                    title: "Operations & Maintenance (O&M)",
                                    desc: "Long-term asset management including preventive maintenance, performance monitoring, system diagnostics and operational optimization for consistent energy output."
                                },
                                {
                                    title: "Renewable Generation",
                                    desc: "Development of solar assets that contribute directly to India’s renewable energy targets and sustainable industrial growth."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20 group">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                                        <div className="h-6 w-6 rounded-full bg-current opacity-80" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-energy-green-dark">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY GREENVEYIL */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                        <ScrollReveal className="order-2 lg:order-1 relative min-h-[450px] w-full">
                            <div className="absolute inset-0 bg-energy-green-dark rounded-xl shadow-lg overflow-hidden flex flex-col justify-center p-8 lg:p-12">
                                <h4 className="text-secondary font-semibold uppercase tracking-widest text-xs mb-8">Greenveyil Advantage</h4>
                                <div className="space-y-5 text-white w-full">
                                    {[
                                        "Dedicated solar-only expertise",
                                        "Strong understanding of Indian grid regulations & net metering policies",
                                        "Transparent commercial structures",
                                        "Structured project management systems",
                                        "Long-term performance accountability",
                                        "Local execution teams across multiple Indian states"
                                    ].map((point, i) => (
                                        <div key={i} className="flex flex-row items-start gap-4 pb-2">
                                            <div className="h-2 w-2 mt-2 rounded-full bg-energy-yellow flex-shrink-0" />
                                            <p className="text-[15px] leading-snug text-white/90 font-light">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-8 order-1 lg:order-2">
                            <ScrollReveal>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-light tracking-tight text-foreground md:text-4xl text-energy-green-dark">
                                        Why Greenveyil
                                    </h3>
                                    <div className="h-1 w-12 bg-secondary rounded-full" />
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={100}>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    We operate with a single-sector focus: solar power. This specialization allows us to maintain high engineering standards and execution consistency.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-lg leading-relaxed text-foreground font-medium border-l-4 border-energy-yellow pl-5 py-1">
                                    Our objective is not only to install solar systems but to build dependable energy infrastructure that delivers measurable financial and environmental returns over decades.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* OUR PRESENCE */}
                <section className="bg-energy-green-dark py-16 text-primary-foreground lg:py-24 relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 w-1/2 h-full z-0 translate-x-1/4">
                        {/* Decorative circle placeholder */}
                        <div className="w-[500px] h-[500px] rounded-full border border-white/20 absolute -top-40 -right-20"></div>
                        <div className="w-[700px] h-[700px] rounded-full border border-white/20 absolute -top-40 -right-20"></div>
                    </div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <ScrollReveal>
                                <h2 className="text-3xl font-light tracking-tight md:text-4xl text-white">
                                    Our Presence Across India
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal delay={100}>
                                <p className="text-lg text-white/80 font-light leading-relaxed">
                                    Greenveyil Energy Pvt Ltd supports solar adoption across major industrial and renewable corridors of India. Our teams collaborate with state electricity boards, industrial parks, manufacturing facilities, commercial establishments and residential communities.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-lg text-white/80 font-light leading-relaxed">
                                    We understand the diversity of India’s energy landscape — from urban commercial demand to industrial load requirements and distributed rooftop potential. Each project is engineered to align with local climatic conditions, regulatory frameworks and grid integration standards.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <p className="text-lg text-white/90 font-medium leading-relaxed bg-white/5 rounded-lg p-6 mt-4 border border-white/10">
                                    By focusing exclusively on solar energy, we contribute to reducing carbon emissions, lowering dependency on conventional power sources and strengthening India's renewable infrastructure.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA SECTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
                    <div className="rounded-2xl bg-energy-yellow px-6 py-16 text-center lg:px-20 lg:py-24 shadow-sm relative overflow-hidden">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Building a Sustainable Energy Future
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                India’s growth requires reliable and sustainable power generation. Solar energy provides a scalable and economically viable pathway toward long-term energy security.
                                <br /><br />
                                We partner with businesses and communities ready to transition toward clean energy — building systems that are not only efficient today but dependable for the future.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-sm bg-energy-green-dark px-8 py-4 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02]"
                            >
                                Start Your Solar Journey Today
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    )
}
