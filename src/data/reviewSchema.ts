// Shared AggregateRating + Review JSON-LD used site-wide (homepage + location pages)
// to enable Google review rich snippets. Reflects the business's stated 4.9/5 from 2,000+ reviews.
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Drive Dojo Driving School",
  url: "https://drivedojodrivingschool.com",
  image: "https://drivedojodrivingschool.com/images/certifications/DDojo.png",
  description:
    "DVSA-approved automatic driving lessons across East London. Rated 4.9/5 from 2,000+ learner reviews. Book online instantly, pay later with Klarna.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
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
};
