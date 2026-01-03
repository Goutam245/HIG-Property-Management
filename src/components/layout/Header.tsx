import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mission & Values", href: "/mission" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary">
              <span className="text-primary-foreground font-display font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                HIG
              </span>
              <span className={`text-xs font-body tracking-wider uppercase transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}>
                Property Management
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? isScrolled
                      ? "text-primary bg-primary/10"
                      : "text-primary-foreground bg-primary-foreground/20"
                    : isScrolled
                    ? "text-foreground hover:text-primary hover:bg-muted"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+1-800-555-0123"
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-accent" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>24/7 Support</span>
            </a>
            <Button
              asChild
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              className="hidden md:flex"
            >
              <Link to="/contact">Request Proposal</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="section-container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <a
                  href="tel:+1-800-555-0123"
                  className="flex items-center gap-2 px-4 py-2 text-accent font-medium"
                >
                  <Phone className="w-4 h-4" />
                  24/7 Emergency: (800) 555-0123
                </a>
                <Button asChild variant="default" className="w-full">
                  <Link to="/contact">Request Management Proposal</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
