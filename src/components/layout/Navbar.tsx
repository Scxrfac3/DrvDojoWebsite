import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Rocket, Phone, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  logo?: string;
  transparent?: boolean;
}

const Navbar = ({ logo = "/favicon.png", transparent = false }: NavbarProps) => {
  // Force non-transparent background on booking pages
  const isBookingPage = window.location.pathname.startsWith('/booking');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', emoji: '🏠' },
    { name: 'Services', path: '/services', emoji: '💰' },
    { name: 'Automatic Lessons', path: '/automatic-driving-lessons', emoji: '🚗' },
    { name: 'Intensive Courses', path: '/intensive-driving-courses-ilford', emoji: '⚡' },
    { name: 'About', path: '/about', emoji: '👥' },
    { name: 'Contact', path: '/contact', emoji: '📞' },
    { name: 'Blog', path: '/blog', emoji: '📝' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isBookingPage
          ? 'bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10 shadow-xl'
          : transparent ? 'bg-transparent' : 'bg-[#0d0d0d]/90 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center group">
          <motion.img
            src="/images/certifications/DDojo.png"
            alt="Drive Dojo Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="px-3 py-2 text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white hover:text-primary text-base font-medium data-[active]:text-primary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a1a1a]/95 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <Link
                      to="/services"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        All Services
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        View our complete range of driving lessons
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/goodmayes"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Goodmayes
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Goodmayes
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/barking"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Barking
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Barking
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/romford"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Romford
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Romford
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/isle-of-dogs"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Isle of Dogs
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Isle of Dogs
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/east-ham"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        East Ham
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in East Ham
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/forest-gate"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Forest Gate
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Forest Gate
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/canning-town"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Canning Town
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Canning Town
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/docklands"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="text-sm font-medium text-white">
                        Docklands
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Driving lessons in Docklands
                      </div>
                    </Link>
                    <Link
                      to="/dual-control-installation"
                      className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20"
                    >
                      <div className="text-sm font-medium text-white flex items-center">
                        <span className="text-primary mr-1">🔧</span> Dual
                        Control Installation
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        Official He-Man partner for instructors
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about"
                  className="px-3 py-2 text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="px-3 py-2 text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                >
                  Contact
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                    <Link
                      to="/automatic-driving-lessons"
                      className="px-2 py-2 text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                    >
                      Automatic Lessons
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/intensive-driving-courses-ilford"
                      className="px-2 py-2 text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                    >
                      Intensive Courses
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/east-london-automatic"
                      className="px-2 py-2 text-base font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
                    >
                      East London
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/blog"
                      className="px-3 py-2 text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                    >
                      Blog
                    </Link>
                  </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/442012345678"
              className="flex items-center text-green-400 hover:text-green-300 transition-colors group"
            >
              <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="tel:+442012345678"
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <Phone className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              <span className="font-medium">+4474 8722 8866</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 flex items-center"
            >
              <Zap className="h-4 w-4 mr-2" />
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-white/10 bg-[#0d0d0d]/98 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-white bg-primary'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3 text-lg">{item.emoji}</span>
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <a
                    href="https://wa.me/442012345678"
                    className="flex items-center px-4 py-3 text-base font-medium text-green-400 hover:text-green-300 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp 💬
                  </a>
                  <a
                    href="tel:+442012345678"
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +4474 8722 8866
                  </a>
                  <Link
                    to="/contact"
                    className="block mx-4 mt-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:-translate-y-0.5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🚀 Book Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
