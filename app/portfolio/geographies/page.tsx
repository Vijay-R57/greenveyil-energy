import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WorldMapSection } from "@/components/world-map-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapIcon, Compass, Activity, Zap, Factory } from "lucide-react"

export const metadata = {
    title: "Geographies & Presence | Greenveyil Energy",
    description: "Solar Infrastructure Across India",
}

export default function GeographiesPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/85 mix-blend-multiply z-10"></div>
                        <Image src="/images/section-solar.jpg" alt="Geographies India" fill className="object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 delay-150"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl pt-8">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Compass className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Geographies</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                                Solar Infrastructure Across India
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Greenveyil Energy Pvt Ltd operates exclusively within the Indian renewable energy market, delivering structured solar infrastructure tailored to regional demand, climatic conditions, and grid frameworks.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* GEOGRAPHIC INTRODUCTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-6">
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Focused National Presence
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our footprint represents carefully selected markets where solar deployment can reliably deliver measurable operational and financial value.
                            </p>
                            <div className="border-l-4 border-destructive pl-5 py-2 mt-4 bg-destructive/5 rounded-r-xl">
                                <p className="text-sm font-semibold text-energy-green-dark uppercase tracking-widest">We do not pursue expansion for scale alone.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="bg-card p-10 rounded-3xl border border-border/60 shadow-xl relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-energy-green-dark/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                            <h4 className="text-lg font-bold text-energy-green-dark mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-energy-yellow" /> Evaluation Metrics
                            </h4>
                            <p className="text-sm text-muted-foreground mb-6">Each region is thoroughly evaluated based on core execution characteristics:</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { t: "Energy demand profile", i: Zap },
                                    { t: "Industrial & commercial growth", i: Factory },
                                    { t: "Solar irradiance potential", i: MapIcon },
                                    { t: "Grid connectivity feasibility", i: Activity }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-4 bg-muted border border-border/50 rounded-lg">
                                        <item.i className="w-5 h-5 text-energy-green-dark" />
                                        <span className="text-xs font-semibold">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-xs text-muted-foreground italic font-semibold">
                                *This focused strategy ensures highly stable and sustainable project execution nationwide.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* WORLD MAP / INDIA MAP SECTION REUSE */}
                <div className="relative z-10">
                    <WorldMapSection />
                </div>

                {/* EXPLORE REGIONS CTA */}
                <section className="bg-energy-yellow py-20 lg:py-24 relative overflow-hidden text-center isolate">
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Explore Projects by Region
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Review detailed, executed projects spanning across our actively managed states to understand the depth of our infrastructural compliance.
                            </p>

                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-10 py-5 text-sm font-bold uppercase tracking-wider text-energy-yellow transition-all hover:bg-white hover:text-energy-green-dark hover:scale-[1.02] shadow-xl hover:shadow-2xl group border border-transparent hover:border-energy-green-dark/20"
                            >
                                View Detailed Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
