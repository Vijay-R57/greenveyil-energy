import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            About Greenveyil
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
            Powering India with clean, affordable solar energy
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Greenveyil Pvt Ltd is a leading Indian solar EPC company
            focused exclusively on solar power. We design, install, and maintain
            solar rooftop systems for homes, housing societies, and commercial
            establishments. Headquartered in Chennai, we operate across 8 states
            and have helped thousands of customers achieve energy independence.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

const SPLIT_SECTIONS = [
  {
    image: "/images/section-wind.jpg",
    label: "Rooftop Solar",
    heading: "India's trusted solar rooftop partner",
    text: "From individual homes to large housing societies, Greenveyil designs and installs customized rooftop solar systems that reduce electricity bills by up to 50%. With DISCOM net metering approvals and state subsidies, going solar has never been easier or more affordable.",
    cta: { label: "Residential Solar", href: "#" },
    reverse: false,
  },
  {
    image: "/images/section-solar.jpg",
    label: "Commercial & Industrial",
    heading: "Solar EPC for businesses and factories",
    text: "Our commercial and industrial solar EPC division has installed over 10 MW of capacity across factories, warehouses, IT parks, and institutional buildings. We offer both CAPEX and OPEX (PPA) models so businesses can switch to solar with zero upfront investment.",
    cta: { label: "Commercial Solutions", href: "#" },
    reverse: true,
  },
]

export function SplitSections() {
  return (
    <div>
      {SPLIT_SECTIONS.map((section) => (
        <section
          key={section.label}
          className="bg-background py-16 lg:py-0"
        >
          <div
            className={`mx-auto flex max-w-[1400px] flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
          >
            {/* Image 50% */}
            <ScrollReveal className="relative min-h-[320px] w-full lg:min-h-[600px] lg:w-1/2">
              <Image
                src={section.image}
                alt={section.label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>

            {/* Text 50% */}
            <div className="flex w-full flex-col justify-center px-6 py-10 lg:w-1/2 lg:px-16 lg:py-20">
              <ScrollReveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                  {section.label}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h3 className="text-2xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
                  {section.heading}
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {section.text}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <a
                  href={section.cta.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors duration-200 hover:text-primary"
                >
                  {section.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
