import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Tank Rubber Lining", href: "/services/tank-lining" },
    { name: "Pipe Rubber Lining", href: "/services/pipe-lining" },
    { name: "Chemical Resistant Lining", href: "/services/chemical-lining" },
    { name: "On-Site Services", href: "/services/on-site" },
  ],
  industries: [
    { name: "Chemical Industry", href: "/industries#chemical" },
    { name: "Power Plants", href: "/industries#power" },
    { name: "Mining", href: "/industries#mining" },
    { name: "Fertilizers", href: "/industries#fertilizers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Certifications", href: "/about#certifications" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="industrial-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-lg">SB</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Supreme Bonds</div>
                <div className="text-primary-foreground/60 text-xs">Pvt Ltd</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              India's trusted experts in industrial rubber lining solutions with 20+ years of experience in protecting your industrial assets.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                +91 98765 43210
              </a>
              <a href="mailto:info@supremebonds.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                info@supremebonds.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>Industrial Area, Phase II,<br />Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="industrial-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Supreme Bonds Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
