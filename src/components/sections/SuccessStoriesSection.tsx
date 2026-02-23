import React, { useState } from 'react';
import { CheckCircle, Calendar, Heart, Trophy, Zap, Star } from 'lucide-react';

const students = [
  {
    name: 'Alex W.',
    testCenter: 'Goodmayes DTC',
    passDate: 'Jan 2024',
    image: '/images/certifications/1.png',
    emoji: '🎉',
    achievement: 'First Time Pass!',
    likes: 89
  },
  {
    name: 'Alina S.',
    testCenter: 'Goodmayes DTC',
    passDate: 'Dec 2024',
    image: '/images/certifications/4.png',
    emoji: '🔥',
    achievement: 'Zero Faults!',
    likes: 156
  },
  {
    name: 'Aimee L.',
    testCenter: 'Goodmayes',
    passDate: 'Jan 2024',
    image: '/images/certifications/5.png',
    emoji: '⚡',
    achievement: 'Intensive Course Win!',
    likes: 203
  },
  {
    name: 'Mark W.',
    testCenter: 'Chingford DTC',
    passDate: 'Feb 2024',
    image: '/images/certifications/12.png',
    emoji: '🌟',
    achievement: 'Nervous to Confident!',
    likes: 127
  },
  {
    name: 'Mao V.',
    testCenter: 'Goodmayes DTC',
    passDate: 'Feb 2025',
    image: '/images/certifications/13.png',
    emoji: '🎯',
    achievement: 'First Attempt!',
    likes: 94
  },
  {
    name: 'Hazel C.',
    testCenter: 'Goodmayes',
    passDate: 'June 2025',
    image: '/images/certifications/11.png',
    emoji: '💫',
    achievement: 'Quick Learner!',
    likes: 178
  }
];

export default function SuccessStoriesSection() {
  const [likedStudents, setLikedStudents] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleLike = (index: number) => {
    const newLiked = new Set(likedStudents);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedStudents(newLiked);
  };

  return (
    <section className="py-20 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-white">
              Hall of Fame
            </span> 🏆
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Check out our recent legends who smashed their driving test!
            <span className="text-primary font-bold"> You could be next!</span> ✨
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => {
            const isHovered = hoveredCard === index;
            const isLiked = likedStudents.has(index);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-[#1a1a1a] backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-500 border border-white/10 group hover:border-primary/30 ${
                  isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
                }`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={student.image}
                    alt={`${student.name} - Passed`}
                    className={`w-full h-64 object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />

                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Success Badge */}
                  <div className="absolute top-4 right-4 bg-success text-white p-3 rounded-full">
                    <CheckCircle className="h-6 w-6" />
                  </div>

                  {/* Emoji */}
                  <div className="absolute top-4 left-4 text-4xl">
                    {student.emoji}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(index)}
                    className={`absolute bottom-4 right-4 p-3 rounded-full transition-all duration-300 ${
                      isLiked
                        ? 'bg-red-500 text-white scale-110'
                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-red-500/50'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>

                  {/* Achievement Badge */}
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {student.achievement}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    {student.name}
                    <Trophy className="h-5 w-5 text-yellow-400 ml-2" />
                  </h3>

                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Passed at {student.testCenter}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span>{student.passDate}</span>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{isLiked ? student.likes + 1 : student.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Success Counter */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-primary px-8 py-4 rounded-xl shadow-glow">
            <Trophy className="h-6 w-6 text-white mr-3" />
            <span className="text-white font-bold text-lg">
              87% Pass Rate - Join Our Success Stories!
            </span>
            <Zap className="h-6 w-6 text-white/80 ml-3" />
          </div>

          <p className="mt-4 text-gray-400">
            🎯 Your success story starts here! 🎯
          </p>
        </div>
      </div>
    </section>
  );
}
