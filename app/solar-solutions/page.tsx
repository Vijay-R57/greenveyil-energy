import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Cpu, FileText, Zap, LayoutGrid, Sun, HelpCircle, Layers, Settings, BarChart, Download, Minimize } from "lucide-react"

export const metadata = {
    title: "Solar Solutions & Technologies | Greenveyil Energy",
    description: "Advanced Solar Technologies for Reliable Energy Generation",
}

export default function SolarSolutionsPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[60vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/85 mix-blend-multiply z-10"></div>
                        <Image src="/images/solution1.jpeg" alt="Solar Technologies" fill className="object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-b from-energy-green-dark/50 via-transparent to-energy-green-dark z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl mt-12">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Cpu className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Solar Solutions</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                                Advanced Solar Technologies
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                Deploying high-performance solar technologies tailored rigorously to residential, commercial, and industrial engineering requirements.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* INTRODUCTION: TECH SELECTION */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollReveal className="space-y-6">
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Engineering-First Technology Selection
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Greenveyil Energy Pvt Ltd focuses exclusively on solar energy infrastructure, ensuring deep technical specialization. Our objective remains strictly analytical: optimal technology selection based on site conditions, specific load profiles, climatic exposure, and long-term financial objectives.
                            </p>
                            <div className="bg-muted p-6 border-l-4 border-energy-green-dark rounded-r-xl">
                                <p className="text-sm font-semibold text-energy-green-dark uppercase tracking-widest">Technology selection is not one-size-fits-all. It is engineered.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="grid grid-cols-2 gap-4">
                            {[
                                { title: "Photovoltaic Modules", icon: LayoutGrid, desc: "Capturing irradiance" },
                                { title: "Inverter Configurations", icon: Zap, desc: "DC/AC conversion" },
                                { title: "Structural Mounting", icon: Layers, desc: "Asset securing" },
                                { title: "Shading Analytics", icon: Sun, desc: "Environmental mapping" }
                            ].map((item, i) => (
                                <div key={i} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col gap-4">
                                    <div className="w-10 h-10 rounded-full bg-energy-green-dark/5 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-energy-green-dark" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </ScrollReveal>
                    </div>
                </section>

                {/* --- PANEL TECHNOLOGIES: MONO & POLY --- */}
                <section className="bg-muted py-20 lg:py-28 relative border-t border-border/50">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-5xl">
                                Photovoltaic Frameworks
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                                Deep analysis into the primary module architectures securing energy across modern infrastructures.
                            </p>
                        </ScrollReveal>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Monocrystalline */}
                            <ScrollReveal id="monocrystalline" className="bg-card p-8 lg:p-10 rounded-3xl shadow-sm border border-border/60 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 w-32 h-32 bg-energy-green-dark/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-energy-green-dark text-white rounded-xl shadow-lg">
                                        <LayoutGrid className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-energy-green-dark">Monocrystalline Panels</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">High-Efficiency Architecture</p>
                                    </div>
                                </div>
                                <p className="text-foreground/80 leading-relaxed mb-8 text-sm">
                                    Manufactured using pure single-crystal silicon, monocrystalline panels offer peak efficiency. Designed structurally to generate massive power within limited surface constraints while retaining a sleek, uniform aesthetic profile.
                                </p>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex-1 bg-muted rounded-xl p-4 text-center border border-border/50">
                                        <div className="text-2xl font-light text-energy-green-dark">~19% - 22%</div>
                                        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Efficiency</div>
                                    </div>
                                    <div className="flex-1 bg-muted rounded-xl p-4 text-center border border-border/50">
                                        <div className="text-2xl font-light text-energy-green-dark">~0.3% / yr</div>
                                        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Degradation</div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-sm text-foreground mb-3 border-b border-border/50 pb-2">Optimal Applications</h4>
                                <ul className="space-y-2 mb-6">
                                    {["Residential rooftops", "Space-constrained commercial roofs", "High-efficiency industrial installations"].map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground">
                                            <span className="text-energy-green-dark">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            {/* Polycrystalline */}
                            <ScrollReveal id="polycrystalline" delay={100} className="bg-card p-8 lg:p-10 rounded-3xl shadow-sm border border-border/60 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 w-32 h-32 bg-energy-yellow/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white border border-border text-energy-green-dark rounded-xl shadow-sm">
                                        <GridPatternIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-energy-green-dark">Polycrystalline Panels</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Cost-Effective Generation</p>
                                    </div>
                                </div>
                                <p className="text-foreground/80 leading-relaxed mb-8 text-sm">
                                    Produced using multi-crystal silicon structures, polycrystalline panels dominate balanced cost-to-performance projects. They securely deliver steady long-term electricity generation over large available footprint surfaces.
                                </p>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex-1 bg-muted rounded-xl p-4 text-center border border-border/50">
                                        <div className="text-2xl font-light text-energy-green-dark">~15% - 17%</div>
                                        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Efficiency</div>
                                    </div>
                                    <div className="flex-1 bg-muted rounded-xl p-4 text-center border border-border/50">
                                        <div className="text-2xl font-light text-energy-green-dark">~0.5% / yr</div>
                                        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Degradation</div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-sm text-foreground mb-3 border-b border-border/50 pb-2">Optimal Applications</h4>
                                <ul className="space-y-2 mb-6">
                                    {["Expansive commercial rooftops", "Medium-scale industrial systems", "Budget-optimized installations"].map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground">
                                            <span className="text-energy-green-dark">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* --- PANEL TECHNOLOGIES: THIN FILM & BIFACIAL --- */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Thin Film */}
                        <ScrollReveal id="thin-film" className="bg-energy-green-dark text-white p-8 lg:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                            <h3 className="text-2xl font-bold mb-2">Thin Film Technology</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-energy-yellow mb-6">Flexible & Lightweight</p>
                            <p className="text-white/80 leading-relaxed mb-8 text-sm">
                                Engineered using alternative semiconductor materials applied in microscopic thin layers. Uniquely capable of adapting to complex architectural surfaces and roofs strictly limited by weight-bearing physical constraints.
                            </p>

                            <div className="bg-black/20 rounded-xl p-6 mb-8 border border-white/10">
                                <ul className="space-y-3">
                                    {["High temperature coefficient stability", "Lightweight structural demands", "Custom flexibility integration"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-medium text-white/90 items-start">
                                            <span className="text-energy-yellow font-bold">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. Efficiency: ~10% - 13%</div>
                        </ScrollReveal>

                        {/* Bifacial */}
                        <ScrollReveal id="bifacial" delay={100} className="bg-black text-white p-8 lg:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-[#222]">
                            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -z-10 translate-x-1/2 translate-y-1/2"></div>
                            <h3 className="text-2xl font-bold mb-2">Bifacial Modules</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">Dual-Sided Energy Capture</p>
                            <p className="text-white/80 leading-relaxed mb-8 text-sm">
                                Structurally designed to generate electricity from both their front and rear surfaces, capturing incident light and ground albedo (reflected light). Drastically improves total energy yield when integrated over reflective surfaces.
                            </p>

                            <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                                <ul className="space-y-3">
                                    {["High MW-Scale yield generation", "Improved performance in ground-mounts", "Enhanced ROI for utility plants"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-medium text-white/90 items-start">
                                            <span className="text-secondary font-bold">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. Efficiency: ~20% - 24%</div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* TECHNOLOGY COMPARISON MATRIX */}
                <section className="bg-muted py-20 lg:py-28 border-y border-border/50 overflow-hidden">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Photovoltaic Comparison Matrix
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                                Architectural alignment of panel characteristics to ensure definitive selection clarity.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl border border-border/60 overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr>
                                        <th className="p-6 bg-energy-green-dark text-white text-sm uppercase tracking-widest font-bold border-b border-border/50">Technology</th>
                                        <th className="p-6 bg-energy-green-dark text-white text-sm uppercase tracking-widest font-bold border-b border-border/50">Efficiency</th>
                                        <th className="p-6 bg-energy-green-dark text-white text-sm uppercase tracking-widest font-bold border-b border-border/50">Space Req.</th>
                                        <th className="p-6 bg-energy-green-dark text-white text-sm uppercase tracking-widest font-bold border-b border-border/50">Capital Expense</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {[
                                        { name: "Monocrystalline", eff: "~19% - 22%", space: "Minimal (High Density)", cost: "Premium (₹₹₹)" },
                                        { name: "Polycrystalline", eff: "~15% - 17%", space: "Large (Standard Density)", cost: "Economical (₹₹)" },
                                        { name: "Thin Film", eff: "~10% - 13%", space: "Extensive (Low Density)", cost: "Variable Structural Cost" },
                                        { name: "Bifacial", eff: "~20% - 24%", space: "Reflective Ground Needs", cost: "High Yield Premium (₹₹₹)" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-muted/50 transition-colors">
                                            <td className="p-6 text-sm font-bold text-energy-green-dark">{row.name}</td>
                                            <td className="p-6 text-sm text-foreground font-medium">{row.eff}</td>
                                            <td className="p-6 text-sm text-muted-foreground font-medium">{row.space}</td>
                                            <td className="p-6 text-sm text-foreground font-medium">{row.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </ScrollReveal>

                        {/* Performance Graph Abstract UI */}
                        <ScrollReveal delay={200} className="max-w-3xl mx-auto mt-12 bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex items-center justify-between gap-6 overflow-hidden relative">
                            <div className="absolute right-0 opacity-5"><BarChart className="w-48 h-48" /></div>
                            <div className="relative z-10 w-full">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">25-Year Degradation Benchmark</h4>
                                <div className="space-y-3 w-full">
                                    <div className="flex items-center gap-4 text-xs font-bold"><span className="w-16">Mono</span><div className="h-3 rounded-full bg-energy-green-dark w-[85%]"></div> <span>85% output</span></div>
                                    <div className="flex items-center gap-4 text-xs font-bold"><span className="w-16">Poly</span><div className="h-3 rounded-full bg-energy-green-dark/80 w-[80%]"></div> <span>80% output</span></div>
                                    <div className="flex items-center gap-4 text-xs font-bold"><span className="w-16">Thin Film</span><div className="h-3 rounded-full bg-energy-green-dark/60 w-[70%]"></div> <span>70% output</span></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>


                {/* INVERTERS & MOUNTING */}
                <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        <ScrollReveal id="inverters" className="space-y-6">
                            <div className="w-12 h-12 bg-energy-yellow/20 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-energy-yellow-dark" />
                            </div>
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Solar Inverters
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">DC to Grid-Compatible AC Power</p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Inverters act as the critical brain of the solar system, safely converting the unstable direct current (DC) generated by panels into grid-synchronized alternating current (AC).
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="bg-muted p-5 rounded-xl border border-border/50">
                                    <h5 className="font-bold text-sm text-foreground mb-2">Architecture Types</h5>
                                    <ul className="text-xs text-muted-foreground space-y-1">
                                        <li>• String Inverters</li>
                                        <li>• Central Inverters</li>
                                        <li>• Microinverters</li>
                                    </ul>
                                </div>
                                <div className="bg-muted p-5 rounded-xl border border-border/50">
                                    <h5 className="font-bold text-sm text-foreground mb-2">Core Functions</h5>
                                    <ul className="text-xs text-muted-foreground space-y-1">
                                        <li>• DC to AC conversion</li>
                                        <li>• Performance monitoring</li>
                                        <li>• Instant safety shutdown</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-energy-green-dark border-l-4 border-energy-yellow pl-3">Proper inverter capability selection determines compliance safety.</p>
                        </ScrollReveal>

                        <ScrollReveal id="mounting" delay={100} className="space-y-6">
                            <div className="w-12 h-12 bg-muted border border-border/50 rounded-xl flex items-center justify-center mb-6">
                                <Layers className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-3xl font-light tracking-tight text-energy-green-dark md:text-4xl">
                                Mounting Systems
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Structural Integrity & Durability</p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Irrespective of the module quality, hardware is useless if ripped dynamically by wind load. Our mounting infrastructure securely locks solar architecture to building rooftops and ground mounts for 25+ years.
                            </p>

                            <ul className="space-y-3 pt-4">
                                {[
                                    { t: "Wind load resistance structural engineering", i: Minimize },
                                    { t: "Heavy-grade galvanization for corrosion protection", i: ShieldCheckIcon },
                                    { t: "Precise tilt optimization for geographic mapping", i: BarChart },
                                    { t: "Non-penetrative industrial roof lock capability", i: Minimize } // Using minimize as proxy for clamp
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm font-medium text-foreground items-center bg-card p-3 rounded-lg border border-border/60 shadow-sm">
                                        <item.i className="w-4 h-4 text-energy-green-dark" />
                                        {item.t}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-semibold text-energy-green-dark pt-2">Greenveyil initiates intense structural load-bearing analysis prior to any mounting installation execution.</p>
                        </ScrollReveal>

                    </div>
                </section>

                {/* TECH SELECTION OVERVIEW & SPEC DOWNLOAD */}
                <section className="bg-[#0f2b1a] text-white py-20 lg:py-24 relative overflow-hidden isolate">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <ScrollReveal className="md:w-3/5 space-y-6">
                            <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Technology Finalization</h3>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                Greenveyil categorically refuses to distribute technologies based on global trends or sheer cost-minimalism. Selection must be anchored in irradiance data, geographic orientation, operational load capacity, and rigorous compliance matching.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Geographic Irradiance", "Roof Tilt", "Load Match", "Grid Norms", "Financial Models"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-energy-yellow">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100} className="md:w-2/5 flex flex-col items-center justify-center p-8 bg-black/30 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
                            <FileText className="w-12 h-12 text-secondary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Technical Specifications</h4>
                            <p className="text-sm text-white/70 mb-6">Download our comprehensive tier-1 solar module and inverter technical datasheets.</p>
                            <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-energy-green-dark text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-100 transition-colors">
                                <Download className="w-4 h-4" /> Download PDF Pack
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-background py-16 lg:py-24">
                    <div className="mx-auto max-w-[900px] px-6 lg:px-10">
                        <ScrollReveal className="text-center mb-12">
                            <HelpCircle className="w-10 h-10 text-energy-green-dark mx-auto mb-4" />
                            <h2 className="text-3xl font-bold tracking-tight text-energy-green-dark">Technology FAQs</h2>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {[
                                { q: "Why shouldn't I just buy the cheapest panels (Polycrystalline)?", a: "While polycrystalline panels are highly reliable and cost-effective (₹), they require more physical space to generate the same wattage. If your rooftop size is limited, installing higher efficiency Monocrystalline (₹₹₹) will ultimately result in vastly superior long-term ROI." },
                                { q: "Do Microinverters make a significant difference?", a: "Yes. In environments with shading issues, a standard string inverter will drop the entire system's efficiency if one panel is shaded. Microinverters operate at the individual panel level, isolating underperforming panels and boosting total generation." },
                                { q: "What is the typical lifespan of these systems?", a: "Our tier-1 structured panels maintain a linear performance warranty ensuring at least 80% to 85% functionality up to Year 25. Standard inverters require replacement between Year 10 and 15 depending strictly on operational environment limits." }
                            ].map((faq, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="bg-card border border-border/60 shadow-sm rounded-xl p-6">
                                    <h4 className="font-bold text-foreground text-lg mb-2">{faq.q}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="bg-muted py-20 lg:py-24 relative overflow-hidden text-center isolate border-t border-border/50">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-energy-green-dark/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <ScrollReveal>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl">
                                Let's Engineer Your Infrastructure
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground font-medium leading-relaxed">
                                Schedule a consultation with our highly specialized system architects to build a precise, financially viable, tier-1 solar engineering framework for your facility.
                            </p>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-10 py-5 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
                            >
                                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground mt-8">Site analysis • Technology verification • Financial mapping</p>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}

function GridPatternIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
        </svg>
    )
}

function ShieldCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
