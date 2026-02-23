import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Sun, Building, Zap, ArrowLeftRight, Leaf, ShieldCheck, Factory, Lightbulb, Wallet, Network, HelpCircle, ArrowDown, Settings, LayoutGrid, BarChart3 } from "lucide-react"

export const metadata = {
    title: "Rooftop & Group Captive Solar | Greenveyil Energy",
    description: "Structured Solar Power Solutions for Diverse Energy Needs",
}

export default function RooftopGroupCaptivePage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40 border-b border-white/10">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <div className="absolute inset-0 bg-energy-green-dark/80 mix-blend-multiply z-10"></div>
                        <Image src="/images/section-solar.jpg" alt="Solar Deployment Models India" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-energy-green-dark to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-5xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <ArrowLeftRight className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Deployment Models</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                                Rooftop & Group Captive Solar
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Greenveyil Energy Pvt Ltd offers two primary solar deployment models tailored to residential, commercial, and industrial energy consumers across India, structured strictly according to consumption patterns and regulatory frameworks.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ROOFTOP SOLAR SECTION */}
                <section id="rooftop" className="py-20 lg:py-28 relative isolate">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
                            <ScrollReveal className="space-y-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-energy-green-dark/10 rounded-xl flex items-center justify-center">
                                        <Sun className="w-6 h-6 text-energy-green-dark" />
                                    </div>
                                    <h3 className="text-3xl font-bold tracking-tight text-energy-green-dark md:text-4xl">
                                        Rooftop Solar
                                    </h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Rooftop solar involves installing photovoltaic (PV) panels directly on the rooftop of a residential, commercial, or industrial building. The generated electricity is used on-site, drastically reducing dependency on grid supply.
                                </p>
                                <div className="bg-muted p-6 border-l-4 border-energy-green-dark rounded-r-xl">
                                    <p className="text-sm font-semibold text-energy-green-dark">This model is ideal where adequate unused rooftop space and structural capacity are available.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100} className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 bg-energy-green-dark text-white p-6 rounded-2xl shadow-lg">
                                    <h4 className="font-bold mb-4 flex items-center gap-2"><Wallet className="w-5 h-5 text-energy-yellow" /> CAPEX Model</h4>
                                    <p className="text-sm text-white/80 leading-relaxed">Client invests upfront and completely owns the system. Maximum long-term savings accrue over 20–25 years.</p>
                                </div>
                                <div className="col-span-2 bg-card border border-border/60 p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-energy-green-dark mb-4 flex items-center gap-2"><ArrowLeftRight className="w-5 h-5 text-secondary" /> OPEX / PPA Model</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Greenveyil installs and maintains the system. The client strictly purchases generated electricity at a pre-agreed tariff lower than grid rates.</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Visual Process Diagram (Rooftop) */}
                        <ScrollReveal className="bg-muted/30 p-8 lg:p-12 rounded-3xl border border-border/50 mb-16">
                            <h4 className="text-xl font-bold text-center text-energy-green-dark mb-10 uppercase tracking-widest">How Rooftop Solar Works</h4>
                            <div className="grid md:grid-cols-5 gap-4 relative">
                                {/* Desktop connecting line */}
                                <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-border/80 z-0"></div>

                                {[
                                    { icon: Sun, title: "1. Installation", desc: "Panels on rooftop surface" },
                                    { icon: Zap, title: "2. Generation", desc: "Panels generate DC power" },
                                    { icon: Settings, title: "3. Conversion", desc: "Inverter converts to AC" },
                                    { icon: Building, title: "4. Consumption", desc: "Electricity used on-site" },
                                    { icon: Network, title: "5. Net Metering", desc: "Excess exported to grid" }
                                ].map((step, i) => (
                                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 bg-card border-4 border-background rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:border-energy-yellow transition-all duration-300">
                                            <step.icon className="w-6 h-6 text-energy-green-dark" />
                                        </div>
                                        <h5 className="font-bold text-sm text-foreground mb-1">{step.title}</h5>
                                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Benefits & Suitability */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <ScrollReveal className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
                                <h4 className="text-lg font-bold text-energy-green-dark mb-6 border-b border-border/50 pb-4">Core Benefits</h4>
                                <ul className="space-y-4">
                                    {["Lower monthly electricity bills", "Utilization of idle rooftop space", "Reduced transmission losses", "Faster implementation timeline", "Net metering benefits (state dependent)"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-medium text-muted-foreground items-start">
                                            <CheckCircle2 className="w-5 h-5 text-energy-yellow shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                            <ScrollReveal delay={100} className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
                                <h4 className="text-lg font-bold text-energy-green-dark mb-6 border-b border-border/50 pb-4">Most Suitable For</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["Independent homes", "Housing societies", "Office buildings", "Educational institutions", "Retail establishments", "Industrial rooftops"].map((item, i) => (
                                        <span key={i} className="bg-muted px-4 py-2 rounded-lg text-sm font-semibold text-energy-green-dark border border-border/50">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </section>

                {/* GROUP CAPTIVE SOLAR SECTION */}
                <section id="group-captive" className="bg-energy-green-dark text-white py-20 lg:py-28 relative isolate overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">

                            <ScrollReveal className="order-2 lg:order-1 relative p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                                <h4 className="font-bold text-energy-yellow mb-6 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Financial & Regulatory Framework</h4>
                                <p className="text-sm text-white/80 leading-relaxed mb-6">
                                    Group Captive projects operate under the Indian Electricity Act provisions and specific state-level open access policies. This architecture enables long-term tariff stability and partial independence from grid price volatility.
                                </p>
                                <ul className="space-y-3">
                                    {["Equity participation requirements", "Minimum consumption commitments", "Open access transmission agreements", "Long-term power purchase contracts"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-medium text-white/90 items-start">
                                            <div className="w-4 h-4 rounded-sm bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[10px] text-white font-bold">✓</span>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={100} className="space-y-8 order-1 lg:order-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <Factory className="w-6 h-6 text-energy-yellow" />
                                    </div>
                                    <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                                        Group Captive Solar
                                    </h3>
                                </div>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    Group Captive Solar is an off-site solar power generation model where multiple consumers jointly invest in or subscribe to a central solar plant. Electricity generated from the plant is rigorously allocated to participating members under structured agreements.
                                </p>
                                <div className="border-l-4 border-secondary pl-5 py-2">
                                    <p className="text-sm font-semibold text-white/90">Particularly relevant for commercial and industrial consumers with high energy demand but limited rooftop availability.</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Visual Process Diagram (Group Captive) */}
                        <ScrollReveal className="bg-black/20 p-8 lg:p-12 rounded-3xl border border-white/10 mb-16">
                            <h4 className="text-xl font-bold text-center text-white mb-10 uppercase tracking-widest">How Group Captive Works</h4>
                            <div className="grid md:grid-cols-5 gap-4 relative">
                                <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-white/20 z-0"></div>

                                {[
                                    { icon: LayoutGrid, title: "1. Development", desc: "Off-site plant constructed" },
                                    { icon: Building, title: "2. Participation", desc: "Entities buy shareholding" },
                                    { icon: BarChart3, title: "3. Allocation", desc: "Energy divided by share" },
                                    { icon: Network, title: "4. Transmission", desc: "Via open access framework" },
                                    { icon: Wallet, title: "5. Settlement", desc: "Structured tariff payments" }
                                ].map((step, i) => (
                                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 bg-energy-green-dark border-4 border-[#0e2a1a] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:border-secondary transition-all duration-300">
                                            <step.icon className="w-6 h-6 text-energy-yellow" />
                                        </div>
                                        <h5 className="font-bold text-sm text-white mb-1">{step.title}</h5>
                                        <p className="text-xs text-white/60">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Suitability */}
                        <ScrollReveal className="text-center">
                            <h4 className="text-lg font-bold text-energy-yellow mb-6">Ideal Industrial & Commercial Profiles</h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Manufacturing units", "Large commercial establishments", "Industrial parks", "Companies with multiple locations", "Businesses with limited rooftop area"].map((item, i) => (
                                    <span key={i} className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium text-white">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

                {/* COMPARISON INFOGRAPHIC SECTION */}
                <section className="bg-muted py-20 lg:py-28 border-b border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-energy-green-dark md:text-4xl">
                                Rooftop vs Group Captive
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                                Choosing the right model depends on your load profile, space availability, and regulatory alignment.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl border border-border/60 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-6 bg-muted text-sm uppercase tracking-widest text-muted-foreground font-bold border-b border-r border-border/50 w-1/3">Factor</th>
                                            <th className="p-6 bg-energy-green-dark text-white text-sm uppercase tracking-widest font-bold border-b border-r border-border/50 w-1/3">Rooftop Solar</th>
                                            <th className="p-6 bg-[#0a1f13] text-energy-yellow text-sm uppercase tracking-widest font-bold border-b border-border/50 w-1/3">Group Captive</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {[
                                            { factor: "Location", rooftop: "On-site (At your facility)", group: "Off-site (Remote Solar Farm)" },
                                            { factor: "Space Requirement", rooftop: "Rooftop structure strictly required", group: "No on-site space required" },
                                            { factor: "Best For", rooftop: "Residential & Medium Commercial", group: "Large Commercial & Industrial Hubs" },
                                            { factor: "Regulatory Structure", rooftop: "Net Metering Framework", group: "Open Access Framework" },
                                            { factor: "Scalability", rooftop: "kW to small MW limits", group: "Unlimited MW scale infrastructure" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-muted/50 transition-colors">
                                                <td className="p-6 text-sm font-bold text-foreground border-r border-border/50">{row.factor}</td>
                                                <td className="p-6 text-sm text-muted-foreground font-medium border-r border-border/50">{row.rooftop}</td>
                                                <td className="p-6 text-sm text-energy-green-dark font-medium">{row.group}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* COST-SAVING SCENARIO & WHY GREENVEYIL */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal className="bg-energy-yellow/20 border border-energy-yellow/50 p-8 lg:p-10 rounded-3xl relative">
                            <Lightbulb className="w-12 h-12 text-energy-green-dark opacity-10 absolute top-6 right-6" />
                            <h4 className="text-xl font-bold text-energy-green-dark mb-4">Cost-Saving Example Profile</h4>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                A mid-sized manufacturing unit paying ₹8.50/unit to the grid utilizes a <span className="font-bold text-energy-green-dark">Group Captive</span> model to lock in solar power at ₹4.50/unit via a PPA.
                            </p>
                            <div className="bg-card p-5 rounded-xl border border-border/50 flex flex-col gap-2 shadow-sm">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Grid Tariff:</span>
                                    <span className="font-bold text-destructive line-through">₹8.50 / kWh</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Solar PPA Tariff:</span>
                                    <span className="font-bold text-energy-green-dark">₹4.50 / kWh</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pt-2">
                                    <span className="font-bold text-foreground">Direct Savings:</span>
                                    <span className="font-bold text-energy-green-dark text-lg">~47% Reduction</span>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 italic">*Indicative figures varying by state regulation.</p>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="space-y-6">
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Why Greenveyil
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our focus remains exclusively on solar infrastructure tailored rigorously to Indian regulatory and grid environments.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Technical feasibility assessment",
                                    "Complex financial modeling support",
                                    "Grid & regulatory coordination",
                                    "Precision EPC execution",
                                    "Long-term O&M services"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm font-semibold text-energy-green-dark items-start bg-muted p-4 rounded-xl border border-border/50">
                                        <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FAQ SECTION (ADD-ON) */}
                <section className="bg-energy-green-dark text-white py-16 lg:py-24">
                    <div className="mx-auto max-w-[900px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-12">
                            <HelpCircle className="w-10 h-10 text-energy-yellow mx-auto mb-4" />
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {[
                                { q: "Do I need to own the rooftop for Group Captive Solar?", a: "No. Group Captive solar is an off-site model. The solar plant is built elsewhere, and the generated power is supplied to your facility through the existing electricity grid." },
                                { q: "How long does a Rooftop Solar installation take?", a: "Depending on the system's size and regulatory approvals, an industrial or commercial rooftop installation typically takes 6 to 12 weeks from planning to grid synchronization." },
                                { q: "Are there tax benefits for choosing the CAPEX model?", a: "Yes. In India, businesses investing through the CAPEX model can claim Accelerated Depreciation (AD) benefits, significantly reducing their tax liabilities." }
                            ].map((faq, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h4 className="font-bold text-energy-yellow text-lg mb-2">{faq.q}</h4>
                                    <p className="text-white/80 text-sm leading-relaxed">{faq.a}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="bg-energy-yellow py-20 lg:py-24 relative overflow-hidden text-center isolate">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Schedule a Solar Model Consultation
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-energy-green-dark/80 font-medium leading-relaxed">
                                Understand whether Rooftop or Group Captive solar is right for your exact energy profile.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {["Load analysis", "Space evaluation", "Financial projection", "Regulatory pathway review"].map((tag, i) => (
                                    <span key={i} className="inline-block px-4 py-2 bg-white/50 border border-white backdrop-blur-sm rounded-full text-xs font-semibold text-energy-green-dark uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-8 py-4 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                            >
                                Schedule a Free Solar Assessment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
