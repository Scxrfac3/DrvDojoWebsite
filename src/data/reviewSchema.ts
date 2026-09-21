// Shared Organization / LocalBusiness JSON-LD used site-wide (homepage + location pages)
// to enable Google review rich snippets and to feed AI search engines (ChatGPT, Perplexity,
// Gemini, Claude) exact, extractable data about Drive Dojo.
// All values come from the canonical business source (src/data/business.ts).

import { BUSINESS } from "./business";

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS.name,
  url: BUSINESS.url,
  image: "https://drivedojodrivingschool.com/images/certifications/DDojo.png",
  logo: "https://drivedojodrivingschool.com/images/certifications/DDojo.png",
  description: BUSINESS.description,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.streetAddress,
    addressLocality: BUSINESS.address.addressLocality,
    addressRegion: BUSINESS.address.addressRegion,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.addressCountry,
  },
  areaServed: BUSINESS.areasServed.map((name) => ({ "@type": "Place", name })),
  makesOffer: [
    {
      "@type": "Offer",
      name: BUSINESS.pricing.payg.label,
      price: String(BUSINESS.pricing.payg.priceNumber),
      priceCurrency: "GBP",
      description: "Book individual automatic driving lessons by the hour, no commitment.",
      url: "https://drivedojodrivingschool.com/booking/payg",
    },
    {
      "@type": "Offer",
      name: BUSINESS.pricing.block10.label,
      price: String(BUSINESS.pricing.block10.priceNumber),
      priceCurrency: "GBP",
      description: "10 hours of automatic tuition at £34/hr — save £40 vs PAYG.",
      url: "https://drivedojodrivingschool.com/booking/10hour",
    },
    {
      "@type": "Offer",
      name: BUSINESS.pricing.intensive.label,
      price: String(BUSINESS.pricing.intensive.priceFrom),
      priceCurrency: "GBP",
      description: "Intensive automatic course, 12–30 hours, from £650.",
      url: "https://drivedojodrivingschool.com/booking/intensive",
    },
  ],
  paymentAccepted: BUSINESS.paymentAccepted,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.ratingValue,
    bestRating: "5",
    worstRating: "1",
    ratingCount: String(BUSINESS.reviewCountNumber),
    reviewCount: String(BUSINESS.reviewCountNumber),
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
  sameAs: BUSINESS.sameAs,
};
