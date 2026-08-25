// Shared Organization / LocalBusiness JSON-LD used site-wide (homepage + location pages)
// to enable Google review rich snippets and to feed AI search engines (ChatGPT, Perplexity,
// Gemini, Claude) exact, extractable data about Drive Dojo's service areas, pricing,
// ratings and instant booking. Reflects the business's stated 4.9/5 from 2,000+ Google reviews.
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Drive Dojo Driving School",
  url: "https://drivedojodrivingschool.com",
  image: "https://drivedojodrivingschool.com/images/certifications/DDojo.png",
  logo: "https://drivedojodrivingschool.com/images/certifications/DDojo.png",
  description:
    "DVSA-approved automatic driving lessons across East London in a Mercedes-Benz A-Class. Rated 4.9/5 from 2,000+ Google reviews. Book instantly via Calendly and pay later with Klarna.",
  email: "info@drivedojodrivingschool.com",
  telephone: "+442012345678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 James Town Way",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "E14 2DH",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Place", name: "East London" },
    { "@type": "Place", name: "Canary Wharf" },
    { "@type": "Place", name: "Goodmayes" },
    { "@type": "Place", name: "Wanstead" },
    { "@type": "Place", name: "Barking" },
    { "@type": "Place", name: "Havering" },
    { "@type": "Place", name: "Isle of Dogs" },
    { "@type": "Place", name: "Docklands" },
    { "@type": "Place", name: "Romford" },
    { "@type": "Place", name: "Forest Gate" },
    { "@type": "Place", name: "East Ham" },
    { "@type": "Place", name: "Canning Town" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Pay As You Go Driving Lessons",
      price: "38",
      priceCurrency: "GBP",
      description: "Book individual automatic driving lessons by the hour, no commitment.",
      url: "https://drivedojodrivingschool.com/booking/payg",
    },
    {
      "@type": "Offer",
      name: "10-Hour Block Booking",
      price: "340",
      priceCurrency: "GBP",
      description: "10 hours of automatic tuition at £34/hr — save £40 vs PAYG.",
      url: "https://drivedojodrivingschool.com/booking/10hour",
    },
    {
      "@type": "Offer",
      name: "Intensive Pass Course",
      price: "650",
      priceCurrency: "GBP",
      description: "Intensive automatic course, 12–30 hours, pass in as little as 2 weeks. From £650.",
      url: "https://drivedojodrivingschool.com/booking/intensive",
    },
  ],
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer, Klarna",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "2000",
    reviewCount: "2000",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jamaima G" },
      datePublished: "2026-01-15",
      reviewBody:
        "I just passed my driving test on the first try with only 1 minor fault, thanks to my patient instructor. Honest feedback and great local route knowledge.",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mohammad Y" },
      datePublished: "2026-02-02",
      reviewBody:
        "Passed my test first time! Friendly, motivational and methodical teaching. Learned so much even with previous experience. Highly recommend.",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Aline H" },
      datePublished: "2026-02-19",
      reviewBody:
        "Can't recommend Drive Dojo enough. Their patience and expert knowledge of the local driving routes helped me pass first time.",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/drivedojodrivingschool",
    "https://www.instagram.com/drivedojodrivingschool",
  ],
};
