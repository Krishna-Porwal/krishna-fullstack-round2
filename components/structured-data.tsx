export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lanora Electroplaters",
    image: "https://lanora-electroplaters.com/og-image.jpg",
    description: "High-quality electroplating services for automotive and manufacturing industries.",
    url: "https://lanora-electroplaters.com",
    telephone: "+1-555-123-4567",
    email: "info@lanora.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Industrial Ave",
      addressLocality: "Tech City",
      addressRegion: "TC",
      postalCode: "12345",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/lanora",
      "https://www.linkedin.com/company/lanora",
      "https://twitter.com/lanora",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
