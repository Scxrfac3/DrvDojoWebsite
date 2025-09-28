import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart, MessageCircle, Trophy } from 'lucide-react';
import ElectricBorder from '../ui/ElectricBorder';

const testimonials = [
  {
    id: 1,
    name: "Jamaima G",
    role: "New Driver",
    quote:
      "I just passed my driving test on the first try with only 1 minor fault, thanks to Mamunur! My instructor taught me helpful techniques and was extremely patient throughout my lessons. They provided honest feedback.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jamaima",
    emoji: "🎉",
    testResult: "PASSED ✅",
    likes: 127
  },
  {
    id: 2,
    name: "Mohammad Y",
    role: "Student",
    quote:
      "Passed my test first time! The instructor is an excellent teacher - friendly, motivational and patient but also methodical. Explains things clearly and is very helpful. I learned so much even with previous experience. Highly recommend!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohammad",
    emoji: "🔥",
    testResult: "PASSED ✅",
    likes: 89
  },
  {
    id: 3,
    name: "Aline H",
    role: "New Driver",
    quote:
      "Can't recommend Drive Dojo enough! Their patience and expert knowledge of the local driving routes helped me pass my test on the first try. I had lessons with other instructors, but none compared to this calm and encouraging teaching style.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aline",
    emoji: "😎",
    testResult: "PASSED ✅",
    likes: 156
  },
  {
    id: 4,
    name: "James K",
    role: "Student",
    quote:
      "Choosing this instructor was the best decision for my driving lessons. Their approach to teaching was perfect, and they gave me the confidence I needed to pass my test first time. They know the local test routes inside out!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jamesk",
    emoji: "💪",
    testResult: "PASSED ✅",
    likes: 203
  },
  {
    id: 5,
    name: "Wumi A",
    role: "Anxious Driver",
    quote:
      "Despite my initial nerves, I passed my driving test with only 4 minor faults! The focus on safe and defensive driving didn't just prepare me for the test, but for a lifetime of safe driving. Best decision ever!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=wumi",
    emoji: "🌟",
    testResult: "PASSED ✅",
    likes: 178
  },
  {
    id: 6,
    name: "Anonymous",
    role: "Student",
    quote:
      "After trying two different driving schools, I finally found Drive Dojo, and it was the best decision I made. The instructor was incredibly patient and explained everything clearly, focusing on the areas I needed most help with. Thanks to their guidance, I passed my test! 💯",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=anonymous",
    emoji: "🚗",
    testResult: "PASSED ✅",
    likes: 145
  },
  {
    id: 7,
    name: "Ibrahim A",
    role: "New Driver",
    quote:
      "After taking a few driving lessons with other schools and not feeling fully satisfied, a friend recommended Driving Dojo—and I'm so glad they did. My instructor, Mamunur, was excellent, and I would gladly recommend him to anyone seeking an efficient, coherent, and strategic driving instructor. He planned each lesson effectively, always focusing on areas where I needed improvement. His teaching techniques were clear and practical, and he used his iPad to visually demonstrate real road situations, which made it much easier to understand and retain key concepts. Overall, a very professional and supportive experience. The cherry on top of the cake being I passed my practical first time! Thanks Mamunur!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ibrahim",
    emoji: "🎓",
    testResult: "PASSED ✅",
    likes: 142
  },
  {
    id: 8,
    name: "Shazil",
    role: "New Driver",
    quote:
      "Great Driving School, The instructor was patient, professional, and made learning enjoyable. Lessons were well-structured and tailored to individual needs. I gained confidence quickly and passed my test on the first try. Highly recommended to anyone looking for expert guidance and a supportive learning environment. Couldn't be happier!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=shazil",
    emoji: "🏆",
    testResult: "PASSED ✅",
    likes: 165
  },
  {
    id: 9,
    name: "Mark W",
    role: "Student",
    quote:
      "I couldn't have asked for a more professional and hardworking driving instructor. Mamunur was very quick to find my weaknesses and turn them around to a high standard. Also, the level of knowledge for test centers and routes is really impressive. Thanks again for all of your efforts.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mark",
    emoji: "👍",
    testResult: "PASSED ✅",
    likes: 131
  },
  {
    id: 10,
    name: "Alexei W.",
    role: "New Driver",
    quote:
      "I begin my driving lessons with Mamunur with no previous knowledge having zero hours of driving lessons or experience. Throughout my lessons I gained all the necessary skills and knowledge to enable me to pass my practical test on the first attempt. Throughout my learning journey I was supported and given clear instructions on what my strengths were and areas that I also needed to improve upon to become a qualified driver. Mamunur style of teaching was very direct and compressive giving me detailed and specific feedback after each lesson. Mamunur was also very flexible in the lesson times planned around my limited availability and going above and beyond to carter to my needs. Mamunur helped manage my anxiety prior to the test in the build up, laying out clearly what I needed to work on and the requirements for me to be able to pass. I was delighted to pass my test on the first attempt. I would highly recommend Mamunur as a driving interaction for all wishing to learn.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alexei",
    emoji: "🚗",
    testResult: "PASSED ✅",
    likes: 187
  }
];

export default function NewTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedTestimonials, setLikedTestimonials] = useState<Set<number>>(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleLike = (testimonialId: number) => {
    const newLiked = new Set(likedTestimonials);
    if (newLiked.has(testimonialId)) {
      newLiked.delete(testimonialId);
    } else {
      newLiked.add(testimonialId);
    }
    setLikedTestimonials(newLiked);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Real Talk from Our 
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> Squad</span> 💬
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - see what our students are saying! 
            <span className="animate-pulse">🌟</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <ElectricBorder color="#FFD700" intensity="high" className="transform transition-all duration-500 hover:scale-105">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Profile Section */}
                    <div className="relative">
                      <div className="relative">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white"
                        />
                        <div className="absolute -top-2 -right-2 text-4xl animate-bounce">
                          {currentTestimonial.emoji}
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {currentTestimonial.testResult}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Rating Stars */}
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-medium">
                        "{currentTestimonial.quote}"
                      </blockquote>

                      {/* User Info */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="font-bold text-gray-900 text-xl">
                            {currentTestimonial.name}
                          </div>
                          <div className="text-gray-500 flex items-center justify-center md:justify-start">
                            <span>{currentTestimonial.role}</span>
                          </div>
                        </div>

                        {/* Interactive Elements */}
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                          <button
                            onClick={() => handleLike(currentTestimonial.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                              likedTestimonials.has(currentTestimonial.id)
                                ? 'bg-red-500 text-white scale-110'
                                : 'bg-gray-100 hover:bg-red-100 text-gray-600'
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${likedTestimonials.has(currentTestimonial.id) ? 'fill-current' : ''}`} />
                            <span className="text-sm font-medium">
                              {likedTestimonials.has(currentTestimonial.id) ? currentTestimonial.likes + 1 : currentTestimonial.likes}
                            </span>
                          </button>
                          <button className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-full transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevious}
              className="bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
            </button>

            {/* Dots Navigation */}
            <div className="flex space-x-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 h-12 bg-slate-800'
                      : 'w-8 h-8 bg-gray-300 hover:bg-gray-400'
                  } rounded-full flex items-center justify-center`}
                >
                  {index === currentIndex && (
                    <span className="text-white font-bold">{index + 1}</span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Auto-play'}
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Want to Join Them? 🚀
              </h3>
              <p className="text-gray-600 mb-4">Start your driving journey today and become our next success story!</p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Book My First Lesson! 
                <span className="ml-2 animate-bounce">🎯</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
