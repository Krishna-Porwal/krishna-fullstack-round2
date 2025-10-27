import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Clients | Lanora Electroplaters | Trusted by Industry Leaders",
  description:
    "Discover the leading automotive and manufacturing companies that trust Lanora Electroplaters for their electroplating needs.",
  keywords: "clients, customers, automotive companies, manufacturing partners",
}

export default function Clients() {
  const clientCategories = [
    {
      category: "Automotive Industry",
      description: "Leading automotive manufacturers and suppliers",
      clients: [
        "AutoTech Motors",
        "Precision Auto Parts",
        "Global Automotive Solutions",
        "Elite Vehicle Components",
        "Advanced Auto Systems",
        "Premium Automotive Group",
      ],
    },
    {
      category: "Manufacturing & Industrial",
      description: "Heavy equipment and industrial component manufacturers",
      clients: [
        "Industrial Dynamics Inc",
        "Heavy Machinery Corp",
        "Precision Manufacturing Ltd",
        "Advanced Industrial Solutions",
        "Equipment Innovations",
        "Industrial Excellence Group",
      ],
    },
    {
      category: "Electronics & Technology",
      description: "Electronics and technology component suppliers",
      clients: [
        "TechComponent Systems",
        "Electronics Manufacturing Co",
        "Digital Solutions Ltd",
        "Tech Hardware Innovations",
        "Advanced Electronics Group",
        "Smart Technology Partners",
      ],
    },
    {
      category: "Aerospace & Defense",
      description: "Aerospace and defense contractors",
      clients: [
        "Aerospace Precision Inc",
        "Defense Systems Corp",
        "Aviation Components Ltd",
        "Aerospace Solutions Group",
        "Defense Technology Partners",
        "Precision Aerospace Systems",
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "Lanora Electroplaters has been our trusted partner for over 10 years. Their consistency and quality are unmatched.",
      author: "John Smith",
      company: "AutoTech Motors",
      role: "Procurement Director",
    },
    {
      quote:
        "The team at Lanora goes above and beyond to meet our specifications. Their technical expertise is invaluable.",
      author: "Sarah Johnson",
      company: "Industrial Dynamics Inc",
      role: "Operations Manager",
    },
    {
      quote:
        "Fast turnaround times, excellent quality, and competitive pricing. Lanora is our go-to electroplating partner.",
      author: "Michael Chen",
      company: "TechComponent Systems",
      role: "Supply Chain Manager",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Trusted by leading companies across automotive, manufacturing, electronics, and aerospace industries.
          </p>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {clientCategories.map((category, index) => (
              <div key={index}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{category.category}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.clients.map((client, idx) => (
                    <div
                      key={idx}
                      className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow flex items-center justify-center min-h-24"
                    >
                      <p className="font-semibold text-center text-foreground">{client}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Clients" },
              { number: "15", label: "Countries Served" },
              { number: "10K+", label: "Projects Completed" },
              { number: "99.2%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                industry: "Automotive",
                description:
                  "From luxury vehicles to commercial trucks, we provide electroplating solutions for all automotive applications.",
              },
              {
                industry: "Manufacturing",
                description:
                  "Heavy equipment, machinery, and industrial components benefit from our specialized plating services.",
              },
              {
                industry: "Electronics",
                description: "Precision plating for circuit boards, connectors, and electronic components.",
              },
              {
                industry: "Aerospace & Defense",
                description: "High-precision plating for critical aerospace and defense applications.",
              },
              {
                industry: "Medical Devices",
                description: "Biocompatible plating solutions for medical instruments and devices.",
              },
              {
                industry: "Consumer Products",
                description: "Decorative and functional plating for consumer goods and appliances.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold mb-2">{item.industry}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Client Base</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Experience the Lanora difference and become part of our success story.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}
