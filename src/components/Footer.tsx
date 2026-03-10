import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍛</span>
              <h3 className="font-serif text-2xl font-bold">Trichy Foods</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Serving authentic South Indian cuisine with love since generations.
              Experience the true taste of Tamil Nadu.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>123 Anna Nagar, Trichy, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@trichyfoods.com" className="hover:text-accent transition-colors">
                  info@trichyfoods.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p>Monday - Sunday</p>
                  <p className="text-primary-foreground/80">7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-accent/20 rounded-lg">
              <p className="text-sm">
                🚗 <strong>Free Delivery</strong> on orders above ₹300 within Trichy
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© 2024 Trichy Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
