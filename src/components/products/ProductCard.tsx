import { Heart, ShoppingCart, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useStore, formatPrice } from '@/store/useStore';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export function ProductCard({ product, className, style }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist, currency } = useStore();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.nameRo} adăugat în coș!`, {
      description: 'Continuă cumpărăturile sau finalizează comanda.',
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    if (!isWishlisted) {
      toast.success('Adăugat la favorite!');
    }
  };

  return (
    <div 
      className={cn(
        "card-product group relative flex flex-col bg-card",
        className
      )}
      style={style}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.nameRo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 badge-discount">
            -{product.discount}%
          </div>
        )}
        
        {/* Wishlist button */}
        <Button
          variant="icon"
          size="icon-sm"
          className={cn(
            "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200",
            isWishlisted && "opacity-100 bg-destructive text-destructive-foreground hover:bg-destructive/90"
          )}
          onClick={handleToggleWishlist}
        >
          <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
        </Button>
        
        {/* Quick add button */}
        <Button
          variant="hero"
          size="sm"
          className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adaugă în coș
        </Button>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Free delivery badge */}
        {product.freeDelivery && (
          <div className="badge-free-delivery inline-flex items-center gap-1 w-fit mb-2">
            <Truck className="h-3 w-3" />
            Livrare gratuită
          </div>
        )}
        
        {/* Product name */}
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.nameRo}
        </h3>
        
        {/* Bonus points */}
        {product.bonusPoints && (
          <p className="text-xs text-success mb-2">
            +{product.bonusPoints} puncte bonus
          </p>
        )}
        
        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price, currency)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice, currency)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
