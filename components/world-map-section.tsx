"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import IndiaMap from "@svg-maps/india"

const REGIONS = [
  {
    name: "All States",
    projects: null,
  },
  {
    name: "South India",
    projects: [
      { state: "Tamil Nadu", capacity: "4 MW", type: "Rooftop & Ground Mounted" },
      { state: "Karnataka", capacity: "2 MW", type: "Commercial & Industrial" },
      { state: "Kerala", capacity: "2 MW", type: "Residential Rooftop" },
      { state: "Telangana", capacity: "1 MW", type: "Industrial EPC" },
      { state: "Andhra Pradesh", capacity: "5 MW", type: "Ground Mounted Solar" },
    ],
  },
  {
    name: "West India",
    projects: [
      { state: "Maharashtra", capacity: "2 MW", type: "Commercial Rooftop" },
      { state: "Gujarat", capacity: "2 MW", type: "Industrial & Ground Mounted" },
    ],
  },
  {
    name: "North India",
    projects: [
      { state: "Rajasthan", capacity: "1 MW", type: "Ground Mounted Solar" },
    ],
  },
]

// Accurate SVG coordinates for state markers from 612x696 bounding box
const STATE_MARKERS: Record<string, { cx: number; cy: number }> = {
  "Andhra Pradesh": { cx: 263, cy: 500 },
  "Gujarat": { cx: 66, cy: 355 },
  "Karnataka": { cx: 171, cy: 519 },
  "Kerala": { cx: 166, cy: 615 },
  "Maharashtra": { cx: 180, cy: 435 },
  "Rajasthan": { cx: 119, cy: 257 },
  "Tamil Nadu": { cx: 211, cy: 609 },
  "Telangana": { cx: 237, cy: 457 }
}

export function WorldMapSection() {
  const [selectedRegion, setSelectedRegion] = useState("All States")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  const activeRegion = REGIONS.find((r) => r.name === selectedRegion)
  const allProjects = REGIONS.filter((r) => r.projects).flatMap(
    (r) => r.projects?.map((p) => ({ ...p, region: r.name })) ?? []
  )
  const displayProjects =
    selectedRegion === "All States"
      ? allProjects
      : activeRegion?.projects?.map((p) => ({ ...p, region: activeRegion.name })) ?? []

  // Get active states for marker highlighting
  const activeStates = new Set(displayProjects.map((p) => p.state))

  return (
    <section className="bg-energy-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Our Presence
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
                Where we operate across India
              </h2>
            </ScrollReveal>
          </div>

          {/* Region dropdown */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary"
              >
                <MapPin className="h-4 w-4 text-secondary" />
                {selectedRegion}
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {dropdownOpen && (
                <div className="animate-slide-down absolute right-0 top-full z-20 mt-1 w-52 rounded-sm border border-border bg-card py-1 shadow-lg">
                  {REGIONS.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => {
                        setSelectedRegion(region.name)
                        setDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted ${selectedRegion === region.name
                        ? "font-semibold text-secondary"
                        : "text-foreground"
                        }`}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* India Map SVG */}
        <ScrollReveal delay={200}>
          <div className="relative mt-12 rounded-sm border border-border bg-card p-6 lg:p-10">
            <div className="relative mx-auto max-w-lg">
              <svg
                viewBox="0 0 612 696"
                className="w-full h-auto drop-shadow-sm"
                aria-label="Map of India showing Greenveyil operational states"
                role="img"
              >
                {/* Detailed India state paths */}
                {IndiaMap.locations.map((loc: any) => {
                  const isActive = activeStates.has(loc.name) || hoveredState === loc.name
                  return (
                    <path
                      key={loc.id}
                      id={loc.id}
                      name={loc.name}
                      d={loc.path}
                      className={`transition-colors duration-300 stroke-muted-foreground/30 ${isActive ? "fill-secondary/25 stroke-secondary/50" : "fill-muted/10 hover:fill-muted/20"
                        }`}
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  )
                })}

                {/* State markers */}
                {Object.entries(STATE_MARKERS).map(([state, pos]) => {
                  const isMarkerActive = activeStates.has(state) || hoveredState === state
                  return (
                    <g key={state}>
                      {isMarkerActive && (
                        <>
                          <circle
                            cx={pos.cx} cy={pos.cy} r="12"
                            className="fill-energy-yellow/30"
                          />
                          <circle
                            cx={pos.cx} cy={pos.cy} r="6"
                            className="fill-energy-yellow animate-pulse"
                          />
                        </>
                      )}
                      {!isMarkerActive && (
                        <circle
                          cx={pos.cx} cy={pos.cy} r="4"
                          className="fill-muted-foreground/40"
                        />
                      )}
                      <text
                        x={pos.cx + 14}
                        y={pos.cy + 5}
                        className={`text-[12px] font-medium transition-colors ${isMarkerActive
                          ? "fill-foreground"
                          : "fill-muted-foreground/70"
                          }`}
                      >
                        {state}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Project list */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {displayProjects.map((project, i) => (
                <ScrollReveal
                  key={`${project.region}-${project.state}`}
                  delay={i * 80}
                  variant="reveal-slide-up"
                >
                  <div
                    className="hover-lift flex items-start gap-3 rounded-sm border border-border p-4 transition-all hover:border-energy-yellow/50 hover:bg-muted/30 hover:scale-[1.02] cursor-default"
                    onMouseEnter={() => setHoveredState(project.state)}
                    onMouseLeave={() => setHoveredState(null)}
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-semibold text-foreground">{project.state}</p>
                        <span className="text-xs font-bold bg-energy-green-dark/10 text-energy-green-dark px-2 py-0.5 rounded-full">{project.capacity}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {project.type}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
