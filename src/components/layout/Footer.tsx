import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Send,
  Clock,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌸</span>
              <div>
                <h3 className="font-serif text-2xl font-bold leading-tight">CriDrum Sales</h3>
                <p className="text-sm text-primary-foreground/70">Livrare Flori Moldova</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Oferim cele mai proaspete și frumoase flori din Moldova. Livrare rapidă în toată țara cu dragoste și grijă.
            </p>
            
            <div className="flex gap-3">
              <a 
                href="https://wa.me/37360123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/cridrum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Catalog</h4>
            <ul className="space-y-2.5">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/catalog/${cat.id}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Informații</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/delivery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Livrare
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Metode de plată
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Recenzii
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contacte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contacte</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+37360123456" className="font-semibold hover:underline">
                    +373 60 123 456
                  </a>
                  <p className="text-sm text-primary-foreground/70">Apel gratuit</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Program</p>
                  <p className="text-sm text-primary-foreground/70">Luni - Duminică: 8:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@cridrum.md" className="hover:underline text-sm">
                  info@cridrum.md
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Chișinău, Moldova<br />
                  str. Florilor 123
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} CriDrum Sales. Toate drepturile rezervate.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/70">Acceptăm:</span>
              <div className="flex items-center gap-2">
                <div className="h-8 px-3 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <CreditCard className="h-4 w-4" />
                  <span className="ml-1.5 text-xs font-medium">VISA</span>
                </div>
                <div className="h-8 px-3 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <CreditCard className="h-4 w-4" />
                  <span className="ml-1.5 text-xs font-medium">MC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
