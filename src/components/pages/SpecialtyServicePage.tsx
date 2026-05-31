import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle,
  CreditCard,
  Car,
  Users,
  MapPin,
  Globe,
  UserCheck,
  RotateCcw,
  Award,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';

interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  intro: string;
  benefits: string[];
  pricing: { label: string; price: string }[];
  ctaText: string;
  ctaLink: string;
  bodySections: { heading: string; content: string }[];
}

const SERVICES: Record<string, ServiceData> = {
  'international-licence-conversion': {
    slug: 'international-licence-conversion',
    title: 'International Licence Conversion',
    subtitle: 'From overseas licence to UK-qualified driver',
    seoTitle: 'International Driving Licence Conversion — UK Lessons in East London | Drive Dojo',
    seoDescription: 'Convert your overseas driving licence to a full UK licence with expert automatic lessons in East London. DVSA-approved training for international drivers. Book your £49 intro.',
    icon: Globe,
    intro: 'Moving to the UK from abroad? You can drive on your international licence for 12 months, but after that you\'ll need a full UK driving licence. Our DVSA-approved instructors specialise in helping international drivers transition smoothly to UK roads — from understanding British road signs to mastering the practical test.',
    benefits: [
      'Instructors experienced with international licence holders',
      'Focus on UK-specific rules: roundabouts, speed limits, road markings',
      'Automatic-only tuition — no clutch or gear stress',
      'Help booking your theory and practical tests',
      'Flexible lesson packages from £49 introductory offer',
    ],
    pricing: [
      { label: 'Introductory Lesson (2 hours)', price: '£49' },
      { label: 'Pay As You Go', price: '£38/hr' },
      { label: '10-Hour Block Booking', price: '£340' },
    ],
    ctaText: 'Convert Your Licence',
    ctaLink: '/booking',
    bodySections: [
      {
        heading: 'Who Needs to Convert?',
        content: 'If you hold a valid driving licence from an EU/EEA country, you can exchange it for a UK licence without taking a test. For most non-EU licences (including India, Pakistan, Nigeria, Ghana, Bangladesh, and others), you can drive for 12 months from when you became a UK resident, then you must pass the UK theory and practical tests to continue driving legally.',
      },
      {
        heading: 'How We Help International Drivers',
        content: 'Many international drivers are experienced behind the wheel but need to adapt to UK-specific rules. Roundabout navigation, speed limits (mph not km/h), road positioning, and the UK driving test format are all areas where an experienced instructor can help you bridge the gap efficiently.',
      },
    ],
  },
  'female-driving-instructors': {
    slug: 'female-driving-instructors',
    title: 'Female Driving Instructors',
    subtitle: 'Learn with instructors you feel comfortable with',
    seoTitle: 'Female Driving Instructors East London — DVSA Approved | Drive Dojo',
    seoDescription: 'Book lessons with our female DVSA-approved driving instructors in East London. Comfortable, patient, and professional automatic tuition. £49 introductory offer available.',
    icon: UserCheck,
    intro: 'We understand that many learners — particularly women from certain cultural backgrounds, nervous drivers, or those who simply feel more comfortable — prefer a female driving instructor. We\'re proud to offer female ADIs who are patient, professional, and DVSA-approved.',
    benefits: [
      'Female DVSA-approved instructors available',
      'Patient, encouraging teaching style',
      'Comfortable, safe learning environment',
      'Automatic lessons — focus on the road, not the gears',
      'Flexible scheduling around school runs and work',
    ],
    pricing: [
      { label: 'Introductory Lesson (2 hours)', price: '£49' },
      { label: '10-Hour Block Booking', price: '£340' },
      { label: 'Klarna — 3 payments of', price: '£113.33' },
    ],
    ctaText: 'Book With a Female Instructor',
    ctaLink: '/booking',
    bodySections: [
      {
        heading: 'Why Choose a Female Instructor?',
        content: 'Many learners — particularly those who are nervous, returning to driving after a long break, or from communities where female-only tuition is preferred — find they learn faster and feel more at ease with a female instructor. Your comfort matters, and it directly impacts how quickly you progress.',
      },
      {
        heading: 'Our Female ADIs',
        content: 'All our female instructors hold the same DVSA Approved Driving Instructor qualification as any other ADI. They\'ve passed rigorous theory, driving ability, and instructional ability tests. They drive the same modern dual-controlled Mercedes-Benz A-Class automatics and follow the same structured syllabus.',
      },
    ],
  },
  'refresher-driving-lessons': {
    slug: 'refresher-driving-lessons',
    title: 'Refresher Driving Lessons',
    subtitle: 'Get your confidence back behind the wheel',
    seoTitle: 'Refresher Driving Lessons East London — Regain Your Confidence | Drive Dojo',
    seoDescription: 'Nervous about driving again? Regain your confidence with patient, DVSA-approved refresher driving lessons in East London. Automatic tuition from £49. Book today.',
    icon: RotateCcw,
    intro: 'Haven\'t driven in a while? Whether you passed your test years ago and never drove, took a break after having children, or simply lost confidence after a near-miss — our refresher lessons are designed to get you back on the road safely and confidently.',
    benefits: [
      'Tailored to your specific concerns — motorways, city driving, parking',
      'No test pressure — pure confidence building',
      'Start from wherever you\'re comfortable',
      'Use your own car or learn in our dual-controlled Mercedes',
      'As few or as many hours as you need',
    ],
    pricing: [
      { label: 'Introductory Lesson (2 hours)', price: '£49' },
      { label: 'Pay As You Go', price: '£38/hr' },
      { label: '6-Hour Refresher Package', price: '£210' },
    ],
    ctaText: 'Book Your Refresher Lesson',
    ctaLink: '/booking',
    bodySections: [
      {
        heading: 'Who Are Refresher Lessons For?',
        content: 'Refresher lessons are for anyone who already holds a full UK driving licence but hasn\'t driven for a while — or doesn\'t feel confident. Common reasons include: returning to driving after a long gap, moving to London from a quieter area, preparing for a new commute, or simply wanting to feel safer with children in the car.',
      },
      {
        heading: 'What We Cover',
        content: 'Everything is tailored to you. Motorway driving, busy city junctions, parallel parking, night driving, school-run routes — you tell us what makes you nervous and we\'ll build your confidence in those exact scenarios. There\'s no fixed syllabus because there\'s no test at the end — just confident, safe driving.',
      },
    ],
  },
  'pass-plus-courses': {
    slug: 'pass-plus-courses',
    title: 'Pass Plus Courses',
    subtitle: 'Advanced skills for newly qualified drivers',
    seoTitle: 'Pass Plus Courses East London — Advanced Driving Skills | Drive Dojo',
    seoDescription: 'Take your driving to the next level with a Pass Plus course in East London. Motorway training, night driving, all-weather skills. Reduce your insurance premium too.',
    icon: Award,
    intro: 'Just passed your test? Congratulations! Now take your driving to the next level with Pass Plus — a DVSA-designed advanced course covering motorways, night driving, bad weather, and more. Completing Pass Plus can also reduce your insurance premium with many major UK insurers.',
    benefits: [
      '6 practical modules covering real-world driving scenarios',
      'Motorway driving — not covered in the standard test',
      'Night driving and all-weather driving experience',
      'Potential insurance discounts with participating insurers',
      'Complete in a single day or spread across sessions',
    ],
    pricing: [
      { label: 'Full Pass Plus Course (6 hours)', price: '£210' },
      { label: 'Pay As You Go', price: '£38/hr' },
    ],
    ctaText: 'Book Your Pass Plus Course',
    ctaLink: '/booking',
    bodySections: [
      {
        heading: 'What Is Pass Plus?',
        content: 'Pass Plus is a DVSA-approved practical training course that takes at least 6 hours. It covers driving in town, in all weathers, on rural roads, at night, on dual carriageways, and on motorways — areas the standard test doesn\'t fully prepare you for. There\'s no test at the end; you\'re assessed continuously by your instructor.',
      },
      {
        heading: 'Insurance Benefits',
        content: 'Many UK insurers (including Admiral, Aviva, Direct Line, and LV=) offer discounts for drivers who\'ve completed Pass Plus — sometimes up to 25% off your first year\'s premium. For new drivers facing high insurance costs, Pass Plus can pay for itself within the first year.',
      },
    ],
  },
};

export default function SpecialtyServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const service: ServiceData | undefined = SERVICES[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white">
        <Navbar />
        <main className="pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-6">The service page you're looking for doesn't exist.</p>
          <Link to="/" className="text-primary hover:underline">Return home →</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO title={service.seoTitle} description={service.seoDescription} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <ServiceIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{service.subtitle}</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">{service.title}</h1>
            <p className="text-gray-400 text-lg max-w-3xl">{service.intro}</p>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {service.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{b}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing table */}
          {service.pricing.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.pricing.map((p, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-primary">{p.price}</p>
                    <p className="text-xs text-gray-500">{p.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Klarna available</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> DVSA Approved</span>
              </div>
            </div>
          )}

          {/* Body */}
          <div className="space-y-6 mb-10">
            {service.bodySections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
            <p className="text-gray-400 mb-5">Book your first 2 hours for just £49.</p>
            <Link to={service.ctaLink} className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl">
              {service.ctaText}<ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}