import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { JOBS } from "../jobs"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, MapPin, Briefcase, Clock, Building, CheckCircle2, ChevronRight } from "lucide-react"

export function generateStaticParams() {
    return JOBS.map((job) => ({
        slug: job.slug,
    }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params
    const job = JOBS.find((j) => j.slug === params.slug)
    if (!job) return { title: "Job Not Found" }
    return {
        title: `${job.title} | Careers at Greenveyil`,
        description: job.overview,
    }
}

export default async function JobDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params
    const job = JOBS.find((j) => j.slug === params.slug)

    if (!job) {
        notFound()
    }

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 pt-32 lg:pt-40">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-20 lg:pb-32">

                    {/* Breadcrumb Navigation */}
                    <ScrollReveal>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-12">
                            <Link href="/careers" className="hover:text-energy-green-dark transition-colors flex items-center gap-1">
                                <ArrowLeft className="w-4 h-4" /> Back to Open Positions
                            </Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* LEFT MAIN CONTENT */}
                        <div className="lg:col-span-8 space-y-12">
                            <ScrollReveal>
                                <h1 className="text-3xl font-bold text-energy-green-dark md:text-5xl leading-tight mb-6">
                                    {job.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 pb-10 border-b border-border/50">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80 bg-muted/50 px-4 py-2 rounded-lg border border-border/40">
                                        <Building className="w-4 h-4 text-energy-green-dark" /> Department: {job.department}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80 bg-muted/50 px-4 py-2 rounded-lg border border-border/40">
                                        <MapPin className="w-4 h-4 text-energy-green-dark" /> Location: {job.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80 bg-muted/50 px-4 py-2 rounded-lg border border-border/40">
                                        <Briefcase className="w-4 h-4 text-energy-green-dark" /> {job.employmentType}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80 bg-muted/50 px-4 py-2 rounded-lg border border-border/40">
                                        <Clock className="w-4 h-4 text-energy-green-dark" /> Experience: {job.experience}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100} className="space-y-6">
                                <h2 className="text-2xl font-bold text-energy-green-dark flex items-center gap-3">
                                    <div className="w-2 h-6 bg-energy-yellow rounded-full"></div> Role Overview
                                </h2>
                                <p className="text-foreground/80 leading-relaxed text-lg font-medium bg-muted/30 p-6 rounded-2xl border border-border/50">
                                    {job.overview}
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={150} className="space-y-6">
                                <h2 className="text-2xl font-bold text-energy-green-dark flex items-center gap-3">
                                    <div className="w-2 h-6 bg-energy-green-dark rounded-full"></div> Key Responsibilities
                                </h2>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex gap-4 items-start bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                            <span className="text-foreground text-sm leading-relaxed font-semibold">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={200} className="space-y-6">
                                <h2 className="text-2xl font-bold text-energy-green-dark flex items-center gap-3">
                                    <div className="w-2 h-6 bg-secondary rounded-full"></div> Required Qualifications
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {job.qualifications.map((qual, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-foreground/80 font-medium items-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                            <div className="w-1.5 h-1.5 bg-energy-green-dark rounded-full shrink-0"></div> {qual}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {job.preferred.length > 0 && (
                                <ScrollReveal delay={250} className="space-y-4">
                                    <h2 className="text-2xl font-bold text-energy-green-dark flex items-center gap-3 mb-6">
                                        <div className="w-2 h-6 bg-foreground/30 rounded-full"></div> Preferred Skills
                                    </h2>
                                    <ul className="space-y-3">
                                        {job.preferred.map((pref, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-muted-foreground items-center">
                                                <ChevronRight className="w-4 h-4 text-energy-yellow shrink-0" /> {pref}
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* RIGHT SIDEBAR (STICKY APPLY PANEL) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <ScrollReveal delay={300} className="bg-energy-green-dark rounded-3xl p-8 lg:p-10 shadow-xl border border-white/5 relative overflow-hidden isolate">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-energy-yellow/20 rounded-bl-full -z-10"></div>

                                <h3 className="text-white font-bold text-2xl mb-4">Application Process</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-8">
                                    Start your structured career in precise infrastructure execution. Apply directly through our verified LinkedIn portal below.
                                </p>

                                <a
                                    href={job.applyLink}
                                    className="inline-flex items-center justify-center w-full bg-energy-yellow text-energy-green-dark font-bold px-6 py-4 rounded-xl shadow-lg transition-all hover:bg-white hover:scale-[1.02] uppercase tracking-wider text-sm border border-transparent hover:border-energy-green-dark/20 mb-8 mt-2"
                                >
                                    Apply via LinkedIn <ArrowUpRight className="w-4 h-4 ml-2" />
                                </a>

                                <div className="border-t border-white/10 pt-8 mt-4">
                                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-3">Alternative Email Submission</p>
                                    <p className="text-sm text-white/90 leading-relaxed font-medium">
                                        Alternatively, you may email your structured CV quoting <span className="text-secondary font-bold">"{job.title}"</span> in the subject line to:
                                    </p>
                                    <a href={`mailto:careers@greenveyil.com?subject=Application for ${job.title}`} className="inline-block mt-4 text-energy-yellow hover:underline font-bold text-sm tracking-wide">
                                        careers@greenveyil.com
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    )
}
