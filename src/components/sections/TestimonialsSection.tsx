import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  name?: string;
  role?: string;
  quote?: string;
  rating?: number;
  image?: string;
}

const Testimonial = ({
  name = "Sarah Johnson",
  role = "New Driver",
  quote = "Drive Dojo helped me pass my test on the first try! The instructors were patient and professional.",
  rating = 5,
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
}: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={image}
            alt={name}
            className="h-14 w-14 rounded-full object-cover border-2 border-blue-100"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
          <div className="flex mt-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex-grow">
        <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-100 -translate-x-2 -translate-y-2" />
        <p className="text-gray-600 italic relative z-10 pl-2">{quote}</p>
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Jamaima G",
      role: "New Driver",
      quote:
        "I just passed my driving test on the first try with only 1 minor fault, thanks to The Pass Master Course! My instructor taught me helpful techniques and was extremely patient throughout my lessons. They provided honest feedback.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jamaima",
    },
    {
      name: "Mohammad Y",
      role: "Student",
      quote:
        "Passed my test first time! The instructor is an excellent teacher - friendly, motivational and patient but also methodical. Explains things clearly and is very helpful. I learned so much even with previous experience. Highly recommend!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohammad",
    },
    {
      name: "Aline H",
      role: "New Driver",
      quote:
        "Can't recommend Drive Dojo enough! Their patience and expert knowledge of the local driving routes helped me pass my test on the first try. I had lessons with other instructors, but none compared to this calm and encouraging teaching style.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aline",
    },
    {
      name: "James K",
      role: "Student",
      quote:
        "Choosing this instructor was the best decision for my driving lessons. Their approach to teaching was perfect, and they gave me the confidence I needed to pass my test first time. They know the local test routes inside out!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jamesk",
    },
    {
      name: "Wumi A",
      role: "Anxious Driver",
      quote:
        "Despite my initial nerves, I passed my driving test with only 4 minor faults! The focus on safe and defensive driving didn't just prepare me for the test, but for a lifetime of safe driving. Best decision ever!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=wumi",
    },
    {
      name: "Anonymous",
      role: "Student",
      quote:
        "After trying two different driving schools, I finally found Drive Dojo, and it was the best decision I made. The instructor was incredibly patient and explained everything clearly, focusing on the areas I needed most help with. Thanks to their guidance, I passed my test! 💯",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=anonymous",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our successful students
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
                >
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center space-x-8 md:space-x-16 py-6 px-8 bg-white rounded-xl shadow-md">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                98%
              </p>
              <p className="text-sm text-gray-500">Pass Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                2,500+
              </p>
              <p className="text-sm text-gray-500">Students Taught</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                4.9
              </p>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
