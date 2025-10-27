import Link from "next/link"
import { ArrowRight, Zap, Shield, Cog } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Premium Electroplating Solutions for Industry
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Lanora Electroplaters delivers high-quality electroplating services trusted by leading automotive and
                manufacturing companies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/industrial-electroplating-equipment.jpg"
                alt="Industrial electroplating equipment"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electroplating solutions tailored to your industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Chrome Plating",
                description:
                  "High-gloss chrome finishes for automotive and decorative applications with superior durability.",
              },
              {
                icon: Shield,
                title: "Nickel Plating",
                description: "Corrosion-resistant nickel coatings for industrial components and precision parts.",
              },
              {
                icon: Cog,
                title: "Zinc Coating",
                description: "Protective zinc finishes for steel components ensuring long-term corrosion protection.",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/manufacturing-facility-with-workers.jpg"
                alt="Modern manufacturing facility"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Lanora?</h2>
              <ul className="space-y-4">
                {[
                  "ISO certified quality standards and processes",
                  "State-of-the-art automated equipment",
                  "Experienced team with 20+ years expertise",
                  "Fast turnaround times without compromising quality",
                  "Competitive pricing for bulk orders",
                  "Dedicated customer support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-sm font-bold">✓</span>
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact our team today to discuss your electroplating needs and get a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Enquiry <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
