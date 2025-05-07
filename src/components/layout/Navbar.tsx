import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Rocket } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`w-full fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 shadow-lg" : transparent ? "bg-transparent" : "bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="/images/certifications/DDojo.png"
            alt="Drive Dojo Logo"
            className="h-10 w-auto"
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
                  className="px-4 py-2 text-base font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white hover:text-blue-300 text-base font-semibold">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-slate-800/95 border border-slate-700 p-4 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <Link
                      to="/services"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        All Services
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        View our complete range of driving lessons
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/goodmayes"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Goodmayes
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Goodmayes
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/barking"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Barking
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Barking
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/romford"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Romford
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Romford
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/isle-of-dogs"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Isle of Dogs
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Isle of Dogs
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/east-ham"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        East Ham
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in East Ham
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/forest-gate"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Forest Gate
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Forest Gate
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/canning-town"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Canning Town
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Canning Town
                      </div>
                    </Link>
                    <Link
                      to="/driving-lessons/docklands"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-white">
                        Docklands
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Driving lessons in Docklands
                      </div>
                    </Link>
                    <Link
                      to="/dual-control-installation"
                      className="group flex flex-col gap-1 rounded-md p-3 hover:bg-slate-700/50 transition-colors bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/30"
                    >
                      <div className="text-sm font-medium text-white flex items-center">
                        <span className="text-yellow-400 mr-1">🔧</span> Dual
                        Control Installation
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        Official He-Man partner for instructors
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about"
                  className="px-4 py-2 text-base font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-base font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/blog"
                  className="px-4 py-2 text-base font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <span className="px-4 py-2 text-base font-semibold text-gray-400 flex items-center cursor-not-allowed">
                  Student Portal
                  <span className="ml-2 text-xs bg-blue-500/30 px-1.5 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </span>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-4 flex items-center space-x-2">
            <motion.div
              className="text-xs bg-slate-800/50 px-2 py-1 rounded-full flex items-center space-x-1 text-slate-400"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(30, 41, 59, 0.7)",
              }}
            >
              <Globe className="h-3 w-3 mr-1" />
              <span>EN</span>
            </motion.div>

            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md group"
              asChild
            >
              <Link to="/booking" className="flex items-center">
                Book Now
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
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
            className="md:hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-3 py-4">
                <Link
                  to="/"
                  className="px-4 py-2 text-base font-semibold text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/services"
                  className="px-4 py-2 text-base font-semibold text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/about"
                  className="px-4 py-2 text-base font-semibold text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="px-4 py-2 text-base font-semibold text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  to="/blog"
                  className="px-4 py-2 text-base font-semibold text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>

                <span className="px-4 py-2 text-base font-semibold text-gray-400 flex items-center cursor-not-allowed">
                  Student Portal
                  <span className="ml-2 text-xs bg-blue-500/30 px-1.5 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </span>

                <div className="pt-2">
                  <Button
                    className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md group"
                    asChild
                  >
                    <Link
                      to="/booking"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center"
                    >
                      Book Now
                      <motion.span
                        className="ml-2 inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </Button>
                </div>

                <div className="flex justify-center mt-4">
                  <motion.div
                    className="text-xs bg-slate-800/50 px-2 py-1 rounded-full flex items-center space-x-1 text-slate-400"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(30, 41, 59, 0.7)",
                    }}
                  >
                    <Rocket className="h-3 w-3 mr-1" />
                    <span>London Based</span>
                  </motion.div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
