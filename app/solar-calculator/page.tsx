"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import {
    ArrowRight,
    Calculator,
    IndianRupee,
    MapPin,
    Zap,
    Leaf,
    Sun,
    ShieldCheck,
    TrendingUp,
    Settings,
    Target,
    Banknote,
    CheckCircle2,
    TreePine,
    CloudLightning
} from "lucide-react"

export default function SolarCalculatorPage() {
    const [bill, setBill] = useState(5000)
    const [pincode, setPincode] = useState("")
    const [location, setLocation] = useState<string | null>(null)
    const [isFetchingLocation, setIsFetchingLocation] = useState(false)

    useEffect(() => {
        if (pincode.length === 6) {
            setIsFetchingLocation(true)
            setLocation(null)
            fetch(`https://api.postalpincode.in/pincode/${pincode}`)
                .then(res => res.json())
                .then(data => {
                    if (data && data[0] && data[0].Status === "Success") {
                        const postOffice = data[0].PostOffice[0]
                        setLocation(`${postOffice.Name}, ${postOffice.State}`)
                    } else {
                        setLocation("Invalid PIN Code")
                    }
                })
                .catch(() => setLocation("Could not verify PIN"))
                .finally(() => setIsFetchingLocation(false))
        } else {
            setLocation(null)
        }
    }, [pincode])

    // 1. CONSTANTS (India Semi-Realistic Model)
    const avgTariff = 7;                         // ₹ per kWh
    const monthlyGenerationPerKW = 125;          // kWh per kW per month
    const annualGenerationPerKW = 1500;          // kWh per kW per year
    const rooftopAreaPerKW = 90;                 // sq.ft per kW
    const costPerKW = 55000;                     // ₹ per kW
    const subsidyPerKW = 30000;                  // ₹ per kW (residential <=3kW)
    const maxSubsidyCap = 78000;                 // Max subsidy
    const effectiveLifetimeMultiplier = 22;      // 25 yrs adjusted for degradation
    const annualInterestRate = 0.10;             // 10% annual interest
    const co2Factor = 0.82;                      // kg CO2 per kWh offset
    const treeFactor = 21;                       // 1 tree ≈ 21 kg CO2/year

    // 2. LOGIC CALCULATION
    const validBill = Math.max(500, bill);
    const monthlyUnits = validBill / avgTariff;

    const rawSystemSize = monthlyUnits / monthlyGenerationPerKW;
    const systemSizeNum = Math.ceil(rawSystemSize * 2) / 2; // Round up to nearest 0.5
    const systemSize = systemSizeNum.toFixed(1);

    const areaRequired = (systemSizeNum * rooftopAreaPerKW).toFixed(0);
    const annualGeneration = systemSizeNum * annualGenerationPerKW;

    const monthlySavingsNum = (annualGeneration / 12) * avgTariff;
    const monthlySavings = monthlySavingsNum.toFixed(0);
    const annualSavingsNum = monthlySavingsNum * 12;
    const annualSavingsStr = annualSavingsNum.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    const systemCostNum = systemSizeNum * costPerKW;
    const costStr = systemCostNum.toLocaleString("en-IN");

    let subsidyNum = 0;
    if (systemSizeNum <= 3) {
        subsidyNum = systemSizeNum * subsidyPerKW;
    } else {
        subsidyNum = maxSubsidyCap;
    }
    const subsidyStr = subsidyNum.toLocaleString("en-IN");

    const netCostNum = Math.max(0, systemCostNum - subsidyNum);
    const netCostStr = netCostNum.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    const lifetimeSavingsNum = annualSavingsNum * effectiveLifetimeMultiplier;
    const lifetimeSavingsStr = lifetimeSavingsNum.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    const roiPercentNum = netCostNum > 0 ? (annualSavingsNum / netCostNum) * 100 : 0;
    const roiStr = `~${roiPercentNum.toFixed(1)}% p.a.`;

    const opexTariff = 4.25; // Estimated OPEX Solar Tariff
    const monthlySolarBillNum = (annualGeneration / 12) * opexTariff;
    const monthlySolarBillStr = monthlySolarBillNum.toFixed(0);

    const co2MitigatedPerYear = annualGeneration * co2Factor;
    const co2Offset = (co2MitigatedPerYear / 1000).toFixed(1); // Converted to Tons
    const treesPlanted = (co2MitigatedPerYear / treeFactor).toFixed(0);

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-background pb-0 overflow-hidden">
                {/* HERO SECTION */}
                <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-energy-green-dark px-6 py-24 text-center lg:min-h-[55vh] lg:px-10 lg:py-32 pt-32 lg:pt-40">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-energy-green-dark/85 mix-blend-multiply z-10"></div>
                        <Image src="/images/section-solar.jpg" alt="Solar Calculator" fill className="object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 mx-auto max-w-4xl pt-8">
                        <ScrollReveal>
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 border border-energy-yellow/30 bg-energy-yellow/10 rounded-full">
                                <Calculator className="w-4 h-4 text-energy-yellow" />
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-energy-yellow">Solar Calculator</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                                Calculate Your Solar Savings Now
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl font-light leading-relaxed mb-6">
                                Estimate your system size, rooftop requirement, monthly savings, and investment — instantly.
                            </p>
                            <p className="text-xs uppercase tracking-widest text-energy-yellow font-bold">
                                Designed for Indian consumers. Built for precision.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CALCULATOR INTERFACE */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24 relative z-20 -mt-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* LEFT: INPUT PANEL */}
                        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
                            <ScrollReveal className="bg-card p-8 rounded-3xl border border-border/60 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-energy-green-dark/5 rounded-bl-full -z-10"></div>
                                <h3 className="text-2xl font-bold text-energy-green-dark mb-8 flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-energy-yellow" /> Enter Your Details
                                </h3>

                                <div className="space-y-8">
                                    {/* Pincode */}
                                    <div>
                                        <label className="block text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-secondary" /> Pin Code
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Enter 6-digit PIN"
                                                value={pincode}
                                                onChange={e => setPincode(e.target.value.replace(/[^0-9]/g, ''))}
                                                maxLength={6}
                                                className="w-full bg-muted/50 border border-border/50 text-foreground text-sm rounded-xl px-5 py-4 focus:outline-none focus:border-energy-green-dark focus:ring-1 focus:ring-energy-green-dark transition-all placeholder:text-muted-foreground/50"
                                            />
                                            {isFetchingLocation && (
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                    <div className="w-4 h-4 border-2 border-energy-green-dark/30 border-t-energy-green-dark rounded-full animate-spin"></div>
                                                </div>
                                            )}
                                        </div>
                                        {location ? (
                                            <p className={`text-xs mt-2 font-semibold flex items-center gap-1 ${location.includes("Invalid") || location.includes("Could not") ? "text-destructive" : "text-energy-green-dark"}`}>
                                                <MapPin className="w-3 h-3" /> {location}
                                            </p>
                                        ) : (
                                            <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wide">Enter your serviceable location in India.</p>
                                        )}
                                    </div>

                                    {/* Bill Slider */}
                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="block text-sm font-bold text-foreground flex items-center gap-2 mt-4">
                                                <Zap className="w-4 h-4 text-energy-yellow-dark" /> Avg. Monthly Bill
                                            </label>
                                            <div className="text-2xl font-light text-energy-green-dark bg-energy-green-dark/5 px-4 py-1.5 rounded-lg border border-energy-green-dark/10">
                                                ₹{bill.toLocaleString("en-IN")}
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            min={500}
                                            max={25000}
                                            step={500}
                                            value={bill}
                                            onChange={e => setBill(Number(e.target.value))}
                                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-energy-green-dark"
                                        />
                                        <div className="flex justify-between text-xs text-muted-foreground font-semibold mt-2">
                                            <span>₹500</span>
                                            <span>₹25,000+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-energy-green-dark/5 border-l-4 border-energy-green-dark p-4 rounded-r-xl">
                                    <p className="text-xs text-energy-green-dark/80 leading-relaxed font-medium pb-2">
                                        Our calculator uses regional solar irradiance data and average tariff benchmarks to provide highly indicative, engineering-grade results.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* RIGHT: RESULTS PANELS */}
                        <div className="lg:col-span-8 space-y-8">

                            {/* Card 1: System Size */}
                            <ScrollReveal delay={100} className="bg-card p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm">
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                                    <div className="w-12 h-12 bg-muted border border-border/50 rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6 text-energy-green-dark" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">Required System Size</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Engineering Assessment</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-energy-green-dark text-white p-6 rounded-2xl relative overflow-hidden">
                                        <div className="absolute right-0 top-0 opacity-10"><Sun className="w-32 h-32 -translate-y-8 translate-x-8" /></div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-energy-yellow mb-2">Recommended Capacity</p>
                                        <div className="text-4xl font-light">{systemSize} <span className="text-xl font-bold">kW</span></div>
                                    </div>
                                    <div className="bg-muted border border-border/50 p-6 rounded-2xl">
                                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Estimated Area</p>
                                        <div className="text-4xl font-light text-energy-green-dark">{areaRequired} <span className="text-xl font-bold">sq. ft.</span></div>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    The system size is rigorously calculated based on your local electricity consumption and optimum generation potential. Rooftop area estimation assumes standard high-efficiency monocrystalline module architecture.
                                </p>
                                <p className="text-xs font-semibold text-energy-green-dark bg-energy-green-dark/5 p-3 rounded-lg border border-energy-green-dark/10 mb-6">
                                    If rooftop space is structurally constrained, our engineering consultants can evaluate alternate configurations (like elevated modules).
                                </p>
                                <Link href="/consultation" className="text-sm font-bold text-secondary flex items-center gap-1 hover:gap-2 transition-all">
                                    Get Technical Guidance <ArrowRight className="w-4 h-4" />
                                </Link>
                            </ScrollReveal>

                            {/* Card 2: Solar Savings */}
                            <ScrollReveal delay={200} className="bg-card p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm">
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                                    <div className="w-12 h-12 bg-energy-yellow/20 border border-energy-yellow/30 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-energy-yellow-dark" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">Your Solar Savings</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Financial Yield</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-muted border border-border/50 p-6 rounded-2xl">
                                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Monthly Savings</p>
                                        <div className="text-4xl font-light text-energy-green-dark"><span className="text-xl font-bold text-muted-foreground">₹</span>{monthlySavings}</div>
                                    </div>
                                    <div className="bg-muted border border-border/50 p-6 rounded-2xl relative overflow-hidden">
                                        <div className="absolute right-0 bottom-0 opacity-5"><Banknote className="w-24 h-24 translate-y-4 translate-x-4" /></div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Annual Savings</p>
                                        <div className="text-4xl font-light text-energy-green-dark"><span className="text-xl font-bold text-muted-foreground">₹</span>{annualSavingsStr}</div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8 items-start">
                                    <div>
                                        <h4 className="font-bold text-sm mb-3">Calculation Parameters:</h4>
                                        <ul className="space-y-2">
                                            {["State-level electricity tariffs", "Irradiance generation potential", "Net metering baseline assumptions", "1% annual panel degradation factor"].map((item, i) => (
                                                <li key={i} className="flex gap-2 text-xs text-muted-foreground items-center">
                                                    <CheckCircle2 className="w-3 h-3 text-secondary shrink-0" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* ESG Impact Panel */}
                                    <div className="bg-[#0f2b1a] p-5 rounded-2xl border border-energy-green-dark text-white">
                                        <h4 className="font-bold text-xs uppercase tracking-widest text-energy-yellow mb-4">ESG Impact Matrix</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="flex items-center gap-2 text-white/70"><CloudLightning className="w-4 h-4 text-white/50" /> CO₂ Mitigated</span>
                                                <span className="font-bold">{co2Offset} Tons</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="flex items-center gap-2 text-white/70"><TreePine className="w-4 h-4 text-white/50" /> Trees Planted</span>
                                                <span className="font-bold">{treesPlanted}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Card 3: Investment Overview */}
                            <ScrollReveal delay={300} className="bg-energy-green-dark text-white p-8 lg:p-10 rounded-3xl shadow-xl border border-white/5 relative overflow-hidden isolate">
                                <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                                        <IndianRupee className="w-6 h-6 text-energy-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Your Investment Overview</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-white/60">CAPEX Breakdown</p>
                                    </div>
                                </div>

                                <div className="bg-black/30 p-6 rounded-2xl border border-white/10 mb-8 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                                        <span className="text-sm text-white/80 font-semibold">Total Estimated System Cost</span>
                                        <span className="text-xl font-bold">₹{costStr}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                                        <span className="text-sm text-white/80 font-semibold">Projected Subsidy Adjustment</span>
                                        <span className="text-xl font-bold text-energy-yellow">- ₹{subsidyStr}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm uppercase tracking-widest font-bold text-secondary">Net System Cost</span>
                                        <span className="text-3xl font-light text-white">₹{netCostStr}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Lifetime Savings (25 Yrs)</p>
                                        <p className="text-lg font-bold text-secondary">₹{lifetimeSavingsStr}</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Estimated ROI</p>
                                        <p className="text-lg font-bold text-energy-yellow">{roiStr}</p>
                                    </div>
                                </div>

                                <p className="text-[10px] text-white/50 leading-relaxed font-medium">
                                    *DISCLAIMER: Figures shown are strictly indicative estimates. Final financial structuring depends entirely on rigorous site inspection, shadow analysis, structural load feasibility, inverter architectural configuration, and precise state electricity regulations.
                                </p>
                            </ScrollReveal>

                            {/* Card 4: ₹0 Downpayment Hook */}
                            <ScrollReveal delay={400} className="bg-gradient-to-br from-card to-muted p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-energy-yellow/20 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Invest in Solar with ₹0 Down Payment</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                                    We offer structurally integrated financing solutions to enable immediate solar adoption without any upfront capital expenditure. Let your operational savings fund your solar transition.
                                </p>

                                <div className="bg-card border border-border/50 rounded-2xl p-6 mb-8 max-w-lg">
                                    <div className="bg-muted p-6 rounded-xl flex flex-col gap-2 border border-border/50 text-center">
                                        <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Estimated Solar Electricity Bill</span>
                                        <span className="text-4xl font-light text-energy-green-dark font-mono mt-2">
                                            ₹{Number(monthlySolarBillStr).toLocaleString("en-IN")} <span className="text-base font-bold text-muted-foreground">/ mo</span>
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs text-muted-foreground mb-8 border-l-2 border-secondary pl-3 font-medium">
                                    Our OPEX (Zero CAPEX) model ensures you can install a commercial-grade tier-1 solar system with ₹0 upfront cost. Instead of an EMI or loan, you simply pay a highly reduced monthly bill exclusively for the solar electricity generated, structurally lowering your overall energy cost constraints.
                                </p>

                                <Link href="/consultation" className="inline-flex items-center justify-center rounded-full bg-energy-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-energy-green-dark transition-all hover:bg-energy-green-dark hover:text-white shadow-lg">
                                    Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* WHY USE THIS CALCULATOR */}
                <section className="bg-[#0f2b1a] text-white py-20 lg:py-28 relative isolate overflow-hidden border-y border-white/5">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <h2 className="mb-6 text-3xl font-light tracking-tight text-white md:text-5xl">
                                    Why Use the Greenveyil Calculator?
                                </h2>
                                <p className="text-white/70 text-lg leading-relaxed mb-8">
                                    Our proprietary calculator integrates direct Indian solar performance benchmarks, regional tariff mapping constraints, and realistic financing assumptions to deliver strictly structured projections. Every single mathematical result is backed by engineering logic — never guesswork.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Estimate Solar Savings", desc: "Understand core monthly and 25-year structural savings." },
                                        { title: "Determine System Size", desc: "Acquire accurate capacity load recommendations." },
                                        { title: "Calculate Investment & ROI", desc: "Achieve total cost transparency and financial visibility." },
                                        { title: "Assess Rooftop Requirements", desc: "Logically compute physical spatial needs." },
                                        { title: "Evaluate Financing Frameworks", desc: "Compare direct CAPEX versus OPEX (Zero Investment) models." }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/10 last:border-0 last:pb-0">
                                            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                                                <p className="text-white/60 text-xs">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={200} className="relative hidden lg:block h-[500px]">
                                <Image src="/images/section-solar.jpg" alt="Solar Analytics" fill className="object-cover rounded-3xl opacity-40 mix-blend-luminosity border border-white/10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b1a] via-transparent to-transparent z-10"></div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="bg-background py-20 lg:py-28 text-center relative overflow-hidden isolate">
                    <div className="mx-auto max-w-5xl px-6 lg:px-10">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold tracking-tight text-energy-green-dark md:text-5xl mb-16">
                                How the Calculation Engine Works
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-border/60 -z-10"></div>

                            {[
                                { step: "01", t: "Enter Consumption Data", d: "Instantly input your pincode alongside your monthly grid electricity bill requirement." },
                                { step: "02", t: "System Logic Calculation", d: "We accurately calculate your optimal system size utilizing annual consumption logs and regional sunlight constraints." },
                                { step: "03", t: "Instant Scenario Output", d: "Deep financial savings, investment demands, and structural financing scenarios generate instantaneously." }
                            ].map((s, i) => (
                                <ScrollReveal key={i} delay={i * 100} className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm relative pt-12">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-energy-green-dark text-white font-mono font-bold text-lg rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                                        {s.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground mb-3">{s.t}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
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
                                Ready to Transition to Solar?
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground font-medium leading-relaxed">
                                Unlock massive long-term financial savings and total energy independence with a heavily stabilized, structured solar framework designed specifically for your property.
                            </p>

                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-full bg-energy-green-dark px-10 py-5 text-sm font-semibold text-energy-yellow transition-all hover:bg-energy-green-dark/90 hover:scale-[1.02] shadow-xl hover:shadow-2xl group border border-transparent"
                            >
                                Schedule a Detailed Solar Assessment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    )
}
