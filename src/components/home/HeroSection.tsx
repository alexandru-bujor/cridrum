import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Gift, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-flowers.jpg';

const slides = [
  {
    id: 1,
    title: 'Flori Proaspete, Livrate cu Dragoste',
    subtitle: 'Descoperă colecția noastră de buchete elegante',
    cta: 'Vezi Colecția',
    badge: 'Livrare Gratuită',
    image: heroImage,
  },
  {
    id: 2,
    title: 'Buchete de Mireasă',
    subtitle: 'Fă ziua ta specială să strălucească',
    cta: 'Buchete Nuntă',
    badge: '-20% Discount',
    image: heroImage,
  },
  {
    id: 3,
    title: 'Cadouri pentru Orice Ocazie',
    subtitle: 'Surprinde pe cineva drag cu un buchet frumos',
    cta: 'Cumpără Acum',
    badge: 'Cel mai popular',
    image: heroImage,
  },
];

const features = [
  { icon: Truck, text: 'Livrare Gratuită', subtext: 'Comenzi peste 500 lei' },
  { icon: Clock, text: 'Livrare Rapidă', subtext: 'În aceeași zi' },
  { icon: Gift, text: 'Bonus Points', subtext: '10% înapoi în puncte' },
  { icon: Shield, text: 'Garanție', subtext: 'Prospețime garantată' },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative">
      {/* Main hero slider */}
      <div className="relative h-[60vh] min-h-[500px] max-h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative h-full flex items-center">
              <div className="max-w-xl">
                {/* Badge */}
                <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-pulse">
                  {slide.badge}
                </span>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="xl">
                    {slide.cta}
                  </Button>
                  <Button variant="outline" size="xl">
                    Catalog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-elegant"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-elegant"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features bar */}
      <div className="bg-secondary border-y border-border">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{feature.text}</p>
                  <p className="text-xs text-muted-foreground">{feature.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
