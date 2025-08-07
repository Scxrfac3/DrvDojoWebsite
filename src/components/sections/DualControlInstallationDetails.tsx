import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Wrench,
  AlertCircle,
  Award,
  Calendar,
  Phone,
  Car,
  MessageSquare,
  Search,
  Lock,
  Image,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import FAQSection from "./FAQSection";
import supabase from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const DualControlInstallationDetails = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    questions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { toast } = useToast();

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.phone || !formData.vehicle) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Submit to Supabase
      const { error } = await supabase.from("dual_control_requests").insert([
        {
          name: formData.name,
          phone: formData.phone,
          vehicle: formData.vehicle,
          questions: formData.questions || null,
        },
      ]);

      if (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
        toast({
          title: "Submission failed",
          description:
            "There was a problem submitting your request. Please try again.",
          variant: "destructive",
        });
      } else {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          phone: "",
          vehicle: "",
          questions: "",
        });
        toast({
          title: "Request submitted",
          description:
            "We've received your installation request and will contact you shortly.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      toast({
        title: "Submission failed",
        description:
          "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - Main content */}
          <div className="lg:w-2/3">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center mb-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                Official He-Man Partner
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Level Up Your Teaching Game! ✨
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">
                Ready to Transform Your Ride? 🚀
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join the squad of successful driving instructors! Get your dual
                controls installed by the pros. 💯
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-full mr-3">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Quick Installation ⚡
                    </h3>
                  </div>
                  <p className="text-white/80">
                    Same-day service - back on the road ASAP!
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-full mr-3">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Flexible Scheduling 📅
                    </h3>
                  </div>
                  <p className="text-white/80">
                    Book a time that works for you!
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500/20 p-3 rounded-full mr-3">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">24/7 Support 🆘</h3>
                  </div>
                  <p className="text-white/80">We've got your back, anytime!</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg group relative overflow-hidden"
                  onClick={() => (window.location.href = "/booking")}
                >
                  Book Installation - £450
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.2 }}
                  />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => (window.location.href = "/services")}
                >
                  View Services
                </Button>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    East London (E)
                  </h4>
                  <p className="text-white/80">Same-day service available</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <h4 className="text-xl font-semibold mb-2">Ilford (IG)</h4>
                  <p className="text-white/80">Same-day service available</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <h4 className="text-xl font-semibold mb-2">Romford (RM)</h4>
                  <p className="text-white/80">Same-day service available</p>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              className="mb-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Book Your Installation 🔧
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Your Name 👋
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phone Number 📱
                  </label>
                  <input
                    type="text"
                    placeholder="07123 456789"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Your Ride 🚗
                  </label>
                  <input
                    type="text"
                    placeholder="Toyota Yaris 2022"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    value={formData.vehicle}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicle: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Any Questions? 💭
                  </label>
                  <input
                    type="text"
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    value={formData.questions}
                    onChange={(e) =>
                      setFormData({ ...formData, questions: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-medium shadow-lg group relative overflow-hidden"
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitStatus === "success"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Request
                      Submitted
                    </>
                  ) : (
                    <>Book Now</>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.2 }}
                  />
                </Button>
                {submitStatus === "error" && (
                  <div className="text-center text-sm text-red-300 flex items-center justify-center">
                    <XCircle className="h-4 w-4 mr-1" /> There was an error
                    submitting your request. Please try again.
                  </div>
                )}
                <div className="text-center text-sm text-white/60 flex items-center justify-center">
                  <Lock className="h-3 w-3 mr-1" /> Your data is secure &
                  protected
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">What Our Clients Say</h3>
              <p className="text-white/70 mb-6">
                Trusted by driving instructors across East London and Essex
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-white/90 mb-4">
                    The team at East London Dual Controls did an amazing job
                    installing my dual control system. Professional, quick, and
                    reliable service.
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <span className="font-bold">JS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Smith</h4>
                      <p className="text-sm text-white/70">
                        Driving Instructor, Romford
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-white/90 mb-4">
                    We've been using their services for our entire fleet. The
                    quality of work and attention to detail is outstanding.
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <span className="font-bold">SW</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Williams</h4>
                      <p className="text-sm text-white/70">
                        Driving School Owner, Ilford
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-white/90 mb-4">
                    Quick response times and excellent emergency support.
                    They've helped me multiple times when I needed urgent
                    repairs.
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <span className="font-bold">DB</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">David Brown</h4>
                      <p className="text-sm text-white/70">
                        Independent Instructor, Chelmsford
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gallery Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-full mr-3">
                  <Image className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Installation Gallery</h3>
              </div>
              <p className="text-white/90 mb-6">
                Check out our professional dual control installations. Quality
                work by expert technicians.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Gallery images */}
                <div className="relative group overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                    alt="Dual control installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      He-Man dual controls installation
                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                    alt="Dual control installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      Professional installation service
                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80"
                    alt="Dual control installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      Quality dual control system
                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80"
                    alt="Dual control installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      Instructor vehicle setup
                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
                    alt="Dual control installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      Completed installation
                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
                    alt="Dual control installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">
                      Expert technician at work
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <FAQSection
              title="Frequently Asked Questions"
              className="mb-12 text-white"
              faqs={[
                {
                  question: "What brand of dual controls do you install?",
                  answer:
                    "We exclusively install He-Man dual controls, which are the industry standard for quality and reliability. These controls are DVSA approved and trusted by driving instructors across the UK.",
                  category: "Installation",
                },
                {
                  question: "How much does installation cost?",
                  answer:
                    "Our standard installation package costs £450. This includes the complete He-Man dual control system, professional installation, and a 2-year warranty. We also offer maintenance packages starting from £99.",
                  category: "Pricing",
                },
                {
                  question: "Which areas do you cover?",
                  answer:
                    "We provide installation services throughout East London and Essex, including Romford, Ilford, and surrounding areas. We offer same-day service in these locations, and can travel further for an additional fee.",
                  category: "Coverage",
                },
                {
                  question: "How long does installation take?",
                  answer:
                    "A standard installation typically takes 4-6 hours to complete. We work efficiently to minimize downtime for your vehicle, and in most cases, you can drive away the same day.",
                  category: "Installation",
                },
                {
                  question: "Do you offer emergency support?",
                  answer:
                    "Yes, we provide 24/7 emergency support for all our customers. If you experience any issues with your dual controls, our technicians are available to help, even outside normal business hours.",
                  category: "Support",
                },
                {
                  question: "What warranty do you offer?",
                  answer:
                    "All our installations come with a comprehensive 2-year warranty that covers both parts and labor. Extended warranty options are also available for additional peace of mind.",
                  category: "Warranty",
                },
                {
                  question: "Can dual controls be installed in any vehicle?",
                  answer:
                    "He-Man dual controls can be installed in most popular vehicle models used for driving instruction. However, some specialized or very new vehicles may require custom solutions. Contact us with your specific vehicle details for confirmation.",
                  category: "Installation",
                },
                {
                  question: "Do I need to book in advance?",
                  answer:
                    "While we do offer same-day service when available, we recommend booking at least 3-5 days in advance to secure your preferred date and time, especially during busy periods.",
                  category: "Booking",
                },
              ]}
            />
          </div>

          {/* Right column - Service packages */}
          <div className="lg:w-1/3">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl relative mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rotate-12 flex items-end justify-start pb-2 pl-2 text-white font-bold">
                <span>Popular</span>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-orange-300 mb-2">
                  Most Popular 🔥
                </div>
                <h3 className="text-xl font-bold mb-2">
                  He-Man Dual Control Installation
                </h3>
                <p className="text-white/80 mb-4">
                  Level up your instructor game with pro He-Man dual controls.
                  Quick install, zero hassle! 🚀
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Same-day installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>DVSA approved</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>2-year warranty</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>4-6 hours</span>
                  </li>
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold">£450</div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 group relative overflow-hidden"
                  onClick={() => (window.location.href = "/booking")}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.2 }}
                  />
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Additional Services</h3>

                <div className="space-y-4">
                  <div className="border-b border-white/20 pb-4">
                    <h4 className="font-semibold mb-1">
                      Maintenance & Repairs
                    </h4>
                    <p className="text-sm text-white/70 mb-2">
                      Keep your controls in perfect condition. Quick fixes, no
                      drama! 🛠️
                    </p>
                    <ul className="text-sm text-white/80 mb-2 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>24/7 emergency support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Genuine parts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Expert techs</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>1-3 hours</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-blue-300">From £99</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => (window.location.href = "/booking")}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <div className="border-b border-white/20 pb-4">
                    <h4 className="font-semibold mb-1">System Upgrades</h4>
                    <p className="text-sm text-white/70 mb-2">
                      Stay ahead with the latest He-Man tech. Future-proof your
                      ride! ⚡
                    </p>
                    <ul className="text-sm text-white/80 mb-2 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Latest tech</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Enhanced safety</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Better control</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>2-4 hours</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-blue-300">From £299</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => (window.location.href = "/booking")}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <div className="pb-2">
                    <h4 className="font-semibold mb-1">Safety Inspections</h4>
                    <p className="text-sm text-white/70 mb-2">
                      Quick check-ups to keep you safe and certified. Easy
                      peasy! ✨
                    </p>
                    <ul className="text-sm text-white/80 mb-2 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>DVSA compliance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Digital report</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Instant certificate</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>1 hour</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-blue-300">From £79</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => (window.location.href = "/booking")}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualControlInstallationDetails;
