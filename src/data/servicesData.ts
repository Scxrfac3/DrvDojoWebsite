import {
  Award,
  Clock,
  Car,
  Users,
  Flame,
  Zap,
  Wrench,
} from "lucide-react";

// Define the type for service data
export interface ServiceData {
  id: string;
  title: string;
  price: string;
  priceUnit: string;
  shortDescription: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  buttonClass: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  features: string[];
  description: string[];
  outcomes: string[];
  audience: string[];
  curriculum: {
    title: string;
    duration: string;
    lessons: number;
    topics: string[];
  }[];
  reviews: {
    name: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

// Services Data
export const servicesData: ServiceData[] = [
  {
    id: "beginner",
    title: "Beginner Course",
    price: "£35",
    priceUnit: "/hour",
    shortDescription:
      "Perfect for first-time drivers with no previous experience",
    image: "/images/certifications/8.png",
    icon: Car,
    colorClass: "bg-blue-600/30 text-blue-400",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    category: "beginner",
    duration: "Flexible hours",
    students: 1500,
    rating: 4.8,
    features: [
      "Fundamentals of vehicle control",
      "Basic maneuvers and road positioning",
      "Introduction to road signs and rules",
      "Confidence building in quiet areas",
      "Personalized learning pace",
    ],
    description: [
      "Our Beginner Course is designed specifically for those who have never sat behind the wheel before. We understand that starting your driving journey can be both exciting and nerve-wracking, which is why our patient instructors create a supportive environment where you can build confidence at your own pace.",
      "This course focuses on developing the fundamental skills needed to control the vehicle safely. You'll start in quiet, low-traffic areas where you can get comfortable with the basic controls and gradually progress to more challenging scenarios as your confidence grows.",
      "Each lesson is tailored to your individual learning style and progress, ensuring you develop solid foundations for your driving future.",
    ],
    outcomes: [
      "Confidently control the vehicle's basic functions",
      "Perform essential maneuvers like turning and reversing",
      "Understand and respond to road signs and markings",
      "Develop spatial awareness and road positioning",
      "Build the confidence to progress to busier roads",
    ],
    audience: [
      "Complete beginners with no driving experience",
      "Nervous first-time drivers who need extra support",
      "Young learners (17+) starting their driving journey",
      "Anyone wanting to build confidence before committing to a full course",
    ],
    curriculum: [
      {
        title: "Module 1: Getting Started",
        duration: "2-4 hours",
        lessons: 2,
        topics: [
          "Introduction to the vehicle controls",
          "Pre-driving checks and adjustments",
          "Starting, moving off and stopping safely",
          "Understanding the clutch control (manual only)",
        ],
      },
      {
        title: "Module 2: Basic Maneuvers",
        duration: "4-6 hours",
        lessons: 3,
        topics: [
          "Steering techniques and control",
          "Changing gears smoothly (manual only)",
          "Reversing in a straight line",
          "Turning left and right at junctions",
        ],
      },
      {
        title: "Module 3: Road Awareness",
        duration: "4-6 hours",
        lessons: 3,
        topics: [
          "Understanding road markings and signs",
          "Introduction to the Highway Code",
          "Developing observation skills",
          "Dealing with simple junctions",
        ],
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2 months ago",
        comment:
          "As someone who was terrified of driving, my instructor made me feel so comfortable! Started from absolute zero and now I'm confidently driving on main roads. Highly recommend for nervous beginners!",
      },
      {
        name: "James Wilson",
        rating: 5,
        date: "3 months ago",
        comment:
          "Great experience for a first-time driver. My instructor was patient and explained everything clearly. The step-by-step approach really helped build my confidence.",
      },
      {
        name: "Aisha Patel",
        rating: 4,
        date: "1 month ago",
        comment:
          "Really good for complete beginners. I was nervous at first but by the end of my first lesson I felt much more confident. The instructor adapted to my learning pace perfectly.",
      },
    ],
  },
  {
    id: "standard",
    title: "Standard Package",
    price: "£320",
    priceUnit: "/10 hours",
    shortDescription:
      "Our most popular package with structured learning and progress tracking",
    image: "/images/certifications/C7.png",
    icon: Award,
    colorClass: "bg-purple-600/30 text-purple-400",
    buttonClass:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    category: "intermediate",
    duration: "10 hours",
    students: 2800,
    rating: 4.9,
    features: [
      "Save £30 compared to hourly rate",
      "Structured learning plan tailored to you",
      "Progress tracking after each lesson",
      "Advanced maneuvers and techniques",
      "Busy road and junction navigation",
      "Mock test preparation",
    ],
    description: [
      "Our Standard Package is our most popular option, offering a comprehensive and structured approach to learning to drive. This 10-hour package is perfect for those who have some basic experience or have completed our Beginner Course and are ready to develop their skills further.",
      "With this package, you'll receive a personalized learning plan that focuses on developing your skills progressively. Your instructor will track your progress after each lesson, ensuring you're constantly improving and addressing any areas that need extra attention.",
      "By the end of this package, you'll have covered all the essential skills needed for the practical driving test, from basic maneuvers to more complex road situations and junctions.",
    ],
    outcomes: [
      "Navigate complex junctions and roundabouts confidently",
      "Master advanced maneuvers like parallel parking and bay parking",
      "Develop defensive driving techniques",
      "Handle busy urban roads and dual carriageways",
      "Prepare effectively for the practical driving test",
      "Gain confidence in independent driving",
    ],
    audience: [
      "Drivers who have completed a beginner course",
      "Those with some driving experience looking to progress",
      "Learners preparing for their practical driving test",
      "Drivers looking for a structured learning experience",
    ],
    curriculum: [
      {
        title: "Module 1: Building on Basics",
        duration: "2 hours",
        lessons: 1,
        topics: [
          "Assessment of current skill level",
          "Refining basic control skills",
          "Developing observation techniques",
          "Introduction to busier roads",
        ],
      },
      {
        title: "Module 2: Advanced Maneuvers",
        duration: "4 hours",
        lessons: 2,
        topics: [
          "Parallel parking techniques",
          "Bay parking (forward and reverse)",
          "Emergency stops and hazard awareness",
          "Reversing around corners",
        ],
      },
      {
        title: "Module 3: Complex Road Situations",
        duration: "2 hours",
        lessons: 1,
        topics: [
          "Multi-lane roundabouts",
          "Complex junction management",
          "Dual carriageway driving",
          "Lane changing and overtaking",
        ],
      },
      {
        title: "Module 4: Test Preparation",
        duration: "2 hours",
        lessons: 1,
        topics: [
          "Mock test practice",
          "Independent driving practice",
          "Common test routes in your area",
          "Managing test anxiety",
        ],
      },
    ],
    reviews: [
      {
        name: "Michael Chen",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "The 10-hour package was perfect for me. My instructor created a personalized plan that focused on my weak areas. Passed my test first time with only 2 minor faults!",
      },
      {
        name: "Emma Thompson",
        rating: 5,
        date: "1 month ago",
        comment:
          "Excellent structured approach. I loved getting the progress report after each lesson so I knew exactly what to work on. The mock tests were particularly helpful for building confidence.",
      },
      {
        name: "David Oyelowo",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Great value for money compared to individual lessons. The instructor was very knowledgeable and helped me improve quickly. Would definitely recommend this package.",
      },
    ],
  },
  {
    id: "intensive",
    title: "Intensive Course",
    price: "£600",
    priceUnit: "/20 hours",
    shortDescription:
      "Fast-track your learning with our comprehensive intensive course",
    image: "/images/certifications/9.png",
    icon: Zap,
    colorClass: "bg-green-600/30 text-green-400",
    buttonClass:
      "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
    category: "advanced",
    duration: "20 hours",
    students: 1200,
    rating: 4.7,
    features: [
      "Comprehensive training in a condensed timeframe",
      "All standard package features included",
      "Test routes practice and mock tests",
      "Night and adverse weather driving",
      "Theory test support materials",
      "Flexible scheduling options",
    ],
    description: [
      "Our Intensive Course is designed for those who want to learn to drive quickly and efficiently. This comprehensive 20-hour package covers everything you need to know to pass your test, from basic controls to advanced maneuvers and test preparation.",
      "Perfect for those with a deadline such as a job opportunity or university start date, this course can be completed in as little as one week or spread out according to your availability.",
      "You'll receive the same high-quality instruction as our other packages, but in a more concentrated format to help you progress rapidly while ensuring you develop safe driving habits for life.",
    ],
    outcomes: [
      "Develop all the skills needed to pass your driving test",
      "Gain confidence in a wide range of driving conditions",
      "Learn to handle complex road situations safely",
      "Master all required test maneuvers",
      "Develop effective strategies for managing test anxiety",
      "Become a safe, confident driver in a shorter timeframe",
    ],
    audience: [
      "Students with upcoming test dates",
      "People who need to learn quickly for work or education",
      "Those who prefer an immersive learning experience",
      "Learners who have some previous experience and want to progress rapidly",
    ],
    curriculum: [
      {
        title: "Module 1: Foundations & Assessment",
        duration: "4 hours",
        lessons: 2,
        topics: [
          "Skill assessment and personalized plan creation",
          "Vehicle control fundamentals review",
          "Basic maneuvers practice",
          "Urban driving introduction",
        ],
      },
      {
        title: "Module 2: Intermediate Skills",
        duration: "6 hours",
        lessons: 3,
        topics: [
          "Complex junction navigation",
          "Roundabout techniques",
          "Lane discipline and positioning",
          "Speed management in various environments",
        ],
      },
      {
        title: "Module 3: Advanced Techniques",
        duration: "6 hours",
        lessons: 3,
        topics: [
          "All required test maneuvers",
          "Dual carriageway and high-speed road driving",
          "Independent driving practice",
          "Hazard perception and defensive driving",
        ],
      },
      {
        title: "Module 4: Test Preparation",
        duration: "4 hours",
        lessons: 2,
        topics: [
          "Full mock driving tests",
          "Test route familiarity",
          "Common test mistakes and how to avoid them",
          "Final assessment and test readiness evaluation",
        ],
      },
    ],
    reviews: [
      {
        name: "Jaswinder Patel",
        rating: 5,
        date: "1 month ago",
        comment:
          "I needed to pass my test quickly for a new job and the intensive course was perfect. Completed it in 8 days and passed first time! The instructor was fantastic and really helped me build confidence quickly.",
      },
      {
        name: "Sophie Williams",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great course that helped me pass after failing with another instructor. The intensive lessons worked well for me as I could fully focus on driving without forgetting things between lessons.",
      },
      {
        name: "Omar Hassan",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Excellent experience! I was nervous about the intensive approach but it actually helped me progress much faster than weekly lessons. The instructor was patient and professional throughout.",
      },
    ],
  },
  {
    id: "pass-plus",
    title: "Pass Plus Course",
    price: "£200",
    priceUnit: "/course",
    shortDescription:
      "Build confidence and skills after passing your test with this government-recognized course",
    image: "/images/certifications/PassPlus.png",
    icon: Award,
    colorClass: "bg-yellow-600/30 text-yellow-400",
    buttonClass:
      "bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700",
    category: "post-test",
    duration: "6 hours",
    students: 850,
    rating: 4.8,
    features: [
      "Government-recognized certification",
      "Potential insurance discounts",
      "Motorway driving experience",
      "Rural and urban driving skills",
      "Night and adverse weather driving",
      "Advanced hazard perception training",
    ],
    description: [
      "The Pass Plus course is designed for newly qualified drivers who want to build their confidence and skills after passing their test. This government-recognized course covers areas not fully explored in standard driving lessons, such as motorway driving and handling difficult weather conditions.",
      "Many insurance companies offer discounts to drivers who have completed the Pass Plus certification, potentially saving you money on your insurance premiums while making you a safer, more confident driver.",
      "The course consists of six modules covering different driving environments and conditions, providing you with valuable experience that will benefit you throughout your driving career.",
    ],
    outcomes: [
      "Gain confidence driving on motorways and dual carriageways",
      "Develop skills for driving in adverse weather conditions",
      "Improve your ability to handle busy urban traffic",
      "Learn advanced techniques for rural road driving",
      "Enhance your night driving capabilities",
      "Receive a certificate that may help reduce insurance costs",
    ],
    audience: [
      "Newly qualified drivers who want to build confidence",
      "Those who want to gain experience in a variety of driving conditions",
      "Drivers looking to potentially reduce their insurance premiums",
      "Anyone wanting to become a safer, more skilled driver",
    ],
    curriculum: [
      {
        title: "Module 1: Town Driving",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Advanced urban driving techniques",
          "Complex junction management",
          "Busy traffic navigation",
          "Pedestrian and cyclist awareness",
        ],
      },
      {
        title: "Module 2: Rural Roads",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Narrow road techniques",
          "Dealing with unexpected hazards",
          "Speed management on country roads",
          "Overtaking safely when appropriate",
        ],
      },
      {
        title: "Module 3: Dual Carriageways",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "High-speed road confidence",
          "Lane discipline and positioning",
          "Safe joining and exiting techniques",
          "Maintaining appropriate following distances",
        ],
      },
      {
        title: "Module 4: Motorways",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Motorway regulations and signage",
          "Safe lane changing and overtaking",
          "Service area and exit navigation",
          "Dealing with heavy traffic and roadworks",
        ],
      },
      {
        title: "Module 5: Night Driving",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Effective use of vehicle lights",
          "Dealing with glare and reduced visibility",
          "Distance judgment in darkness",
          "Identifying hazards at night",
        ],
      },
      {
        title: "Module 6: Adverse Weather",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Driving in rain, fog, and snow",
          "Handling skids and reduced traction",
          "Adjusting stopping distances",
          "Emergency weather situation management",
        ],
      },
    ],
    reviews: [
      {
        name: "Lucy Chen",
        rating: 5,
        date: "2 months ago",
        comment:
          "The Pass Plus course was exactly what I needed after passing my test. I was nervous about motorways but now feel completely confident. My insurance company also gave me a 15% discount!",
      },
      {
        name: "Tom Jackson",
        rating: 5,
        date: "6 weeks ago",
        comment:
          "Excellent course that covers all the things you don't get enough practice with during regular lessons. The night driving and motorway modules were particularly useful.",
      },
      {
        name: "Zara Ahmed",
        rating: 4,
        date: "1 month ago",
        comment:
          "Really worthwhile investment. I feel much more confident now, especially in bad weather. The instructor was patient and gave lots of practical advice I use every day.",
      },
    ],
  },
  {
    id: "dual-control",
    title: "Dual Control Installation",
    price: "£450",
    priceUnit: "/installation",
    shortDescription:
      "Professional He-Man dual control systems installed by certified technicians",
    image: "https://images.unsplash.com/photo-1581093458791-9d09a5c0d6e5?w=800&q=80",
    icon: Wrench,
    colorClass: "bg-blue-600/30 text-blue-400",
    buttonClass:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    category: "instructor-services",
    duration: "4-6 hours",
    students: 350,
    rating: 4.9,
    features: [
      "Official He-Man partner",
      "Same-day installation available",
      "DVSA approved systems",
      "2-year warranty on parts and labor",
      "Maintenance and repair services",
      "East London, Ilford, and Romford coverage"
    ],
    description: [
      "Our Dual Control Installation service is designed specifically for driving instructors who need reliable, professional-grade dual control systems in their vehicles. As an official He-Man partner, we provide top-quality installations that meet all DVSA standards.",
      "Our experienced technicians can complete most installations in 4-6 hours, minimizing disruption to your business. We offer same-day service throughout East London, Ilford, and Romford areas.",
      "All installations come with a comprehensive 2-year warranty covering both parts and labor, giving you peace of mind and ensuring your teaching vehicle remains in perfect working condition."
    ],
    outcomes: [
      "Professional-grade dual control system fully installed",
      "DVSA-compliant teaching vehicle",
      "Enhanced safety for instructor and student",
      "Reliable operation with 2-year warranty coverage",
      "Minimal business disruption with same-day service",
      "Access to ongoing maintenance and support"
    ],
    audience: [
      "Qualified driving instructors",
      "Driving schools expanding their fleet",
      "Instructors upgrading to newer vehicles",
      "Trainee instructors preparing for qualification"
    ],
    curriculum: [
      {
        title: "Initial Assessment",
        duration: "30 minutes",
        lessons: 1,
        topics: [
          "Vehicle compatibility check",
          "System type selection",
          "Installation planning",
          "Scheduling and logistics"
        ],
      },
      {
        title: "Installation Process",
        duration: "3-5 hours",
        lessons: 1,
        topics: [
          "System component preparation",
          "Vehicle interior preparation",
          "Primary control installation",
          "Secondary systems integration"
        ],
      },
      {
        title: "Testing and Handover",
        duration: "30-60 minutes",
        lessons: 1,
        topics: [
          "Comprehensive system testing",
          "Safety verification",
          "Instructor orientation and training",
          "Documentation and warranty registration"
        ],
      }
    ],
    reviews: [
      {
        name: "David Miller",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Excellent service from start to finish. The technician was professional and completed the installation quickly. The dual controls work perfectly and the quality is outstanding. Highly recommend!",
      },
      {
        name: "Sarah Ahmed",
        rating: 5,
        date: "1 month ago",
        comment:
          "As a new instructor, I was worried about getting the right setup. The team was incredibly helpful, explaining everything and completing the installation the same day I called. Great service!",
      },
      {
        name: "Michael Chen",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Professional installation and good quality He-Man controls. The only reason for 4 stars instead of 5 is that the appointment ran a bit over the estimated time, but the quality of work was excellent."
      }
    ],
  },
];
