import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function SolarSolutions() {
    const solutions = [
        {
            title: "Homes",
            image: "/images/rooftop.jpg",
        },
        {
            title: "Housing Society",
            image: "/images/housing.jpg",
        },
        {
            title: "Commercial",
            image: "/images/Commercial.jpg",
        },
    ]

    return (
        <section className="w-full flex flex-col">
            {/* Top section with gradient background matching site theme */}
            <div className="w-full bg-gradient-to-b from-energy-green-dark to-energy-green py-16 px-6">
                <div className="mx-auto max-w-[1400px]">
                    <h2 className="mb-12 text-center text-3xl font-bold text-primary-foreground md:text-5xl lg:text-[2.5rem]">
                        Our solar solutions
                    </h2>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-5xl mx-auto">
                        {solutions.map((solution) => (
                            <div key={solution.title} className="flex flex-col items-center group">
                                <div className="relative h-[200px] w-full max-w-[320px] overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                                    <Image
                                        src={solution.image}
                                        alt={solution.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-primary-foreground">
                                    {solution.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom section with light background */}
            <div className="w-full bg-energy-off-white py-12 px-6 flex flex-col items-center justify-center text-center">
                <p className="mb-6 text-lg font-medium text-foreground">
                    Save electricity bills by switching to solar
                </p>
                <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 rounded-full bg-energy-green-dark px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-energy-green hover:shadow-md"
                >
                    Book a Free Consultation
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}
