"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

const TABS = ["Residential", "Housing Society", "Commercial"] as const
type TabType = (typeof TABS)[number]

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Residential")
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreed || isLoading) return

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      serviceType: activeTab,
      fullName: formData.get("fullName"),
      companyName: formData.get("companyName"),
      city: formData.get("city"),
      pinCode: formData.get("pinCode"),
      whatsapp: formData.get("whatsapp"),
      electricityBill: formData.get("electricityBill"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const errorData = await response.json()
        alert(`Failed to send: ${errorData.errorDetail || "Server error"}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an issue submitting your request. Please check your internet connection.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row">
      {/* Left — large solar image */}
      <div className="relative hidden w-full lg:block lg:w-[55%]">
        <Image
          src="/images/consultation-solar.jpg"
          alt="Solar panel installation on a residential rooftop"
          fill
          priority
          className="object-cover"
          sizes="55vw"
        />
        {/* Green overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 45, 30, 0.5) 0%, rgba(15, 45, 30, 0.75) 100%)",
          }}
        />
        {/* Overlay content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-md">
            <h1 className="text-4xl font-light leading-tight tracking-tight text-primary-foreground lg:text-5xl">
              Switch to solar.
              <br />
              <span className="text-energy-yellow">Save from day one.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/60">
              Sign up for a free consultation and discover how much you can save
              with our customized solar energy solutions. No commitments, no hidden fees.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                "Free site assessment & custom design",
                "Up to 50% savings on electricity bills",
                "25+ year performance warranty",
                "Expert installation within 2 weeks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-primary-foreground/50"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-yellow" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right — form card */}
      <div className="flex w-full flex-col items-center justify-center bg-energy-off-white px-6 py-12 lg:w-[45%] lg:px-12 lg:py-16">
        {/* Mobile back link */}
        <div className="mb-6 w-full max-w-md lg:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-md">
          {/* Mobile heading */}
          <div className="mb-8 lg:hidden">
            <h1 className="text-2xl font-light leading-tight tracking-tight text-foreground">
              Switch to solar.{" "}
              <span className="text-secondary">Save from day one.</span>
            </h1>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center rounded-xl bg-card p-10 text-center shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-energy-yellow/20">
                <CheckCircle2 className="h-8 w-8 text-energy-yellow-dark" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Thank you!
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Our solar experts will reach out to you within 24 hours on
                WhatsApp to discuss your personalized plan.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-secondary"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <div className="rounded-xl bg-card p-8 shadow-lg lg:p-10">
              <h2 className="text-lg font-semibold text-foreground">
                Get your free solar quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and our team will design a custom plan.
              </p>

              {/* Tabs */}
              <div className="mt-6 flex rounded-lg bg-muted p-1">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200 ${activeTab === tab
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>

                {activeTab !== "Residential" && (
                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      {activeTab === "Housing Society"
                        ? "Society Name"
                        : "Company Name"}
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder={
                        activeTab === "Housing Society"
                          ? "Enter society name"
                          : "Enter company name"
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      placeholder="Your city"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pinCode"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Pin Code
                    </label>
                    <input
                      id="pinCode"
                      name="pinCode"
                      type="text"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Pin code"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="electricityBill"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Average Monthly Electricity Bill
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      INR
                    </span>
                    <input
                      id="electricityBill"
                      name="electricityBill"
                      type="text"
                      required
                      inputMode="numeric"
                      placeholder="e.g. 5,000"
                      className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                </div>

                {/* Terms checkbox */}
                <label className="flex items-start gap-3 mt-2 cursor-pointer">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-secondary accent-secondary"
                  />
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    I agree to the{" "}
                    <Link href="#" className="underline hover:text-foreground">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline hover:text-foreground">
                      Privacy Policy
                    </Link>
                    . Greenveyil may contact me via WhatsApp or phone.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed || isLoading}
                  className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Details"
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-muted-foreground/60">
                Your data is secure and will never be shared with third parties.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
