import { categories } from '@/data/products';
import { Link } from 'react-router-dom';

export function CategoryGrid() {
  return (
    <section className="py-12 lg:py-16 bg-rose-gradient">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Explorează Categoriile
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Găsește buchetul perfect pentru orice ocazie
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/catalog/${category.id}`}
              className="group relative bg-card rounded-xl p-6 text-center hover-lift border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {category.nameEn}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
