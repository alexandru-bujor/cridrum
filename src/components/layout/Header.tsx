import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Heart, 
  Phone, 
  MapPin, 
  ChevronDown,
  Search,
  User,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore, formatPrice } from '@/store/useStore';
import { categories, cities } from '@/data/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, wishlist, currency, setCurrency, city, setCity, cartCount } = useStore();
  
  const totalItems = cartCount();
  const wishlistCount = wishlist.length;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">+373 60 123 456</span>
            </div>
            <span className="hidden sm:inline text-primary-foreground/70">
              Luni - Duminică: 8:00 - 21:00
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/37360123456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            
            {/* Currency selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-primary-foreground hover:bg-primary-foreground/10">
                  {currency}
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCurrency('MDL')}>MDL (lei)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrency('EUR')}>EUR (€)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrency('USD')}>USD ($)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🌸</span>
            <div>
              <h1 className="font-serif text-xl font-bold text-primary leading-tight">CriDrum Sales</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Livrare Flori Moldova</p>
            </div>
          </Link>

          {/* City selector - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium">
                  {city}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {cities.map((c) => (
                  <DropdownMenuItem key={c} onClick={() => setCity(c)}>
                    {c}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Caută flori, buchete..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search - Mobile */}
            <Button variant="icon" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* User */}
            <Button variant="icon" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="icon" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="cart" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="font-serif">Coșul meu ({totalItems})</SheetTitle>
                </SheetHeader>
                <CartContent />
              </SheetContent>
            </Sheet>

            {/* Mobile menu */}
            <Button 
              variant="icon" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block border-t border-border bg-secondary/50">
        <div className="container">
          <ul className="flex items-center gap-1 py-2">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium">
                    <Menu className="h-4 w-4 mr-2" />
                    Catalog
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat.id} className="cursor-pointer" asChild>
                      <Link to={`/catalog/${cat.id}`}>
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link to="/delivery">
                <Button variant="ghost">Livrare</Button>
              </Link>
            </li>
            <li>
              <Link to="/payment">
                <Button variant="ghost">Plată</Button>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <Button variant="ghost">Contacte</Button>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <Button variant="ghost">Galerie</Button>
              </Link>
            </li>
            <li>
              <Link to="/reviews">
                <Button variant="ghost">Recenzii</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4">
            {/* City selector - Mobile */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <MapPin className="h-4 w-4 text-primary" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="font-medium">
                    {city}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {cities.map((c) => (
                    <DropdownMenuItem key={c} onClick={() => setCity(c)}>
                      {c}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/catalog/${cat.id}`} className="block" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      <span className="mr-2">{cat.icon}</span>
                      {cat.name}
                    </Button>
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <Link to="/delivery" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Livrare</Button>
                </Link>
              </li>
              <li>
                <Link to="/payment" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Plată</Button>
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Contacte</Button>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Galerie</Button>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Recenzii</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

function CartContent() {
  const { cart, removeFromCart, updateQuantity, cartTotal, currency, clearCart } = useStore();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mb-4" />
        <p className="text-lg font-medium text-muted-foreground">Coșul este gol</p>
        <p className="text-sm text-muted-foreground/70 mt-1">Adaugă produse pentru a continua</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto py-4 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-3 p-3 bg-secondary rounded-lg">
            <img 
              src={item.image} 
              alt={item.nameRo} 
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm line-clamp-2">{item.nameRo}</h4>
              <p className="text-primary font-semibold mt-1">
                {formatPrice(item.price, currency)}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Button 
                  variant="outline" 
                  size="icon-sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon-sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon-sm"
              onClick={() => removeFromCart(item.id)}
              className="text-destructive hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Subtotal:</span>
          <span className="text-xl font-bold text-primary">
            {formatPrice(cartTotal(), currency)}
          </span>
        </div>
        
        <Button variant="hero" className="w-full" size="lg">
          Finalizează comanda
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full text-muted-foreground"
          onClick={clearCart}
        >
          Golește coșul
        </Button>
      </div>
    </div>
  );
}
