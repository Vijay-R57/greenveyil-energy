import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Leadership & Partnership | Greenveyil Energy",
    description: "Driving Solar Infrastructure with Vision and Accountability",
}

export default function LeadershipPartnershipsPage() {
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
                                Leadership & Strategic Partnerships
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                                Driving Solar Infrastructure with Vision and Accountability
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light">
                                Greenveyil Energy Pvt Ltd is guided by a leadership team committed to engineering excellence, operational transparency and long-term renewable infrastructure development across India.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* LEADERSHIP PHILOSOPHY */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                        <ScrollReveal className="relative min-h-[400px] w-full lg:min-h-[500px]">
                            <div className="absolute inset-0 bg-muted/50 rounded-xl overflow-hidden shadow-sm flex items-center justify-center border border-border/50">
                                <Image src="/images/partneship1.jpg" alt="Leadership Philosophy" fill className="object-cover opacity-80 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-energy-green-dark/10"></div>
                            </div>
                        </ScrollReveal>
                        <div className="space-y-6">
                            <ScrollReveal>
                                <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                    Leadership Philosophy
                                </h3>
                                <div className="mt-4 h-1 w-12 bg-secondary rounded-full" />
                            </ScrollReveal>
                            <ScrollReveal delay={100}>
                                <p className="text-[1.125rem] leading-relaxed text-muted-foreground font-medium italic border-l-4 border-energy-yellow pl-4">
                                    "At Greenveyil, leadership is not defined by titles but by responsibility."
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Our leadership philosophy combines technical depth, financial prudence and execution discipline — ensuring that every solar project is delivered with reliability and measurable performance.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <p className="font-semibold text-energy-green-dark">We believe in:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground font-medium">
                                        {["Structured decision-making", "Transparent commercial models", "Regulatory compliance", "Engineering-first execution", "Long-term asset accountability"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-secondary shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <p className="text-base font-medium text-foreground bg-muted/40 p-4 rounded-lg mt-6 border border-border/50">
                                    Our management team works closely with project engineers, site supervisors and maintenance teams to ensure consistent delivery standards across all operational states.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* LEADERSHIP PROFILES (Text / Layout based) */}
                <section className="bg-muted/30 py-16 lg:py-24 border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal>
                            <div className="mb-12 text-center">
                                <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                    Executive Leadership Team
                                </h2>
                            </div>
                        </ScrollReveal>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: "Managing Director & Founder",
                                    desc: "With deep experience in renewable energy project execution and infrastructure planning, oversees strategic growth, partnerships and long-term business direction across India.",
                                    focus: ["Solar EPC expansion", "Institutional partnerships", "Regulatory alignment", "Capital structuring for OPEX models"]
                                },
                                {
                                    title: "Director – Engineering & Operations",
                                    desc: "Responsible for technical design, project implementation and operational excellence across all solar installations.",
                                    focus: ["System optimization", "Site feasibility assessments", "Performance monitoring", "O&M frameworks"]
                                },
                                {
                                    title: "Director – Commercial & Strategy",
                                    desc: "Leads financial structuring, client partnerships and long-term contract development.",
                                    focus: ["No-cost solar models (PPA/OPEX)", "Commercial negotiations", "Industrial client acquisition", "Revenue optimization models"]
                                }
                            ].map((role, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20 flex flex-col h-full">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-energy-green-dark text-white flex items-center justify-center font-serif text-xl shadow-inner">
                                            {role.title.charAt(0)}
                                        </div>
                                        <h3 className="text-lg font-semibold text-energy-green-dark leading-tight max-w-[200px]">
                                            {role.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">
                                        {role.desc}
                                    </p>
                                    <div className="border-t border-border/50 pt-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">Focus Areas</p>
                                        <ul className="space-y-2">
                                            {role.focus.map((item, idx) => (
                                                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                                                    <span className="text-energy-yellow shrink-0 mt-[2px]">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GOVERNANCE & PARTNERSHIPS */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Governance */}
                        <ScrollReveal className="bg-energy-green-dark rounded-xl p-8 lg:p-12 text-white shadow-lg relative overflow-hidden">
                            <div className="absolute right-0 top-0 opacity-10 w-full h-full z-0 flex items-center justify-end -mr-20">
                                <div className="w-[300px] h-[300px] rounded-full border border-white/20"></div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-light tracking-tight md:text-3xl mb-4">
                                    Governance & Advisory
                                </h3>
                                <p className="text-white/80 font-light mb-6">
                                    Greenveyil maintains structured compliance aligned with Indian renewable energy policies, state electricity regulations and industry safety standards.
                                </p>
                                <p className="text-sm uppercase tracking-widest text-energy-yellow font-semibold mb-4">We work closely with:</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {["State electricity boards", "Regulatory advisors", "Independent technical consultants", "Financial institutions"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                                            <div className="w-1.5 h-1.5 rounded-full bg-energy-yellow"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="inline-block bg-white/10 px-4 py-3 rounded text-sm text-white/95 font-medium border border-white/10 backdrop-blur-sm">
                                    This governance approach ensures transparency and sustainable expansion.
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Partnerships */}
                        <ScrollReveal delay={100} className="rounded-xl border border-border p-8 lg:p-12 bg-card shadow-sm flex flex-col justify-center">
                            <div className="text-2xl font-light tracking-tight text-energy-green-dark md:text-3xl mb-4 flex items-center gap-3">
                                <span className="text-3xl">🤝</span> Strategic Partnerships
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Greenveyil collaborates with leading industrial manufacturers, commercial enterprises and infrastructure companies across India.
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">Our partnerships are built on:</p>
                            <div className="space-y-3 mb-8">
                                {["Long-term solar supply agreements", "Asset-backed energy contracts", "Technical collaboration", "Sustainable energy transition planning"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 border-b border-border/40 pb-2 last:border-0 last:pb-0 text-sm text-foreground font-medium">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/10 text-secondary text-[10px]">✓</div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg border-l-2 border-energy-yellow">
                                We do not engage in energy trading or multi-source generation. Our partnerships focus exclusively on solar energy deployment and long-term performance assurance.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* TRUSTED BY SPONSOR SLIDER */}
                <section className="bg-energy-gray/5 py-12 lg:py-16 overflow-hidden border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-8">
                            <div className="flex items-center justify-center gap-3 text-2xl font-light tracking-tight text-energy-green-dark md:text-3xl mb-3">
                                <span className="text-3xl">🏢</span> Trusted By
                            </div>
                            <p className="max-w-xl mx-auto text-sm text-muted-foreground">
                                Greenveyil Energy Pvt Ltd is proud to support leading Indian enterprises in their transition toward renewable solar power.
                            </p>
                        </ScrollReveal>

                        {/* Simple Marquee Wrapper */}
                        <div className="relative flex overflow-x-hidden group max-w-5xl mx-auto mask-fade-edges">
                            <style dangerouslySetInnerHTML={{
                                __html: `
                    @keyframes pureMarquee {
                       0% { transform: translateX(0); }
                       100% { transform: translateX(-50%); }
                    }
                    .animate-pure-marquee {
                       animation: pureMarquee 20s linear infinite;
                       display: flex;
                       width: max-content;
                    }
                    .mask-fade-edges {
                       -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                       mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    }
                 `}} />
                            <div className="animate-pure-marquee hover:[animation-play-state:paused] py-4 items-center">
                                {/* Items repeated to create infinite illusion */}
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="flex gap-10 md:gap-16 items-center pr-10 md:pr-16 shrink-0">
                                        {[
                                            { name: "Prestige", src: "/images/PRESTIGE.png" },
                                            { name: "Infygate", src: "/images/infygate.jpeg" },
                                            { name: "Sengoal", src: "/images/sengoal.jpeg" }
                                        ].map((partner, idx) => (
                                            <div key={idx} className="w-36 h-20 md:w-44 md:h-24 bg-white border border-border/60 rounded-lg flex items-center justify-center p-3 shadow-sm transition-all duration-300 relative shrink-0 hover:shadow-md">
                                                <Image
                                                    src={partner.src}
                                                    alt={partner.name}
                                                    fill
                                                    className="object-contain p-4"
                                                    sizes="(max-width: 768px) 144px, 176px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CLOSING STATEMENT */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
                    <div className="rounded-2xl bg-energy-yellow px-6 py-16 text-center lg:px-20 lg:py-24 shadow-sm relative overflow-hidden">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Building Long-Term Energy Partnerships
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <p className="mx-auto mb-10 max-w-3xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Greenveyil Energy Pvt Ltd remains committed to building strong industrial relationships based on performance, accountability and measurable renewable impact.
                                <br /><br />
                                Our leadership team continues to expand solar adoption across India — enabling enterprises to transition confidently toward clean energy infrastructure.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-sm bg-energy-green-dark px-8 py-4 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02]"
                            >
                                Discuss a Partnership
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    )
}
