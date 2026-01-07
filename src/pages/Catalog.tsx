import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/products/ProductGrid';
import { categories, products } from '@/data/products';

const Catalog = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = category 
    ? products.filter(p => p.category === categoryId)
    : products;

  return (
    <>
      <Helmet>
        <title>{category ? category.name : 'Catalog'} | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content={`Comandă ${category?.name.toLowerCase() || 'flori'} online cu livrare în Moldova`} />
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
            {category && (
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">{category.icon}</span>
                <div>
                  <h1 className="font-serif text-4xl font-bold text-foreground">{category.name}</h1>
                  <p className="text-muted-foreground mt-2">{categoryProducts.length} produse disponibile</p>
                </div>
              </div>
            )}

            {/* Filters */}
            {category && (
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {category.name}
                </span>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <div key={product.id} className="h-full">
                  {/* Simplified ProductCard */}
                  <div className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="aspect-square bg-secondary overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.nameRo}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-semibold text-foreground line-clamp-2">{product.nameRo}</h3>
                      <p className="text-sm text-muted-foreground mt-1 flex-1">{product.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-primary">{product.price} lei</span>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                          Adaugă
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {categoryProducts.length === 0 && (
              <div className="bg-card rounded-xl p-12 text-center shadow-soft">
                <p className="text-lg text-muted-foreground">Niciun produs în această categorie</p>
                <Link to="/" className="inline-block mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Înapoi la catalog
                </Link>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Catalog;
