"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PlayCircle, Calendar, Clock, User, CheckCircle2, Youtube, BookOpen, Users, Video, ArrowUpRight, ShieldCheck, Mail } from "lucide-react"

const PAST_WEBINARS = [
    {
        title: "Home Solar Pricing Explained: Expense or Investment?",
        category: "Residential",
        desc: "Understand cost components, panel quality differences, inverter pricing, and ROI breakdown over 25 years.",
        speaker: "Head of Residential Engineering",
        image: "/images/webinar-residential.png",
        link: "#",
    },
    {
        title: "How Housing Societies Can Reduce Common Area Costs",
        category: "Housing Society",
        desc: "Deep dive into common meter load analysis, society billing structures, and CAPEX vs PPA models.",
        speaker: "Senior Electrical Engineer",
        image: "/images/webinar-housing.png",
        link: "#",
    },
    {
        title: "Commercial Solar ROI & Payback Strategy",
        category: "Commercial",
        desc: "Learn about demand charge optimization, load pattern matching, and OPEX solar agreements.",
        speaker: "Financial Modeling Analyst",
        image: "/images/webinar-commercial.png",
        link: "#",
    },
    {
        title: "Industrial Net Metering & Grid Compliance",
        category: "Industrial",
        desc: "Navigate state electricity board approvals, synchronization standards, and SCADA integration limits.",
        speaker: "Regulatory & Compliance Expert",
        image: "/images/webinar-commercial.png",
        link: "#",
    },
    {
        title: "EMI vs Upfront Payment Models for Solar",
        category: "Residential",
        desc: "Breakdown of the true cost of solar financing vs direct capital expenditure.",
        speaker: "Solar Advisory Lead",
        image: "/images/webinar-residential.png",
        link: "#",
    },
    {
        title: "O&M Fault Diagnostics for Tier-1 Inverters",
        category: "Industrial",
        desc: "A technical overview of preventive maintenance and inverter lifetime extension.",
        speaker: "Head of Operations & Maintenance",
        image: "/images/webinar-commercial.png",
        link: "#",
    }
]

export default function WebinarsPage() {
    const [activeCategory, setActiveCategory] = useState("All Webinars")
    const categories = ["All Webinars", "Residential", "Housing Society", "Commercial", "Industrial"]

    const filteredWebinars = PAST_WEBINARS.filter(w => activeCategory === "All Webinars" || w.category === activeCategory)

    // For email capturing pipeline state
    const [registrationEmail, setRegistrationEmail] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        if (registrationEmail) setIsRegistered(true)
    }

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* 1. HERO SECTION */}
                <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[65vh] lg:px-10 lg:py-32 pt-32 lg:pt-40 isolate">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/90 mix-blend-multiply z-10"></div>
                        <Image src="/images/webinar-residential.png" alt="Greenveyil Solar Academy Webinars" fill className="object-cover opacity-50 sepia-[.2]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl pt-8">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Video className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Greenveyil Solar Academy</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                                Learn Before You Invest.
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed mb-10 border-l-2 border-energy-yellow pl-6">
                                Understand solar pricing, system sizing, subsidies, financing models, housing society structures and long-term savings — directly from our engineering and advisory team.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="#upcoming" className="inline-flex items-center justify-center rounded-full bg-energy-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-energy-green-dark transition-all hover:bg-white hover:text-energy-green-dark shadow-xl w-full sm:w-auto">
                                    View Upcoming Webinar <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                                <Link href="#archive" className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 shadow-xl w-full sm:w-auto backdrop-blur-sm">
                                    Watch Past Sessions <Youtube className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. WHY ATTEND (AUTHORITY SECTION) */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24 relative isolate">
                    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-energy-green-dark/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 -translate-x-1/2"></div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-6">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-2">Authority & Clarity</h2>
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl leading-tight">
                                Why Our Solar Webinars Matter
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The solar market is crowded with misinformation. We conduct structured live sessions to help homeowners, societies and businesses make precise, engineering-backed energy decisions.
                            </p>
                            <div className="bg-muted p-6 rounded-xl border-l-4 border-energy-yellow font-medium text-energy-green-dark italic mt-4 shadow-sm">
                                "We don’t sell during sessions. We explain the infrastructure."
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="bg-card p-10 lg:p-12 rounded-3xl border border-border/60 shadow-md relative overflow-hidden">
                            <ShieldCheck className="absolute -bottom-6 -right-6 w-48 h-48 text-muted/30 -z-10" />
                            <ul className="space-y-5">
                                {[
                                    "Clarity on real solar costs vs market myths",
                                    "ROI breakdown with real engineering data",
                                    "Understanding CAPEX vs OPEX models",
                                    "State subsidy & net metering insights",
                                    "Rooftop feasibility & system sizing logic",
                                    "Housing society financial models"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-foreground font-semibold items-center border-b border-border/50 pb-4 last:border-0 last:pb-0">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> {step}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 3. UPCOMING WEBINAR LISTING / REGISTRATION PIPELINE */}
                <section id="upcoming" className="bg-energy-green-dark py-20 lg:py-28 text-white relative isolate overflow-hidden">
                    <div className="absolute right-0 top-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="mb-12">
                            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl text-center lg:text-left">
                                Upcoming Live Sessions
                            </h2>
                        </ScrollReveal>

                        <div className="grid lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto bg-black/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">

                            {/* Visual Thumbnail Column */}
                            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                                <Image src="/images/webinar-residential.png" alt="Webinar Thumbnail" fill className="object-cover opacity-80 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark via-transparent to-transparent"></div>
                                <div className="absolute top-6 left-6 bg-energy-yellow text-energy-green-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Residential
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                            <User className="w-6 h-6 text-energy-yellow" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Arun Prakash</p>
                                            <p className="text-white/60 text-xs mt-0.5">Head of Engineering – Greenveyil</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Details & Opt-In Pipeline Form */}
                            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                    Everything You Need to Know Before Installing Rooftop Solar
                                </h3>

                                <div className="flex flex-wrap gap-6 mb-8 border-b border-white/10 pb-8">
                                    <div className="flex items-center gap-2 text-white/80 font-medium">
                                        <Calendar className="w-5 h-5 text-energy-yellow" /> 15 March 2026
                                    </div>
                                    <div className="flex items-center gap-2 text-white/80 font-medium">
                                        <Clock className="w-5 h-5 text-energy-yellow" /> 7:00 PM IST
                                    </div>
                                    <div className="flex items-center gap-2 text-white/80 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                        ⏱️ 60 Minutes
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xs uppercase tracking-widest text-energy-yellow font-bold mb-3">Topics Covered:</h4>
                                    <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-white/70 font-medium">
                                        {["System size calculation basics", "Subsidy eligibility frameworks", "EMI vs Upfront modeling", "Expected payback period vectors", "Net metering explained"].map((t, i) => (
                                            <li key={i} className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> {t}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Form / Pipeline logic block */}
                                {!isRegistered ? (
                                    <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-4">
                                        <div className="relative flex-grow">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email to reserve your seat"
                                                value={registrationEmail}
                                                onChange={e => setRegistrationEmail(e.target.value)}
                                                className="w-full bg-white/5 border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-energy-yellow focus:ring-1 focus:ring-energy-yellow transition-all"
                                            />
                                        </div>
                                        <button type="submit" className="bg-energy-yellow text-energy-green-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white transition-colors shrink-0 uppercase tracking-widest text-sm">
                                            Register Now
                                        </button>
                                    </form>
                                ) : (
                                    <div className="bg-secondary/20 border border-secondary/50 rounded-xl p-6 flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">Registration Successful!</p>
                                            <p className="text-white/70 text-sm mt-1">We have sent a calendar invite and confirmation to your email. You will be added to our automated reminder sequence.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* EMPTY STATE DEMONSTRATION LOGIC */}
                        {/* 
                        <div className="text-center py-16 bg-black/20 rounded-3xl border border-white/5 backdrop-blur-sm max-w-4xl mx-auto">
                            <Clock className="w-12 h-12 text-white/20 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">No upcoming live sessions at the moment.</h3>
                            <p className="text-white/60 mb-6">You can explore our past recorded sessions below or register interest for the next seminar schedule.</p>
                            <button className="bg-energy-yellow text-energy-green-dark font-bold px-6 py-3 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider">
                                Notify Me About Next Webinar
                            </button>
                        </div> 
                        */}

                    </div>
                </section>

                {/* 4 & 5. WEBINAR CATEGORIES FILTER & PAST SESSIONS ARCHIVE */}
                <section id="archive" className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28 relative isolate min-h-[600px]">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl">
                            Past Webinars & Masterclasses
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">Access our highly structured educational archive sorted by critical energy sectors.</p>

                        {/* Tab Filter */}
                        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 mb-16">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${activeCategory === cat
                                        ? "bg-energy-green-dark text-white shadow-md border border-energy-green-dark"
                                        : "bg-background text-muted-foreground border border-border hover:bg-muted"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Past Webinar Grid Display */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredWebinars.map((webinar, i) => (
                            <ScrollReveal key={i} delay={50 * i} className="bg-card rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image src={webinar.image} alt={webinar.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-energy-green-dark/40 mix-blend-multiply group-hover:bg-energy-green-dark/20 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-energy-yellow/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300">
                                            <PlayCircle className="w-8 h-8 text-energy-green-dark" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-energy-green-dark shadow-sm">
                                        {webinar.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-energy-green-dark mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">{webinar.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow line-clamp-3">
                                        {webinar.desc}
                                    </p>
                                    <div className="border-t border-border/50 pt-5 mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-foreground/80 font-bold">
                                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center"><User className="w-3 h-3 text-energy-green-dark" /></div> {webinar.speaker}
                                        </div>
                                        <a href={webinar.link} className="text-secondary font-bold text-sm hover:underline flex items-center gap-1">
                                            Watch <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* 6. EDUCATIONAL AUTHORITY & EXPECTATIONS */}
                <section className="bg-muted py-20 lg:py-28 relative isolate overflow-hidden border-y border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-green-dark/10 bg-energy-green-dark/5 rounded-full">
                                    <BookOpen className="w-4 h-4 text-energy-green-dark" />
                                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-green-dark">Solar Knowledge Series</span>
                                </div>
                                <h2 className="mb-6 text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl leading-tight">
                                    Educational Excellence, Published Quarterly.
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium">
                                    Instead of just listing videos, we have structured deep solar learning algorithms targeting:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6 text-sm font-semibold text-energy-green-dark/80">
                                    {[
                                        "Solar panel types comparison",
                                        "Inverter technology basics",
                                        "Structural safety for rooftops",
                                        "Housing society regulatory process",
                                        "Government subsidy framework",
                                        "Industrial compliance requirements"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 items-center bg-card p-3 rounded-lg border border-border shadow-sm">
                                            <div className="w-1.5 h-1.5 bg-energy-yellow rounded-full shrink-0"></div> <span className="truncate">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={100} className="bg-energy-green-dark text-white p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                                <Users className="absolute top-6 right-6 w-32 h-32 text-white/5 -z-10 group-hover:scale-110 transition-transform duration-700" />
                                <h3 className="text-2xl font-bold mb-8">What to Expect During Sessions</h3>
                                <div className="space-y-6 relative z-10">
                                    {[
                                        { title: "45–60 minute structured presentation", desc: "No fluff. Strictly highly technical data." },
                                        { title: "Real engineering case studies", desc: "Review exact CAD models and ROI financials." },
                                        { title: "Live Q&A session", desc: "Ask direct questions to our engineering heads." },
                                        { title: "No pressure selling", desc: "You download the data, you make the choice." },
                                        { title: "Post-webinar consultation option", desc: "For serious infrastructure implementations." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-energy-yellow shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-bold text-sm">{step.title}</h4>
                                                <p className="text-white/60 text-xs mt-1 font-medium">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 8. MEET OUR SPEAKERS */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-24">
                    <ScrollReveal className="text-center max-w-2xl mx-auto border border-border/60 rounded-3xl p-10 bg-card shadow-sm">
                        <h2 className="text-2xl font-bold text-energy-green-dark mb-4">Meet Our Speakers</h2>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-medium">
                            We don't deploy sales agents to educate you. Our sessions are conducted strictly by those who build the infrastructure.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-energy-green-dark/80">
                            <span className="bg-muted px-4 py-2 rounded-lg border border-border">Senior Electrical Engineers</span>
                            <span className="bg-muted px-4 py-2 rounded-lg border border-border">Solar EPC Project Heads</span>
                            <span className="bg-muted px-4 py-2 rounded-lg border border-border">Financial Modeling Analysts</span>
                            <span className="bg-muted px-4 py-2 rounded-lg border border-border">Regulatory Experts</span>
                        </div>
                    </ScrollReveal>
                </section>

                {/* 9. FINAL CTA SECTION (Conversion Pipeline) */}
                <section className="bg-energy-yellow py-20 lg:py-28 relative overflow-hidden text-center isolate">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-energy-green-dark/5 blur-[100px] rounded-full -z-10"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Ready to Explore Solar for Your Property?
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Join our next session or bypass the webinar and speak uniquely to our advisory team directly regarding your exact capacity structure.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="#upcoming"
                                    className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-8 py-4 text-sm font-bold uppercase tracking-wider text-energy-yellow transition-all hover:bg-white hover:text-energy-green-dark shadow-xl hover:shadow-2xl border border-transparent hover:border-energy-green-dark/20 w-full sm:w-auto"
                                >
                                    Register for Upcoming Webinar
                                </Link>
                                <Link
                                    href="/consultation"
                                    className="inline-flex items-center justify-center rounded-full bg-transparent border border-energy-green-dark px-8 py-4 text-sm font-bold uppercase tracking-wider text-energy-green-dark transition-all hover:bg-energy-green-dark hover:text-white shadow-sm w-full sm:w-auto"
                                >
                                    Schedule Free Solar Consultation <ArrowUpRight className="w-4 h-4 ml-2" />
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
