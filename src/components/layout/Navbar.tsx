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
          ? 'bg-gradient-to-r from-white to-sky-100/95 backdrop-blur-md shadow-xl'
          : transparent ? 'bg-transparent' : 'bg-gradient-to-r from-white to-sky-100 shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
                  className="px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-gray-900 hover:text-blue-600 text-base font-semibold">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 border border-gray-200 p-4 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <Link
                      to="/services"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        All Services
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        View our complete range of driving lessons
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/goodmayes"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Goodmayes
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Goodmayes
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/barking"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Barking
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Barking
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/romford"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Romford
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Romford
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/isle-of-dogs"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Isle of Dogs
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Isle of Dogs
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/east-ham"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        East Ham
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in East Ham
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/forest-gate"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Forest Gate
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Forest Gate
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/canning-town"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Canning Town
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Canning Town
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/docklands"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        Docklands
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Driving lessons in Docklands
                      </div>
                    </Link>
                    <Link
                      to="/dual-control-installation"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-gray-100 transition-colors bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/30"
                    >
                      <div className="text-sm font-medium text-gray-900 flex items-center">
                        <span className="text-yellow-400 mr-1">🔧</span> Dual
                        Control Installation
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">
                        Official He-Man partner for instructors
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about"
                  className="px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  Contact
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/automatic-driving-lessons"
                  className="px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  Automatic Lessons
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/intensive-driving-courses-ilford"
                  className="px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  Intensive Courses
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/blog"
                  className="px-3 py-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  Blog
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/442012345678"
              className="flex items-center text-green-600 hover:text-green-700 transition-colors group"
            >
              <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a
              href="tel:+442012345678"
              className="flex items-center text-gray-700 hover:text-blue-700 transition-colors group"
            >
              <Phone className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              <span className="font-semibold">+4474 8722 8866</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
            >
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Book
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-black hover:bg-black/10"
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
            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
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
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3 text-lg">{item.emoji}</span>
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <a
                    href="https://wa.me/442012345678"
                    className="flex items-center px-4 py-3 text-base font-medium text-green-600 hover:text-green-700 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp 💬
                  </a>
                  <a
                    href="tel:+442012345678"
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-700 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    020 1234 5678
                  </a>
                  <Link
                    to="/contact"
                    className="block mx-4 mt-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🚀 Book
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
