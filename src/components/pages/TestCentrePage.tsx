import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Award,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Navigation,
  Star,
  Target,
  Car,
  Users,
  ChevronRight,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';
import { getTestCentreById } from '../../data/testCentreData';

export default function TestCentrePage() {
  const { slug } = useParams<{ slug: string }>();
  const centre = getTestCentreById(slug || '');

  if (!centre) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white">
        <Navbar />
        <main className="pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Test Centre Not Found</h1>
          <p className="text-gray-400 mb-6">The test centre you're looking for doesn't exist or has moved.</p>
          <Link to="/test-centres" className="text-primary hover:underline">View all test centres →</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO title={centre.seoTitle} description={centre.seoDescription} />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <ChevronRight className="inline w-3 h-3 mx-1" />
            <Link to="/test-centres" className="hover:text-gray-400">Test Centres</Link>
            <ChevronRight className="inline w-3 h-3 mx-1" />
            <span className="text-gray-400">{centre.name}</span>
          </nav>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Test Centre Guide</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              {centre.name} <span className="text-primary">Driving Test Centre</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl">
              Complete guide to the {centre.name} driving test centre — pass rates, notorious routes, and expert tips from local ADIs who train here every day.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Current Pass Rate', value: centre.passRate, icon: Award, color: 'text-primary' },
              { label: 'Known Routes', value: String(centre.routeCount), icon: Navigation, color: 'text-blue-400' },
              { label: 'Distance From Base', value: centre.distance, icon: MapPin, color: 'text-green-400' },
              { label: 'Areas Covered', value: String(centre.areaServed.length), icon: Target, color: 'text-amber-400' },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 text-center"
                >
                  <StatIcon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Left — trouble spots + tip */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="flex items-center gap-2 text-white font-semibold mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  Centre Address
                </h2>
                <p className="text-gray-400">{centre.address}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-gray-600">Serves:</span>
                  {centre.areaServed.map((area) => (
                    <span key={area} className="text-xs bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-full text-gray-400">
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs text-gray-600">Postcodes:</span>
                  {centre.nearbyPostcodes.map((pc) => (
                    <span key={pc} className="text-xs text-primary/70">{pc}</span>
                  ))}
                </div>
              </div>

              {/* Trouble spots */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="flex items-center gap-2 text-white font-semibold mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  Notorious Trouble Spots at {centre.name}
                </h2>
                <ul className="space-y-3">
                  {centre.troubleSpots.map((spot, i) => (
                    <li key={i} className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/10 rounded-lg p-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-300 text-sm">{spot}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor's tip */}
              <div className="bg-gradient-to-r from-yellow-500/5 to-amber-500/5 border border-yellow-500/10 rounded-2xl p-6">
                <h2 className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  Instructor's Top Tip for {centre.name}
                </h2>
                <p className="text-gray-300 leading-relaxed">{centre.instructorsTip}</p>
              </div>
            </div>

            {/* Right sidebar — CTA */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-3">
                  Master {centre.name} Routes
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Book your first 2 hours with a {centre.name} specialist for just £49. We'll drill the exact routes and junctions examiners use.
                </p>
                <Link
                  to="/booking"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Book Your £49 Intro
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-4 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-blue-400" /> DVSA Approved</div>
                  <div className="flex items-center gap-1.5"><Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating</div>
                  <div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-green-400" /> 2,000+ Students</div>
                </div>
              </div>
            </div>
          </div>

          {/* Other centres */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Other Test Centres We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {['goodmayes', 'wood-green', 'barking', 'hornchurch', 'chingford', 'wanstead']
                .filter((id) => id !== centre.id)
                .slice(0, 5)
                .map((id) => {
                  const c = getTestCentreById(id);
                  if (!c) return null;
                  return (
                    <Link
                      key={c.id}
                      to={`/driving-test-centres/${c.id}`}
                      className="bg-white/[0.02] border border-white/[0.06] hover:border-white/15 rounded-xl p-4 transition-all group"
                    >
                      <p className="font-semibold text-white group-hover:text-primary transition-colors">{c.name}</p>
                      <p className="text-xs text-gray-600 mt-1">Pass rate: {c.passRate}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}