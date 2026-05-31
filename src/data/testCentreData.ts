// Shared test centre data used by TestCentreExplorer, TestCentreWidget,
// and the /driving-test-centres/{slug} individual landing pages.

export interface TestCentre {
  id: string;
  name: string;
  address: string;
  passRate: string;
  distance: string;
  troubleSpots: string[];
  instructorsTip: string;
  routeCount: number;
  seoTitle: string;
  seoDescription: string;
  areaServed: string[];
  nearbyPostcodes: string[];
}

export const TEST_CENTRES: TestCentre[] = [
  {
    id: 'goodmayes',
    name: 'Goodmayes',
    address: 'Goodmayes Driving Test Centre, 254 High Road, Goodmayes, IG3 8EW',
    passRate: '58%',
    distance: '8 miles',
    troubleSpots: [
      'The roundabout at Goodmayes Retail Park — tight lanes during peak hours',
      'Right turn from Green Lane onto High Road (watch for pedestrian crossings)',
      'The mini-roundabout sequence near Goodmayes Station (keep lane discipline)',
      'High-speed approach to the A12 junction — late-lane changes catch examiners',
    ],
    instructorsTip:
      "Examiners at Goodmayes love testing your awareness on the High Road — there are three schools, two pedestrian crossings, and a bus lane that switches hours. Do at least two mock routes covering the station area and the retail park roundabout. Most fails here come from hesitation at the multi-lane roundabout, so commit early and check mirrors before every exit.",
    routeCount: 8,
    seoTitle: 'Goodmayes Driving Test Centre — Routes, Pass Rates & Tips | Drive Dojo',
    seoDescription: 'Master the Goodmayes driving test centre with route-specific tips, current pass rate (58%), notorious trouble spots, and expert instructor advice. Book a £49 introductory lesson today.',
    areaServed: ['Goodmayes', 'Seven Kings', 'Chadwell Heath', 'Ilford'],
    nearbyPostcodes: ['IG3', 'IG1', 'RM6'],
  },
  {
    id: 'wood-green',
    name: 'Wood Green',
    address: 'Wood Green Driving Test Centre, Western Road, London, N22 6UH',
    passRate: '42%',
    distance: '12 miles',
    troubleSpots: [
      'The Wood Green High Road roundabout — notorious for lane confusion',
      'Alexandra Palace approach — steep incline with parked cars both sides',
      'Turnpike Lane junction — buses and cyclists create narrow passing gaps',
      'Green Lanes dual carriageway entry — short slip road requires confident acceleration',
    ],
    instructorsTip:
      "Wood Green has one of London's lowest pass rates for a reason — the High Road roundabout catches even confident drivers. The key is to treat it as a spiral roundabout: left lane for exits 1 & 2, right lane for exits 3 & 4. You MUST not change lanes mid-roundabout or it's an instant serious fault. We recommend a dedicated 2-hour session just drilling this junction before your test.",
    routeCount: 12,
    seoTitle: 'Wood Green Driving Test Centre Guide — Pass Rates & Routes | Drive Dojo',
    seoDescription: 'Wood Green has one of London\'s lowest pass rates at 42%. Learn the High Road roundabout, test routes, and insider tips from our ADIs. Book your first 2 hours for £49.',
    areaServed: ['Wood Green', 'Bounds Green', 'Alexandra Palace', 'Turnpike Lane'],
    nearbyPostcodes: ['N22', 'N11', 'N8'],
  },
  {
    id: 'barking',
    name: 'Barking',
    address: 'Barking Driving Test Centre, 47 Ripple Road, Barking, IG11 7NT',
    passRate: '55%',
    distance: '5 miles',
    troubleSpots: [
      'Ripple Road / A13 interchange — complex gyratory system',
      'Lodge Avenue junction — heavy bus traffic during school hours',
      'Barking Station approach — narrow roads with parked vehicles',
      'Abbey Road level crossing — test of observation and patience',
    ],
    instructorsTip:
      'Barking examiners frequently use the A13 approach to test your confidence at speed. Get comfortable merging at 50mph on the dual carriageway and know when to hold back vs. when to go. The gyratory near Ripple Road is also a favourite — count your exits carefully and always signal your intent early.',
    routeCount: 6,
    seoTitle: 'Barking Driving Test Centre — Routes, Pass Rate & Tips | Drive Dojo',
    seoDescription: 'Prepare for the Barking driving test centre (55% pass rate) with our route guide. Learn A13 gyratory tips, trouble spots, and book a local instructor for £49.',
    areaServed: ['Barking', 'Dagenham', 'Ilford', 'East Ham'],
    nearbyPostcodes: ['IG11', 'RM9', 'IG1'],
  },
  {
    id: 'hornchurch',
    name: 'Hornchurch',
    address: 'Hornchurch Driving Test Centre, 116 High Street, Hornchurch, RM12 4UJ',
    passRate: '60%',
    distance: '12 miles',
    troubleSpots: [
      'Hornchurch High Street — narrow with frequent pedestrian crossings',
      'The roundabout at Abbs Cross Lane — poor visibility on approach',
      'Suttons Lane junction — awkward angle for right turns',
      'Romford Road bus lane restrictions — time-sensitive rules',
    ],
    instructorsTip:
      "Hornchurch is one of the more forgiving centres in the area with a 60% pass rate, but don't get complacent. Examiners here focus heavily on independent driving — you'll likely follow road signs for 20 minutes. Practice following signs to Romford and Upminster without sat-nav prompts.",
    routeCount: 5,
    seoTitle: 'Hornchurch Driving Test Centre Guide — Routes & Tips | Drive Dojo',
    seoDescription: 'Hornchurch test centre has a 60% pass rate. Learn the High Street routes, roundabout challenges, and independent driving tips. Book a £49 introductory lesson.',
    areaServed: ['Hornchurch', 'Romford', 'Upminster', 'Elm Park'],
    nearbyPostcodes: ['RM12', 'RM11', 'RM14'],
  },
  {
    id: 'chingford',
    name: 'Chingford',
    address: 'Chingford Driving Test Centre, 2 Station Road, Chingford, E4 6AL',
    passRate: '61%',
    distance: '10 miles',
    troubleSpots: [
      'Chingford Mount Road — busy shopping area with unpredictable pedestrians',
      'The Crooked Billet roundabout — five exits with poor lane markings',
      'Epping Forest approach roads — national speed limit transitions',
      'Station Road junction — restricted visibility from parked vehicles',
    ],
    instructorsTip:
      'Chingford routes often take you into Epping Forest — be ready for country road driving with national speed limits. The transition from 30mph to 60mph catches people off-guard. Also, the Crooked Billet roundabout appears on nearly every test route, so make sure you can navigate all five exits confidently.',
    routeCount: 7,
    seoTitle: 'Chingford Driving Test Centre — Routes, Pass Rate & Tips | Drive Dojo',
    seoDescription: 'Chingford (61% pass rate) test routes include Epping Forest and Crooked Billet roundabout. Get route-specific training from our ADIs. Book your first 2 hours for £49.',
    areaServed: ['Chingford', 'Highams Park', 'Walthamstow', 'Edmonton'],
    nearbyPostcodes: ['E4', 'E17', 'N9'],
  },
  {
    id: 'wanstead',
    name: 'Wanstead',
    address: 'Wanstead Driving Test Centre, 106 High Street, Wanstead, E12 5AA',
    passRate: '59%',
    distance: '7 miles',
    troubleSpots: [
      'Wanstead High Street — narrow with oncoming buses',
      'Redbridge Lane roundabout — multiple lanes, poor signage',
      "The Charlie Brown's roundabout — large, fast-paced five-exit junction",
      'Snaresbrook Road — school zone with 20mph limit enforcement',
    ],
    instructorsTip:
      "Wanstead examiners will almost certainly take you through the Charlie Brown's roundabout — it's the defining feature of this test centre. It's a large, fast roundabout where lane discipline matters more than anywhere else. Approach in the correct lane and maintain appropriate speed. Over-caution here is marked down just as much as recklessness.",
    routeCount: 6,
    seoTitle: 'Wanstead Driving Test Centre Guide — Routes & Tips | Drive Dojo',
    seoDescription: 'Wanstead test centre (59% pass rate) — master the Charlie Brown\'s roundabout, Redbridge Lane, and local routes. Book a £49 intro lesson with a local ADI.',
    areaServed: ['Wanstead', 'Redbridge', 'Leytonstone', 'South Woodford'],
    nearbyPostcodes: ['E12', 'E11', 'IG4'],
  },
];

export function getTestCentreById(id: string): TestCentre | undefined {
  return TEST_CENTRES.find((c) => c.id === id);
}