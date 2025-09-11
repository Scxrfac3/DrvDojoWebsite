import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Users,
  Clock,
  Target,
  BookOpen,
  MessageSquare,
  Car,
  TrendingUp,
  Zap,
  Heart,
  Smartphone,
  Trophy,
  ArrowRight
} from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'DVSA Approved',
    description: 'Our instructors are certified pros who know every trick to help you ace your test! 🎯',
    emoji: '🏆',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Car,
    title: 'Multiple Vehicles',
    description: 'Modern automatic or manual cars - whatever vibes with your style! 🚗',
    emoji: '🚙',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: TrendingUp,
    title: 'High Pass Rate',
    description: '98% of our students pass first time - join the winning team! 🔥',
    emoji: '📈',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Smartphone,
    title: 'Book Instantly',
    description: 'WhatsApp us anytime! Quick responses, zero hassle, maximum convenience 📱',
    emoji: '⚡',
    color: 'from-teal-500 to-green-600'
  },
  {
    icon: BookOpen,
    title: 'Progress Tracking',
    description: 'Level up your skills with our gamified progress tracking system! 🎮',
    emoji: '📊',
    color: 'from-orange-500 to-amber-600'
  },
  {
    icon: Heart,
    title: 'Chill Environment',
    description: 'No stress, no pressure - just friendly vibes and clear explanations! ✨',
    emoji: '😎',
    color: 'from-red-500 to-pink-600'
  }
];

export default function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set());

  const handleLike = (index: number) => {
    const newLiked = new Set(likedCards);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedCards(newLiked);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Why We're <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Different</span> ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not your boring old driving school - we're the future of learning to drive!
            <span className="text-orange-500 font-bold animate-pulse"> Ready to level up?</span> 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isHovered = hoveredCard === index;
            const isLiked = likedCards.has(index);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer ${
                  isHovered ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative p-6 text-center">
                  {/* Emoji Badge */}
                  <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                    {benefit.emoji}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(index)}
                    className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-300 ${
                      isLiked ? 'bg-red-500 text-white scale-110' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  </button>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                    isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  }`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>

                  {/* Interactive Progress Bar */}
                  <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${benefit.color} transition-all duration-1000 ${
                        isHovered ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Start Your Journey? 🎉
              </h3>
              <p className="text-gray-600 mb-4">Join 2000+ students who chose the fun way to learn!</p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Let's Go! 🚀
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
