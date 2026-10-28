// ─────────────────────────────────────────────────────────────
// Drive Dojo — canonical business data (single source of truth)
// ─────────────────────────────────────────────────────────────
// All components, structured data (JSON-LD) and llms.txt should
// read from this file so the same facts appear everywhere.
// Figures here are the verified, current business facts.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Drive Dojo Driving School",
  entityType: "DrivingSchool",
  entityStatement:
    "Drive Dojo is an automatic driving school based in East London, providing automatic driving lessons with a DVSA-approved driving instructor across Canary Wharf and surrounding East London areas.",
  description:
    "Automatic driving lessons in East London with a DVSA-approved instructor in a Mercedes-Benz A-Class automatic. Online booking and Klarna available.",
  url: "https://drivedojodrivingschool.com",
  phone: "+447487228866",
  email: "drivedojo@gmail.com",
  address: {
    streetAddress: "10 James Town Way",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "E14 2DH",
    addressCountry: "GB",
  },
  geo: { latitude: 51.5074, longitude: -0.0235 },
  base: "Canary Wharf, London E14",
  vehicle: "Mercedes-Benz A-Class automatic (dual-control)",
  passRate: "98%",
  studentCount: "200+",
  rating: "5.0",
  ratingValue: "5",
  reviewCount: "200+",
  reviewCountNumber: 200,
  introOffer: {
    label: "First 2 hours",
    price: "£78",
    priceNumber: 78,
  },
  pricing: {
    payg: { label: "Pay As You Go", price: "£39", per: "hour", priceNumber: 39 },
    block6: { label: "6-Hour Block", price: "£222", per: "6 hours", priceNumber: 222, perHour: 37 },
    block10: { label: "10-Hour Block", price: "£350", per: "10 hours", priceNumber: 350, perHour: 35 },
    block20: { label: "20-Hour Block", price: "£699", per: "20 hours", priceNumber: 699, perHour: 34.95 },
    intensive: { label: "Intensive Pass Course", price: "£650 – £950", per: "12–30 hours", priceFrom: 650, priceTo: 950 },
    passPlus: { label: "Pass Plus", price: "£250", per: "course", priceNumber: 250, originalPrice: "£280", originalPriceNumber: 280 },
    refresher: { label: "Refresher Lessons", price: "£45", per: "hour", priceNumber: 45, minHours: 2 },
    testCar: { label: "Test Car Hire", price: "£150", per: "test", priceNumber: 150 },
  },
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer, Klarna",
  klarna: true,
  bookingUrl: "https://drivedojodrivingschool.com/booking",
  calendlyUrl: "https://calendly.com/drivedojo-qnua",
  passPlusCalendlyUrl: "https://calendly.com/drivedojo-qnua/pass-plus",
  refresherCalendlyUrl: "https://calendly.com/drivedojo-qnua/pass-plus-clone",
  areasServed: [
    "East London",
    "Canary Wharf",
    "Isle of Dogs",
    "Docklands",
    "Goodmayes",
    "Ilford",
    "Barking",
    "East Ham",
    "Forest Gate",
    "Canning Town",
    "Walthamstow",
    "Romford",
  ],
  testCentres: ["Goodmayes", "Wood Green", "Barking", "Hornchurch", "Chingford", "Wanstead"],
  testDayPolicy: "Test car hire available at £150 per test.",
  sameAs: [
    "https://www.facebook.com/drivedojodrivingschool",
    "https://www.instagram.com/drivedojodrivingschool",
  ],
} as const;

export type Business = typeof BUSINESS;