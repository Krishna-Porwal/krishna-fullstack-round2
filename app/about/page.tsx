import type { Metadata } from "next"
import Link from "next/link"
import { Award, Users, Zap, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Lanora Electroplaters | Company Profile & History",
  description:
    "Learn about Lanora Electroplaters - our mission, vision, certifications, and 20+ years of expertise in industrial electroplating.",
  keywords: "about Lanora, company profile, electroplating expertise, certifications, ISO certified",
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lanora Electroplaters</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Leading the industry with innovative electroplating solutions and unwavering commitment to quality since
            2003.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide exceptional electroplating services that exceed customer expectations through innovation,
                quality, and reliability. We are committed to delivering superior finishes that enhance product
                performance and longevity for our clients in automotive and manufacturing sectors.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted electroplating partner in the region, recognized for our technical excellence,
                environmental responsibility, and customer-centric approach. We envision a future where advanced plating
                technologies drive innovation across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: "2003",
                title: "Founded",
                description:
                  "Lanora Electroplaters established with a vision to revolutionize industrial electroplating services.",
              },
              {
                year: "2008",
                title: "ISO 9001 Certification",
                description:
                  "Achieved ISO 9001:2008 certification, demonstrating our commitment to quality management.",
              },
              {
                year: "2012",
                title: "Facility Expansion",
                description:
                  "Expanded operations with state-of-the-art automated equipment and increased production capacity.",
              },
              {
                year: "2018",
                title: "Environmental Excellence",
                description: "Implemented advanced waste management and environmental protection systems.",
              },
              {
                year: "2023",
                title: "Industry Recognition",
                description:
                  "Recognized as a leading electroplating provider with 500+ satisfied clients across 15 countries.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="w-1 h-20 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-accent mb-1">{milestone.year}</p>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "Years of Experience", value: "20+" },
              { icon: Users, label: "Satisfied Clients", value: "500+" },
              { icon: Zap, label: "Projects Completed", value: "10K+" },
              { icon: TrendingUp, label: "Countries Served", value: "15" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-3">
                {[
                  "ISO 9001:2015 - Quality Management System",
                  "ISO 14001:2015 - Environmental Management",
                  "IATF 16949:2016 - Automotive Quality",
                  "RoHS Compliant - Hazardous Substances",
                  "REACH Compliant - Chemical Regulations",
                ].map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-4">Industry Awards</h3>
              <ul className="space-y-3">
                {[
                  "Best Electroplating Service Provider 2022",
                  "Innovation in Manufacturing Excellence 2021",
                  "Customer Service Excellence Award 2023",
                  "Sustainable Business Practices 2022",
                  "Industry Leadership Recognition 2023",
                ].map((award, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">★</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Anderson",
                role: "Chief Executive Officer",
                bio: "With 25+ years in electroplating, John leads our vision for innovation and excellence.",
              },
              {
                name: "Sarah Mitchell",
                role: "Chief Operations Officer",
                bio: "Sarah oversees our facilities and ensures optimal production efficiency and quality standards.",
              },
              {
                name: "Michael Chen",
                role: "Technical Director",
                bio: "Michael drives our technical innovations and maintains our commitment to cutting-edge solutions.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Industry Leaders</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Experience the Lanora difference with our proven expertise and commitment to excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
