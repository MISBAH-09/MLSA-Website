import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Resources", href: "/resources" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window === 'undefined') return location.pathname !== '/';
    return location.pathname !== '/' || window.scrollY > 20;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // ensure initial state matches current scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu asynchronously on location change to avoid sync setState in effect
    if (isMobileMenuOpen) {
      const t = setTimeout(() => setIsMobileMenuOpen(false), 0);
      return () => clearTimeout(t);
    }
    return;
  }, [location, isMobileMenuOpen]);

  useEffect(() => {
    // Ensure header matches route on navigation without causing unnecessary renders
    const desired = location.pathname === '/' ? (window.scrollY > 20) : true;
    if (isScrolled !== desired) {
      setIsScrolled(desired);
    }
  }, [location, isScrolled]);

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-5 text-white"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                MLSA
              </span>
              <span className={`text-xs font-medium ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                COMSATS Lahore
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? (isScrolled ? "text-blue-600 bg-blue-100" : "text-white bg-white/10")
                      : (isScrolled
                          ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                          : "text-white hover:text-white/90 hover:bg-white/10")
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/join"
              className={`px-5 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Join MLSA
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg hover:bg-gray-100 transition ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden"
          >
            <div className="bg-white shadow-lg mx-4 rounded-2xl overflow-hidden">
              <nav className="flex flex-col p-4">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                          isActive
                            ? "text-blue-600 bg-blue-100"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="pt-4 mt-4 border-t flex flex-col gap-2">
                  <Link
                    to="/join"
                    className="w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Join MLSA
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
