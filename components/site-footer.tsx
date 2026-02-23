import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

const FOOTER_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Projects", href: "#" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-energy-green-dark py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* CTA Banner */}
        <ScrollReveal>
          <div className="mb-16 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8 lg:flex lg:items-center lg:justify-between lg:p-12">
            <div>
              <h3 className="text-2xl font-light tracking-tight text-primary-foreground md:text-3xl">
                Building a solar-powered India together
              </h3>
              <p className="mt-2 text-base text-primary-foreground/60">
                Get in touch to learn about our solar installation services and
                no-cost solar models.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex rounded-sm bg-energy-yellow px-6 py-3 text-sm font-semibold text-energy-green-dark transition-all duration-200 hover:bg-energy-yellow/80 lg:mt-0"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>

        {/* Footer content */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Brand column */}
          <div className="flex-1 lg:max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-sm overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Greenveyil Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-base font-semibold text-primary-foreground">
                Greenveyil
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/40">
              Greenveyil Pvt Ltd
              <br />
              104, Aduru, Jigani Anekal Road
              <br />
              Bangalore Urban District
              <br />
              Karnataka 560068
              <br />
              India
            </p>
            <p className="mt-4 text-sm text-primary-foreground/40">
              +91 97315 17336
              <br />
              Ram@greenveyil.com
            </p>
          </div>

          <div className="flex-1 lg:max-w-xs">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors duration-200 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 lg:flex-row">
          <div className="flex flex-wrap items-center gap-4 text-xs text-primary-foreground/30">
            <Link href="#" className="hover:text-primary-foreground/50">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground/50">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground/50">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-primary-foreground/50">
              Whistleblower
            </Link>
          </div>
          <p className="text-xs text-primary-foreground/30">
            &copy; 2026 Greenveyil Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
