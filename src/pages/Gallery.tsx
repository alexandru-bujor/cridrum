import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Images } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Gallery = () => {
  const galleryImages = [
    { id: 1, title: 'Trandafiri Roșii', image: '🌹' },
    { id: 2, title: 'Buchete Mixte', image: '💐' },
    { id: 3, title: 'Bujori Roz', image: '🌸' },
    { id: 4, title: 'Aranjamente Festive', image: '🌺' },
    { id: 5, title: 'Livrări Speciale', image: '🎀' },
    { id: 6, title: 'Decorații Events', image: '✨' },
  ];

  return (
    <>
      <Helmet>
        <title>Galerie | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content="Galerie de fotografi cu buchetele și aranjamentele florale din CriDrum Sales." />
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
            <div className="flex items-center gap-3 mb-12">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Images className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-4xl font-bold text-foreground">Galerie Fotografi</h1>
                <p className="text-muted-foreground mt-2">Admiră creațiile noastre frumoase</p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img) => (
                <div key={img.id} className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-8xl">
                    {img.image}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground">{img.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Doar un exemplu din colecția noastră de aranjamente frumoase.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Nu ai găsit ceea ce cauți?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contactează-ne și vom crea pentru tine un aranjament personalizat. Orice dorință, orice ocazie!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/37360123456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="tel:+37360123456"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
                >
                  📞 Sună-ne
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
