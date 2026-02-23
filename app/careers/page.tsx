import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Briefcase, Clock, Target, ShieldCheck, Sun, Workflow } from "lucide-react"
import { JOBS } from "./jobs"

export const metadata = {
    title: "Careers | Greenveyil Energy",
    description: "Join Greenveyil Energy Pvt Ltd in designing and delivering disciplined solar infrastructure across India.",
}

export default function CareersPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[65vh] lg:px-10 lg:py-32 pt-32 lg:pt-40 isolate">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <div className="absolute inset-0 bg-energy-green-dark/85 mix-blend-multiply z-10"></div>
                        <Image src="/images/section-solar.jpg" alt="Careers at Greenveyil" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Briefcase className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Careers</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                                Build India&apos;s Solar Infrastructure Future
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed mb-10 border-l-2 border-energy-yellow pl-6">
                                Join Greenveyil Energy Pvt Ltd in designing and delivering disciplined solar infrastructure across India. We are building structured, high-performance solar systems and are looking for professionals who value engineering clarity and execution excellence.
                            </p>
                            <Link href="#open-positions" className="inline-flex items-center justify-center rounded-full bg-energy-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-energy-green-dark transition-all hover:bg-white hover:text-energy-green-dark shadow-xl">
                                View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

                {/* WHY WORK AT GREENVEYIL */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28 relative isolate">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-energy-green-dark/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 -translate-x-1/2"></div>
                    <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Core Philosophy</h2>
                        <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl">
                            Why Work at Greenveyil
                        </h3>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Solar-Only Specialization", icon: Sun, desc: "We focus exclusively on solar infrastructure. No distractions. No dilution. Just disciplined execution." },
                            { title: "Engineering-Driven Culture", icon: Workflow, desc: "Our projects are structured around technical accuracy, regulatory compliance and long-term system performance." },
                            { title: "Real Infrastructure Impact", icon: Target, desc: "Your work directly contributes to India’s renewable transition and long-term energy stability." },
                            { title: "Long-Term Industry Growth", icon: ArrowUpRight, desc: "Solar energy is not a trend — it is foundational infrastructure for India’s future." },
                            { title: "Accountability & Ownership", icon: ShieldCheck, desc: "We value professionals who take responsibility and deliver measurable outcomes." }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} delay={100 * (i + 1)} className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-energy-yellow/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-energy-green-dark" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-3">{feature.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* OUR WORK ENVIRONMENT */}
                <section className="bg-energy-green-dark py-20 lg:py-28 text-white relative isolate overflow-hidden">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <ScrollReveal>
                                <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl mb-6">
                                    Our Work Environment
                                </h2>
                                <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                                    We operate with absolute clarity, strict documentation, and unyielding accountability — because building robust infrastructure demands exact precision. We combine:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {[
                                        "Field execution discipline",
                                        "Engineering-led design",
                                        "Regulatory awareness",
                                        "Structured project management",
                                        "Performance-based evaluation"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/90 items-center font-semibold bg-white/5 p-4 rounded-xl border border-white/10">
                                            <div className="w-1.5 h-1.5 bg-energy-yellow rounded-full shrink-0"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                            <ScrollReveal delay={100} className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image src="/images/section-solar.jpg" alt="Work Environment" fill className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/40 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <p className="text-sm text-energy-yellow font-bold uppercase tracking-widest leading-relaxed">"Infrastructure demands precision over intention."</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* OPEN POSITIONS */}
                <section id="open-positions" className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32 scroll-mt-24">
                    <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl">
                            Current Open Positions
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg">Select a role below to view complete details securely.</p>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {JOBS.map((job, i) => (
                            <ScrollReveal key={job.slug} delay={100 * (i + 1)} className="bg-card border border-border/60 hover:border-energy-green-dark/30 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 isolate group flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold text-energy-green-dark max-w-[80%] leading-tight">{job.title}</h3>
                                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-energy-yellow/20 transition-colors shrink-0">
                                        <Briefcase className="w-4 h-4 text-energy-green-dark" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 mb-8 flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                        <MapPin className="w-4 h-4 text-secondary shrink-0" /> {job.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                        <Clock className="w-4 h-4 text-secondary shrink-0" /> Experience: {job.experience}
                                    </div>
                                </div>
                                <Link href={`/careers/${job.slug}`} className="inline-flex items-center justify-center w-full py-3.5 rounded-xl border border-border font-bold text-sm text-energy-green-dark uppercase tracking-wider transition-colors hover:bg-energy-green-dark hover:text-white hover:border-energy-green-dark mt-auto shadow-sm">
                                    View Details <ArrowUpRight className="w-4 h-4 ml-2" />
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* INTERNSHIPS AREA */}
                <section id="internships" className="bg-muted/30 py-20 lg:py-28 border-y border-border/50 text-center scroll-mt-24">
                    <div className="mx-auto max-w-4xl px-6">
                        <ScrollReveal>
                            <div className="w-16 h-16 bg-card border border-border/50 mx-auto rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Target className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl mb-6">
                                Internship Opportunities
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                                We offer structured internships for engineering and management students seeking rigorous exposure across strict market segments:
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                                {["Solar System Design", "Site Execution", "O&M Monitoring", "Market Research & Feasibility"].map((tag, i) => (
                                    <span key={i} className="bg-background px-4 py-2 border border-border text-sm font-semibold rounded-full shadow-sm text-foreground/80 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-energy-green-dark rounded-full" /> {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm font-bold text-energy-green-dark uppercase tracking-widest bg-energy-green-dark/5 py-4 px-6 rounded-xl inline-block border border-energy-green-dark/10">
                                Apply via LinkedIn or email: <a href="mailto:careers@greenveyil.com" className="text-secondary hover:underline">careers@greenveyil.com</a>
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FINAL CLOSING CTA */}
                <section className="bg-energy-yellow py-20 lg:py-24 relative overflow-hidden text-center isolate">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-energy-green-dark/5 blur-[100px] rounded-full -z-10"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl uppercase tracking-widest">
                                Work With Purpose. Build With Precision.
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                If you are committed to structured execution and long-term impact in renewable energy, we invite you to explore opportunities with Greenveyil.
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-10 py-5 text-sm font-bold uppercase tracking-wider text-energy-yellow transition-all hover:bg-white hover:text-energy-green-dark hover:scale-[1.02] shadow-xl hover:shadow-2xl group border border-transparent hover:border-energy-green-dark/20"
                            >
                                View Open Positions on LinkedIn <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
