import { Link } from "react-router-dom";
import { Wrench, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">BAAEC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of automotive engineers through education and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Our Clubs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Engineering Workshops</li>
              <li className="text-sm text-muted-foreground">Competition Teams</li>
              <li className="text-sm text-muted-foreground">Mentorship Program</li>
              <li className="text-sm text-muted-foreground">Industry Connections</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">info@baaec.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">San Francisco Bay Area, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bay Area Automotive Engineering Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
