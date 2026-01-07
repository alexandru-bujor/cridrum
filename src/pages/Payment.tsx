import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, DollarSign, Lock, Smartphone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Metode de Plată | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content="Metode de plată acceptate la CriDrum Sales. Plată sigură și protejată." />
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Metode de Plată</h1>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
              {/* Card Payment */}
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">Card Bancar</h2>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>✓ Acceptăm toate cardurile majore</li>
                  <li>✓ Visa, Mastercard, Maestro</li>
                  <li>✓ Plată sigură cu criptare SSL</li>
                  <li>✓ Fără comisioane ascunse</li>
                </ul>
              </div>

              {/* Cash on Delivery */}
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">Ramburs (COD)</h2>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>✓ Plată la livrare</li>
                  <li>✓ Fără avans necesar</li>
                  <li>✓ Disponibil în toată Moldova</li>
                  <li>✓ Comision: 2% din suma comenzii</li>
                </ul>
              </div>

              {/* Mobile Payment */}
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">Plată Mobilă</h2>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>✓ Orange Money</li>
                  <li>✓ Moldcell</li>
                  <li>✓ Plată rapidă și sigură</li>
                  <li>✓ Confirmarea instantanee</li>
                </ul>
              </div>

              {/* Bank Transfer */}
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">Transfer Bancar</h2>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>✓ Transfer direct între conturi</li>
                  <li>✓ Pentru comenzi mari</li>
                  <li>✓ Rata schimbului preferențial</li>
                  <li>✓ Contactează-ne pentru detalii</li>
                </ul>
              </div>
            </div>

            {/* Security Info */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Securitate 100%</h2>
              <p className="text-muted-foreground mb-4">
                Toate tranzacțiile tale sunt protejate cu criptare de nivel bancar. Nu stocăm informații sensibile ale cardului tău.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <li>✓ Criptare SSL 256-bit</li>
                <li>✓ Protecție anti-fraudă</li>
                <li>✓ Certificare PCI DSS</li>
                <li>✓ Garanție de confidențialitate</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Întrebări Frecvente</h2>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">Este plata mea sigură?</h3>
                  <p className="text-muted-foreground text-sm">Da, folosim cea mai avansată criptare pentru a proteja datele tale.</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">Pot să mă gândesc să plătesc la livrare?</h3>
                  <p className="text-muted-foreground text-sm">Da, acceptăm plata ramburs (COD) cu o comisie mică de 2%.</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">Care sunt tarifele de schimb valutar?</h3>
                  <p className="text-muted-foreground text-sm">Contactează-ne pentru ratele curente și oferte speciale pentru comenzi mari.</p>
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

export default Payment;
