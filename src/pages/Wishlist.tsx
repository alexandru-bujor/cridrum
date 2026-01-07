import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';

const Wishlist = () => {
  const { wishlist } = useStore();

  return (
    <>
      <Helmet>
        <title>Favorite | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content="Produsele tale favorite de la CriDrum Sales. Salvează buchetele preferate și comandă oricând." />
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
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  Produsele Favorite
                </h1>
                <p className="text-muted-foreground">
                  {wishlist.length} {wishlist.length === 1 ? 'produs' : 'produse'} salvate
                </p>
              </div>
            </div>

            {wishlist.length === 0 ? (
              <div className="bg-card rounded-xl p-12 text-center shadow-soft">
                <Heart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-foreground mb-2">
                  Lista de favorite este goală
                </h2>
                <p className="text-muted-foreground mb-6">
                  Adaugă produse la favorite pentru a le găsi ușor mai târziu
                </p>
                <Button variant="hero" asChild>
                  <Link to="/">Explorează Catalogul</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {wishlist.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
