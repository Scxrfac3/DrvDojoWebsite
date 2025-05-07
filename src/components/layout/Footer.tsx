import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Send,
  Globe,
  Music,
  Rocket,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  logo?: string;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  quickLinks?: Array<{
    title: string;
    href: string;
  }>;
  socialLinks?: Array<{
    platform: "facebook" | "instagram" | "twitter" | "youtube" | "tiktok";
    href: string;
  }>;
}

const Footer = ({
  logo = "/favicon.png",
  contactInfo = {
    email: "drivedojo@gmail.com",
    phone: "+44 748 722 8866",
    address: "Goodmayes, Essex",
  },
  quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/about" },
    { title: "FAQ", href: "/about" },
    { title: "Terms & Conditions", href: "/" },
    { title: "Privacy Policy", href: "/" },
    { title: "Careers", href: "/" },
  ],
  socialLinks = [
    { platform: "instagram", href: "https://www.instagram.com/drive.dojo" },
    { platform: "tiktok", href: "https://www.tiktok.com/@drivedojods" },
  ],
}: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      setSubscribeError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
        setEmail("");
      } catch (error) {
        setSubscribeError("An unexpected error occurred. Please try again.");
        console.error("Newsletter subscription error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "tiktok":
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const socialColors = {
    instagram: "from-pink-500 via-purple-500 to-orange-500",
    tiktok: "from-black to-gray-800",
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-4 md:px-8 lg:px-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full">
                <img
                  src="/images/certifications/DDojo.png"
                  alt="Drive Dojo Logo"
                  className="h-10 w-10"
                />
              </div>
            </motion.div>
            <p className="text-slate-300 text-sm">
              Professional driving instruction with a focus on safety,
              confidence, and skill development. Based in London to bring
              innovation to driver education.
            </p>
            <motion.div
              className="flex items-center space-x-2 text-sm text-blue-300"
              whileHover={{ x: 5 }}
            >
              <Rocket className="h-4 w-4" />
              <span>London Based</span>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Connect With Us
            </h3>
            <ul className="space-y-3 text-slate-300">
              <motion.li
                className="flex items-center space-x-2"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <div className="bg-blue-900/50 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <div className="bg-blue-900/50 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </motion.li>
              <motion.li
                className="flex items-start space-x-2"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <div className="bg-blue-900/50 p-2 rounded-full mt-0.5">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span>{contactInfo.address}</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  onHoverStart={() => setHoveredLink(link.title)}
                  onHoverEnd={() => setHoveredLink(null)}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors flex items-center space-x-1"
                  >
                    <motion.span
                      animate={{
                        rotate:
                          hoveredLink === link.title ? [0, 15, -15, 0] : 0,
                        color:
                          hoveredLink === link.title ? "#60a5fa" : "#cbd5e1",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {hoveredLink === link.title ? "→" : "•"}
                    </motion.span>
                    <span>{link.title}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Get Exclusive Updates
            </h3>
            <p className="text-slate-300 text-sm">
              Subscribe for driving tips, special offers, and early access to
              new features.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 bg-slate-800/50 border-slate-700 focus:border-blue-500 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
              <AnimatePresence>
                {isSubscribed ? (
                  <motion.div
                    className="bg-green-900/50 text-green-300 p-2 rounded-md flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Thanks for subscribing!</span>
                  </motion.div>
                ) : subscribeError ? (
                  <motion.div
                    className="bg-red-900/50 text-red-300 p-2 rounded-md flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <span className="text-sm">{subscribeError}</span>
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-md flex items-center justify-center space-x-2 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center">
                      <span>
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </span>
                      {!isSubmitting && (
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.span>
                      )}
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-white opacity-10"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${socialColors[social.platform]} p-2 rounded-full hover:shadow-lg transition-all duration-300`}
                aria-label={`Follow us on ${social.platform}`}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredSocial(social.platform)}
                onHoverEnd={() => setHoveredSocial(null)}
              >
                <motion.div
                  animate={{
                    rotate: hoveredSocial === social.platform ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {getSocialIcon(social.platform)}
                </motion.div>
              </motion.a>
            ))}
          </div>
          <div className="text-slate-400 text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ color: "#60a5fa" }}
            >
              <Globe className="h-4 w-4" />
              <span>English (UK)</span>
            </motion.div>
            <span>© {new Date().getFullYear()} Drive Dojo Driving School</span>
            <motion.div
              className="text-xs bg-slate-800/50 px-2 py-1 rounded-full flex items-center space-x-1"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(30, 41, 59, 0.7)",
              }}
            >
              <Star className="h-3 w-3 text-yellow-400" />
              <span>London Based</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
