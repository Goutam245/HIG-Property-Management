import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Residential Management",
  "Affordable Housing Compliance",
  "Financial Management",
  "Maintenance & Operations",
  "Tenant Relations",
  "Leasing & Marketing",
];

const certifications = ["HUD Certified", "LIHTC Specialist", "Section 8 Expert", "CPM Certified"];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                <span className="text-primary-foreground font-display font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">HIG</h3>
                <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                  Property Management
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional property management services for affordable housing communities 
              and third-party owners. Excellence in compliance, operations, and resident care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  1234 Professional Drive, Suite 500<br />
                  Atlanta, GA 30309
                </span>
              </li>
              <li>
                <a
                  href="tel:+1-800-555-0123"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  (800) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@higpm.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  info@higpm.com
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                24/7 Emergency Line
              </p>
              <a
                href="tel:+1-800-555-9999"
                className="text-lg font-semibold hover:text-accent transition-colors"
              >
                (800) 555-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 text-primary-foreground/50 text-sm"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} HIG Property Management Services. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
