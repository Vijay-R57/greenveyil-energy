"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"

// ─── Menu-type flag system ───────────────────────────────────────────────────
// Each top-level item has a `type` flag that controls rendering:
//   "link"      → simple anchor, no dropdown
//   "dropdown"  → single-column hover dropdown
//   "megamenu"  → multi-column grouped mega menu

type MenuLink = { label: string; href: string }
type MegaGroup = { title: string; href?: string; links: MenuLink[] }

type NavItem =
  | { label: string; href: string; type: "link" }
  | { label: string; href: string; type: "dropdown"; links: MenuLink[] }
  | {
    label: string
    href: string
    type: "megamenu"
    groups: MegaGroup[]
    featured?: { label: string; description: string; href: string }
  }

const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "#about",
    type: "dropdown",
    links: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Leadership & Partnership", href: "/about/leadership-partnerships" },
      { label: "Our History", href: "/about/our-history" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "ESG & Sustainability", href: "/about/esg-sustainability" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    type: "megamenu",
    groups: [
      {
        title: "Residential Solar",
        href: "/services/residential",
        links: [
          { label: "Rooftop Solutions", href: "/services/rooftop-group-captive#rooftop" },
          { label: "Group Captive", href: "/services/rooftop-group-captive#group-captive" },
        ],
      },
      {
        title: "Commercial Solar",
        href: "/services/commercial",
        links: [
          { label: "Rooftop Solutions", href: "/services/rooftop-group-captive#rooftop" },
          { label: "Group Captive", href: "/services/rooftop-group-captive#group-captive" },
        ],
      },
      {
        title: "Housing Society Solar",
        href: "/services/housing-society",
        links: [
          { label: "Rooftop Solutions", href: "/services/rooftop-group-captive#rooftop" },
          { label: "Group Captive", href: "/services/rooftop-group-captive#group-captive" },
        ],
      },
      {
        title: "Operations & Maintenance",
        href: "/services/operations-maintenance",
        links: [
          { label: "O&M Contracts", href: "/services/operations-maintenance" },
          { label: "Performance Monitoring", href: "/services/operations-maintenance" },
          { label: "Preventive Maintenance", href: "/services/operations-maintenance" },
        ],
      },
    ],
    featured: {
      label: "Free Solar Assessment",
      description: "Calculate your savings with our complimentary site evaluation",
      href: "/consultation",
    },
  },
  {
    label: "Solar Solutions",
    href: "/solar-solutions",
    type: "dropdown",
    links: [
      { label: "Monocrystalline Panels", href: "/solar-solutions#monocrystalline" },
      { label: "Polycrystalline Panels", href: "/solar-solutions#polycrystalline" },
      { label: "Thin Film Technology", href: "/solar-solutions#thin-film" },
      { label: "Bifacial Modules", href: "/solar-solutions#bifacial" },
      { label: "Solar Inverters", href: "/solar-solutions#inverters" },
      { label: "Mounting Systems", href: "/solar-solutions#mounting" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    type: "dropdown",
    links: [
      { label: "Portfolio Overview", href: "/portfolio" },
      { label: "Geographies", href: "/portfolio/geographies" },
    ],
  },
  {
    label: "Projects",
    href: "#",
    type: "link",
  },
  {
    label: "News & Insights",
    href: "#",
    type: "link",
  },
  {
    label: "Contact",
    href: "#contact",
    type: "link",
  },
  {
    label: "More",
    href: "#",
    type: "dropdown",
    links: [
      { label: "Solar Calculator", href: "/solar-calculator" },
      { label: "Webinars", href: "/webinars" },
      { label: "Careers", href: "/careers" },
      { label: "Internships", href: "/careers#internships" },
    ],
  },
]

// ─── Header Component ────────────────────────────────────────────────────────

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMega(label)
  }, [])

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 150)
  }, [])

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label))
  }

  const hasSubmenu = (item: NavItem) => item.type !== "link"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen
        ? "bg-energy-green-dark/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1 shadow-sm overflow-hidden">
            <img
              src="/logo.png"
              alt="Greenveyil Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight text-primary-foreground">
            Greenveyil
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => hasSubmenu(item) && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
                >
                  {item.label}
                  {hasSubmenu(item) && (
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${activeMega === item.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
                >
                  {item.label}
                  {hasSubmenu(item) && (
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${activeMega === item.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>
              )}

              {/* Dropdown (single column) */}
              {item.type === "dropdown" && (
                <div
                  className={`absolute left-0 top-full w-56 pt-2 ${activeMega === item.label ? "mega-menu-active" : "mega-menu-enter"
                    }`}
                >
                  <div className="rounded-sm border border-border/20 bg-card py-2 shadow-xl">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="block px-5 py-2.5 text-sm text-card-foreground transition-colors duration-200 hover:bg-muted hover:text-secondary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Mega menu (multi-column grouped) */}
              {item.type === "megamenu" && (
                <div
                  className={`absolute left-1/2 top-full w-[900px] -translate-x-1/2 pt-2 ${activeMega === item.label ? "mega-menu-active" : "mega-menu-enter"
                    }`}
                >
                  <div className="rounded-sm border border-border/20 bg-card p-6 shadow-xl">
                    <div className="grid grid-cols-4 gap-6">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          {group.href ? (
                            <Link href={group.href} className="block mb-3">
                              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-energy-green-dark transition-colors duration-200">
                                {group.title}
                              </h4>
                            </Link>
                          ) : (
                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                              {group.title}
                            </h4>
                          )}
                          <ul className="flex flex-col gap-2">
                            {group.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-card-foreground transition-colors duration-200 hover:text-secondary"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {item.featured && (
                      <div className="mt-6 border-t border-border pt-4">
                        <Link
                          href={item.featured.href}
                          className="group flex items-center justify-between"
                        >
                          <div>
                            <p className="text-sm font-semibold text-card-foreground">
                              {item.featured.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.featured.description}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-secondary transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/consultation"
          className="hidden shrink-0 rounded-sm bg-energy-yellow px-5 py-2.5 text-sm font-semibold text-energy-green-dark transition-all duration-200 hover:bg-energy-yellow/80 lg:inline-flex"
        >
          Sign up for Innovation of Solar
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu — accordion style */}
      {mobileOpen && (
        <div className="animate-slide-down border-t border-primary-foreground/10 bg-energy-green-dark/95 backdrop-blur-md lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="mx-auto max-w-[1400px] px-6 py-6" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.type === "link" ? (
                    item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        className="block py-3 text-base font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 text-base font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleMobileAccordion(item.label)}
                        className="flex w-full items-center justify-between py-3 text-base font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {mobileExpanded === item.label && (
                        <div className="animate-slide-down pb-3 pl-4">
                          {item.type === "dropdown" &&
                            item.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="block py-2 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ))}

                          {item.type === "megamenu" &&
                            item.groups.map((group) => (
                              <div key={group.title} className="mb-3">
                                {group.href ? (
                                  <Link
                                    href={group.href}
                                    className="block mb-1"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <p className="text-xs font-semibold uppercase tracking-widest text-energy-yellow transition-colors hover:text-energy-yellow/80">
                                      {group.title}
                                    </p>
                                  </Link>
                                ) : (
                                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-energy-yellow/70">
                                    {group.title}
                                  </p>
                                )}
                                {group.links.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block py-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li className="pt-4 border-t border-primary-foreground/10 mt-2">
                <Link
                  href="/consultation"
                  className="inline-flex w-full justify-center rounded-sm bg-energy-yellow px-5 py-3 text-sm font-semibold text-energy-green-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign up for free electricity
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
