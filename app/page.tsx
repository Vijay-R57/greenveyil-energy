import { SiteHeader } from "@/components/site-header"
import { HeroSlider } from "@/components/hero-slider"
import { AboutSection, SplitSections } from "@/components/content-sections"
import { StatisticsSection } from "@/components/statistics-section"
import { WorldMapSection } from "@/components/world-map-section"
import { SolarSolutions } from "@/components/solar-solutions"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSlider />
        <AboutSection />
        <SplitSections />
        <StatisticsSection />
        <WorldMapSection />
        <SolarSolutions />
      </main>
      <SiteFooter />
    </>
  )
}
