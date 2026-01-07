import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Produsele Zilei
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cele mai populare buchete și aranjamente florale, pregătite cu grijă și dragoste
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
