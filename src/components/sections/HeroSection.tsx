import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Zap, Trophy, ArrowRight, Play, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "/images/certifications/explodedMerc.png",
    "/images/certifications/angles.png"
  ];

  const stats = [
    { icon: Star, number: '98%', label: 'Pass Rate', color: 'text-accent-400' },
    { icon: Users, number: '2000+', label: 'Students', color: 'text-primary-300' },
    { icon: Trophy, number: '8+', label: 'Years', color: 'text-secondary-400' },
    { icon: Zap, number: '24hr', label: 'Response', color: 'text-accent-400' }
  ];

  const triggerConfetti = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount,
        startVelocity: randomInRange(50, 100),
        spread: randomInRange(50, 70),
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        }
      });
      confetti({
        particleCount,
        startVelocity: randomInRange(50, 100),
        spread: randomInRange(50, 70),
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        }
      });

      requestAnimationFrame(frame);
    }());
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 animate-fade-in">
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent animate-gradient">
                Drive
              </span>
              <br />
              <span className="text-orange-400 animate-bounce inline-block">Smart</span>
              <span className="text-2xl lg:text-3xl ml-4">🏎️</span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Expert DVSA-approved automatic driving lessons to help you pass first time and drive with confidence.
            </p>

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
              <Link
                to="/services"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-center relative overflow-hidden"
                onClick={triggerConfetti}
              >
                <span className="relative z-10 flex items-center justify-center">
                  🚗 Book Your Automatic Lesson
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link
                to="/services"
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center">
                  💰 View Packages
                  <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-blue-200">2000+ drivers</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-blue-200">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Slideshow */}
          <div className="relative">
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={heroImages[currentImageIndex]}
                  alt="Professional driving instructor in modern training vehicle"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Floating Success Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Pass Rate 🎉</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-xl animate-pulse">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-20 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-xl animate-bounce">
              <span className="text-white font-bold text-sm">DVSA ✓</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>


    </section>
  );

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);
}
