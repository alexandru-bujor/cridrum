import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Contacte | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content="Informații de contact pentru CriDrum Sales. Suntem aici pentru a te ajuta!" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-secondary/30">
          <div className="container py-8 lg:py-12">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Înapoi la magazin
              </Link>
            </div>

            {/* Header */}
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Contacte</h1>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Telefon</h2>
                      <a href="tel:+37360123456" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        +373 60 123 456
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Disponibil 8:00 - 21:00 (Luni - Duminică)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-2">WhatsApp</h2>
                      <a href="https://wa.me/37360123456" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        +373 60 123 456
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Răspuns rapid la întrebări</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Email</h2>
                      <a href="mailto:info@cridrumales.md" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        info@cridrumales.md
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Răspuns în termen de 24 de ore</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Adresă Fizică</h2>
                      <p className="text-foreground font-medium">
                        Str. Florilor, nr. 42<br />
                        Chișinău, Moldova
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">Vizitează-ne pentru a alege flori în persoană</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Program de Lucru</h2>
                      <ul className="space-y-1 text-sm font-medium text-foreground">
                        <li>Luni - Duminică: 8:00 - 21:00</li>
                        <li>Zilele de sărbătoare: 10:00 - 20:00</li>
                        <li>1 ianuarie: ÎNCHIS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Trimite-ne un mesaj</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nume</label>
                    <input 
                      type="text" 
                      placeholder="Numele tău"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      placeholder="+373 60 123 456"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Mesaj</label>
                    <textarea 
                      placeholder="Mesajul tău..."
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Trimite mesajul
                  </Button>
                </form>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Urmărește-ne pe rețelele de socializare:</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://wa.me/37360123456" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-primary"
                    >
                      💬
                    </a>
                    <a 
                      href="https://t.me/cridrumales" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-primary"
                    >
                      ✈️
                    </a>
                    <a 
                      href="https://instagram.com/cridrumales" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-primary"
                    >
                      📸
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contacts;
