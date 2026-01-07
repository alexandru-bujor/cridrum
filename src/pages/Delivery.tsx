import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Clock, MapPin, DollarSign } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Delivery = () => {
  return (
    <>
      <Helmet>
        <title>Livrare | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content="Informații despre livrare la CriDrum Sales. Livrare rapidă în toată Moldova." />
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Livrare</h1>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left column */}
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Livrare în Chișinău</h2>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Livrare gratuită pentru comenzi peste 500 lei</li>
                        <li>✓ Livrare în 2-4 ore pe teritoriul orașului</li>
                        <li>✓ Disponibil luni-duminică 8:00-21:00</li>
                      </ul>
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                        <p className="font-medium text-foreground">Cost livrare: 50 lei</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Livrare în alte orașe</h2>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Livrare în Bălți, Cahul, Orhei și alte orașe</li>
                        <li>✓ Livrare în 1-2 zile lucrătoare</li>
                        <li>✓ Tarif special pentru comenzi mari</li>
                      </ul>
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                        <p className="font-medium text-foreground">Cost livrare: depinde de destinație</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Programul de Lucru</h2>
                      <ul className="space-y-2 text-muted-foreground font-medium">
                        <li>Luni - Duminică: 8:00 - 21:00</li>
                        <li>Zilele de sărbătoare: 10:00 - 20:00</li>
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Comenzile primite după ora 18:00 vor fi livrate a doua zi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Condiții Speciale</h2>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Reducere 10% la comenzi peste 1000 lei</li>
                        <li>✓ Livrare gratuită pentru clienți regiștri cu 5+ comenzi</li>
                        <li>✓ Ambalaj elegant inclus</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-xl p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Contactează-ne</h3>
                  <p className="mb-4">Ai întrebări despre livrare?</p>
                  <div className="space-y-2">
                    <p>📞 +373 60 123 456</p>
                    <p>💬 WhatsApp: +373 60 123 456</p>
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

export default Delivery;
