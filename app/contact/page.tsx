"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Get in touch with our team to discuss your electroplating needs and receive a custom quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+1 (555) 123-4567",
                subtext: "Mon-Fri, 8AM-6PM EST",
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@lanora.com",
                subtext: "We respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Address",
                content: "123 Industrial Ave",
                subtext: "Tech City, TC 12345",
              },
              {
                icon: Clock,
                title: "Hours",
                content: "24/7 Operations",
                subtext: "Production runs round-the-clock",
              },
            ].map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                    placeholder="Tell us about your electroplating needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {submitted ? "Message Sent!" : "Send Enquiry"}
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                    Thank you for your enquiry. We'll get back to you soon!
                  </div>
                )}
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="bg-background rounded-lg overflow-hidden border border-border mb-8 h-96">
                <img src="/placeholder.svg?key=map" alt="Location map" className="w-full h-full object-cover" />
              </div>

              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Get a custom quote for your project",
                    "Discuss technical specifications",
                    "Learn about our capabilities",
                    "Schedule a facility tour",
                    "Explore partnership opportunities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is your typical turnaround time?",
                a: "Standard turnaround is 5-10 business days depending on volume and complexity. Rush orders can be accommodated.",
              },
              {
                q: "Do you offer custom plating solutions?",
                a: "Yes, we specialize in custom solutions tailored to your specific requirements and industry standards.",
              },
              {
                q: "What is your minimum order quantity?",
                a: "We accept orders of any size, from small batches to large-scale production runs.",
              },
              {
                q: "Are your services environmentally friendly?",
                a: "Yes, we maintain ISO 14001 certification and use advanced waste treatment and recycling systems.",
              },
              {
                q: "Do you provide quality certifications?",
                a: "Absolutely. All our work comes with detailed test certificates and quality documentation.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
