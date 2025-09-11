import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Users, Zap, Trophy, ArrowRight, Play, Calendar, Phone, Sparkles, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import PostcodeChecker from "@/components/ui/PostcodeChecker";
import { PostcodeCheckResult } from "@/lib/postcodeChecker";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  onBookLesson?: () => void;
  onCheckPricing?: () => void;
}

const NewHeroSection = ({
  title = "Drive Like a Pro",
  subtitle = "Pass first time with Drive Dojo. Our DVSA-approved instructors are dedicated to helping you achieve your licence goals.",
  ctaPrimaryText = "🚗 Book Your First Lesson",
  ctaSecondaryText = "💰 View Packages",
  onBookLesson = () => (window.location.href = "/booking"),
  onCheckPricing = () => (window.location.href = "/services"),
}: HeroSectionProps) => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [postcodeCheckResult, setPostcodeCheckResult] = useState<PostcodeCheckResult | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const stats = [
    { icon: Star, number: '98%', label: 'Pass Rate', color: 'text-yellow-400' },
    { icon: Users, number: '2000+', label: 'Students', color: 'text-blue-300' },
    { icon: Trophy, number: '8+', label: 'Years', color: 'text-green-400' },
    { icon: Zap, number: '24hr', label: 'Response', color: 'text-orange-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2 animate-pulse" />
                <span className="text-sm font-medium">DVSA Approved ✨</span>
              </div>
              <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                <Zap className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-sm font-medium">Quick Start 🚀</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent">
                Drive Like a
              </span>
              <br />
              <span className="text-orange-400 inline-block">Pro</span>
              <span className="text-2xl lg:text-3xl ml-4">🏎️</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Postcode Checker - Prominently displayed in hero section */}
            <PostcodeChecker
              onPostcodeChecked={setPostcodeCheckResult}
              onLessonSelected={setSelectedLesson}
              className="mb-8"
            />

            {/* Animated Stats */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className={`text-center transition-all duration-500 ${
                        currentStat === index ? 'scale-110 transform' : 'scale-100'
                      }`}
                    >
                      <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color} ${
                        currentStat === index ? 'animate-bounce' : ''
                      }`} />
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {postcodeCheckResult?.isCovered && selectedLesson ? (
                <Link
                  to={`/booking?lesson=${selectedLesson}&postcode=${encodeURIComponent(postcodeCheckResult.postcode || '')}`}
                  className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-center flex items-center justify-center"
                >
                  <span className="flex items-center justify-center">
                    Continue to Booking
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ) : (
                <>
                  <Link
                    to="/booking"
                    className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-center"
                    onClick={triggerConfetti}
                  >
                    <span className="flex items-center justify-center">
                      {ctaPrimaryText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    to="/packages"
                    className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 text-center"
                  >
                    <span className="flex items-center justify-center">
                      {ctaSecondaryText}
                      <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </Link>
                </>
              )}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-blue-200">2000+ happy drivers</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-blue-200">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Video/Image */}
          <div className="relative">
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/certifications/BANNER_MAIN3276.png"
                  alt="Professional driving instructor in modern training vehicle"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                </div>

                {/* Floating Success Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Pass Rate 🎉</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-xl">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-20 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-xl">
              <span className="text-white font-bold text-sm">DVSA ✓</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
