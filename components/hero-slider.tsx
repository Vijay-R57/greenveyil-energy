"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

const SLIDES = [
  {
    image: "/images/hero-1.jpg",
    label: "Solar Rooftop",
    heading: "Powering India\nwith solar energy",
    description:
      "Leading the transition to clean energy independence through residential and commercial solar rooftop installations across India.",
    cta: { label: "Explore Rooftop Solar", href: "/services" },
  },
  {
    image: "/images/hero-2.jpg",
    label: "Solar EPC",
    heading: "End-to-end solar\nEPC solutions",
    description:
      "From design and engineering to procurement and installation, our turnkey solar EPC projects deliver reliable performance for decades.",
    cta: { label: "Our EPC Services", href: "/services/operations-maintenance" },
  },
  {
    image: "/images/hero-3.jpg",
    label: "Ground Mounted",
    heading: "Industrial-scale\nsolar plants",
    description:
      "Large-scale ground mounted solar plants and open-access projects powering factories, warehouses, and commercial establishments.",
    cta: { label: "View Projects", href: "/portfolio" },
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const parallaxRef = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax scroll handler
  useEffect(() => {
    const onScroll = () => {
      parallaxRef.current = window.scrollY * 0.3
      if (sectionRef.current) {
        const images = sectionRef.current.querySelectorAll<HTMLElement>("[data-parallax]")
        images.forEach((img) => {
          img.style.transform = `scale(1.1) translateY(${parallaxRef.current}px)`
        })
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 1200)
    },
    [current, isTransitioning]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [current, goTo])

  const nextSlide = SLIDES[(current + 1) % SLIDES.length]

  return (
    <section ref={sectionRef} className="relative flex flex-col min-h-[100svh] w-full overflow-hidden" aria-label="Hero">
      {/* Background slides with parallax */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className={`hero-slide absolute inset-0 ${i === current ? "active" : ""}`}
          aria-hidden={i !== current}
        >
          <div data-parallax className="absolute inset-0 scale-110 will-change-transform">
            <Image
              src={slide.image}
              alt={slide.label}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Green gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 45, 30, 0.85) 0%, rgba(25, 75, 45, 0.65) 50%, rgba(15, 45, 30, 0.50) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-[1400px] flex-col justify-center px-6 pt-28 pb-12 sm:justify-end sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:pb-24">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          <p
            key={`label-${current}`}
            className="animate-fade-in-up mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow"
          >
            {SLIDES[current].label}
          </p>
          <h1
            key={`heading-${current}`}
            className="animate-fade-in-up text-5xl font-light leading-tight tracking-tight text-primary-foreground whitespace-pre-line md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "100ms" }}
          >
            {SLIDES[current].heading}
          </h1>
          <p
            key={`desc-${current}`}
            className="animate-fade-in-up mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70 md:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            {SLIDES[current].description}
          </p>
          <a
            key={`cta-${current}`}
            href={SLIDES[current].cta.href}
            className="animate-fade-in-up mt-8 inline-flex items-center gap-2 rounded-sm bg-energy-yellow px-6 py-3 text-sm font-semibold text-energy-green-dark transition-all duration-200 hover:bg-energy-yellow/80"
            style={{ animationDelay: "300ms" }}
          >
            {SLIDES[current].cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-0.5 transition-all duration-500 ${i === current
                  ? "w-10 bg-energy-yellow"
                  : "w-5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="ml-2 text-xs font-medium tabular-nums text-primary-foreground/50">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right side "Next up" card */}
        <button
          onClick={() => goTo((current + 1) % SLIDES.length)}
          className="mt-10 hidden w-64 rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/25 hover:bg-primary-foreground/10 lg:block"
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/40">
            Next up
          </p>
          <p className="text-lg font-medium leading-snug text-primary-foreground">
            {nextSlide.label}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/50">
            {nextSlide.description.slice(0, 60)}...
          </p>
          <ArrowRight className="mt-3 h-4 w-4 text-energy-yellow" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-primary-foreground/40 transition-colors hover:text-primary-foreground/60"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" style={{ animationDuration: "2s" }} />
        </a>
      </div>
    </section>
  )
}
