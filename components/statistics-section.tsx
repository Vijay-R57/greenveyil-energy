"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    let frame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(Math.floor(eased * end))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [end, duration, start])

  return value
}

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number
  suffix: string
  label: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const count = useCountUp(value, 2000, visible)

  return (
    <div ref={ref} className={`text-center transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <p className="text-5xl font-light tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
        {count}
        <span className="text-energy-yellow">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
        {label}
      </p>
    </div>
  )
}

const STATS = [
  { value: 10, suffix: " MW", label: "Installed Capacity" },
  { value: 8, suffix: "+", label: "States Across India" },
  { value: 500, suffix: "+", label: "Installations" },
  { value: 50, suffix: "%", label: "Bill Savings" },
]

export function StatisticsSection() {
  return (
    <section className="bg-energy-green py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ScrollReveal>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-energy-yellow">
            Our Impact
          </p>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-light leading-tight tracking-tight text-primary-foreground md:text-5xl">
            Delivering solar at scale across India
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 150}
            />
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 flex justify-center">
            <a
              href="#"
              className="rounded-sm border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
            >
              View Our Projects
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
