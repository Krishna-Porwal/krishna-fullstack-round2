import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Droplets, Gauge, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Facilities | Lanora Electroplaters | State-of-the-Art Equipment",
  description:
    "Explore our modern manufacturing facilities with automated electroplating equipment, quality control systems, and environmental protection measures.",
  keywords: "manufacturing facilities, electroplating equipment, automation, quality control",
}

export default function Facilities() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            State-of-the-art manufacturing setup with advanced automation and quality control systems.
          </p>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Manufacturing Setup</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our facility spans 50,000 square feet of dedicated electroplating production space, equipped with the
                latest technology and automation systems.
              </p>
              <ul className="space-y-3">
                {[
                  "25+ automated plating lines",
                  "Advanced filtration systems",
                  "Real-time monitoring equipment",
                  "Climate-controlled environment",
                  "Waste treatment facilities",
                  "Quality testing laboratory",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/placeholder.svg?key=facility1"
              alt="Modern manufacturing facility"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Equipment & Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Automated Plating Lines",
                description:
                  "High-speed automated systems for consistent, uniform plating with minimal human intervention.",
                specs: ["Capacity: 500+ parts/hour", "Precision control", "Multi-layer capability"],
              },
              {
                icon: Droplets,
                title: "Advanced Filtration",
                description:
                  "State-of-the-art filtration and purification systems ensuring optimal plating solution quality.",
                specs: ["Continuous monitoring", "Real-time adjustments", "Zero-discharge capability"],
              },
              {
                icon: Gauge,
                title: "Quality Control Lab",
                description:
                  "Comprehensive testing facilities for thickness measurement, adhesion testing, and surface analysis.",
                specs: ["X-ray fluorescence", "Salt spray testing", "Microscopic inspection"],
              },
              {
                icon: Shield,
                title: "Environmental Systems",
                description:
                  "Advanced waste treatment and environmental protection systems meeting all regulatory standards.",
                specs: ["Wastewater treatment", "Air filtration", "Chemical recycling"],
              },
            ].map((equipment, index) => {
              const Icon = equipment.icon
              return (
                <div key={index} className="bg-background rounded-lg p-8 border border-border">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{equipment.title}</h3>
                  <p className="text-muted-foreground mb-4">{equipment.description}</p>
                  <ul className="space-y-1 text-sm">
                    {equipment.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Production Capacity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "500,000+",
                label: "Parts per month",
                description: "Maximum production capacity across all plating lines",
              },
              {
                metric: "24/7",
                label: "Operations",
                description: "Round-the-clock production with multiple shifts",
              },
              {
                metric: "99.2%",
                label: "Quality Rate",
                description: "Consistent quality standards across all batches",
              },
            ].map((capacity, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border text-center">
                <p className="text-4xl font-bold text-accent mb-2">{capacity.metric}</p>
                <p className="font-semibold mb-2">{capacity.label}</p>
                <p className="text-muted-foreground text-sm">{capacity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Electroplating Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: "Receiving & Inspection",
                  desc: "Parts are received, inspected, and categorized for processing.",
                },
                {
                  step: "Cleaning & Degreasing",
                  desc: "Thorough cleaning to remove oils, dirt, and contaminants.",
                },
                {
                  step: "Surface Preparation",
                  desc: "Pickling and activation to prepare surface for plating.",
                },
                {
                  step: "Electroplating",
                  desc: "Automated plating process with precise control and monitoring.",
                },
                {
                  step: "Rinsing & Drying",
                  desc: "Multiple rinse stages followed by controlled drying.",
                },
                {
                  step: "Quality Testing",
                  desc: "Comprehensive testing and inspection before packaging.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.step}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <img
              src="/placeholder.svg?key=facility2"
              alt="Electroplating process"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Environmental Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Sustainable Practices</h3>
              <ul className="space-y-4">
                {[
                  "Advanced wastewater treatment systems",
                  "Chemical recycling and reuse programs",
                  "Air emission control systems",
                  "Energy-efficient equipment",
                  "Waste minimization initiatives",
                  "ISO 14001 Environmental Management",
                ].map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/placeholder.svg?key=facility3"
              alt="Environmental systems"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule a Facility Tour</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Visit our state-of-the-art facility and see our operations firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Request a Tour
          </Link>
        </div>
      </section>
    </main>
  )
}
