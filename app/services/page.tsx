import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Zap, Shield, Droplet, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Lanora Electroplaters | Chrome, Nickel & Zinc Plating",
  description:
    "Explore our comprehensive electroplating services including chrome plating, nickel plating, zinc coating, and custom solutions for automotive and manufacturing.",
  keywords: "electroplating services, chrome plating, nickel plating, zinc coating, custom plating solutions",
}

export default function Services() {
  const services = [
    {
      id: "chrome",
      icon: Zap,
      title: "Chrome Plating",
      description: "High-gloss chrome finishes for automotive and decorative applications",
      features: [
        "Bright chrome for decorative finishes",
        "Hard chrome for wear resistance",
        "Micro-cracked chrome for durability",
        "Thickness range: 0.5 - 50 microns",
        "Superior corrosion resistance",
        "Excellent aesthetic appeal",
      ],
      applications: "Automotive trim, bumpers, decorative hardware, industrial components",
    },
    {
      id: "nickel",
      icon: Shield,
      title: "Nickel Plating",
      description: "Corrosion-resistant nickel coatings for industrial components",
      features: [
        "Watts nickel plating process",
        "Sulfamate nickel for high-stress parts",
        "Excellent adhesion and coverage",
        "Uniform thickness distribution",
        "Enhanced corrosion protection",
        "Suitable for electronics and machinery",
      ],
      applications: "Precision parts, electronics, machinery components, fasteners",
    },
    {
      id: "zinc",
      icon: Droplet,
      title: "Zinc Coating",
      description: "Protective zinc finishes for steel components",
      features: [
        "Acid zinc plating",
        "Alkaline zinc plating",
        "Zinc-nickel alloy coating",
        "Thickness: 5 - 25 microns",
        "Long-term corrosion protection",
        "Cost-effective solution",
      ],
      applications: "Steel fasteners, automotive parts, industrial hardware, structural components",
    },
    {
      id: "custom",
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored electroplating solutions for specialized requirements",
      features: [
        "Multi-layer plating systems",
        "Alloy plating combinations",
        "Specialized surface treatments",
        "Custom thickness specifications",
        "Unique finish requirements",
        "Industry-specific solutions",
      ],
      applications: "Aerospace components, medical devices, specialized industrial parts",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Comprehensive electroplating solutions designed to meet the highest industry standards and your specific
            requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-8 h-8 text-accent" />
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-card rounded-lg p-4 border border-border mb-6">
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Applications</p>
                        <p className="text-foreground">{service.applications}</p>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        Request Quote
                      </Link>
                    </div>
                    <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                      <img
                        src={`/ceholder-svg-key-service.jpg?key=service${index}`}
                        alt={service.title}
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Inspection", desc: "Initial quality assessment" },
              { step: "2", title: "Cleaning", desc: "Surface preparation" },
              { step: "3", title: "Plating", desc: "Electroplating process" },
              { step: "4", title: "Testing", desc: "Quality verification" },
              { step: "5", title: "Delivery", desc: "Final packaging" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Testing Standards",
                items: ["Salt spray testing", "Thickness measurement", "Adhesion testing", "Surface inspection"],
              },
              {
                title: "Compliance",
                items: ["ISO 9001:2015", "IATF 16949:2016", "RoHS Compliant", "REACH Compliant"],
              },
              {
                title: "Documentation",
                items: ["Test certificates", "Process records", "Batch tracking", "Quality reports"],
              },
            ].map((qa, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">{qa.title}</h3>
                <ul className="space-y-2">
                  {qa.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact our team to discuss your specific electroplating requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
