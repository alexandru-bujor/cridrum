import { Sparkles, Percent, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PromoBanner() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Promo Card 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-plum-light p-8 text-primary-foreground">
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                <Percent className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">-20% Reducere</h3>
              <p className="text-primary-foreground/80 mb-4">
                La prima comandă cu codul WELCOME20
              </p>
              <Button variant="rose" size="sm">
                Folosește Acum
              </Button>
            </div>
            <div className="absolute -bottom-4 -right-4 text-[120px] opacity-10">
              🌹
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-rose p-8">
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Cadou Surpriză</h3>
              <p className="text-muted-foreground mb-4">
                La comenzi peste 1000 lei
              </p>
              <Button variant="default" size="sm">
                Vezi Oferta
              </Button>
            </div>
            <div className="absolute -bottom-4 -right-4 text-[120px] opacity-10">
              🎁
            </div>
          </div>

          {/* Promo Card 3 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-muted p-8 md:col-span-2 lg:col-span-1">
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Program Bonus</h3>
              <p className="text-muted-foreground mb-4">
                Câștigă 10% înapoi la fiecare comandă
              </p>
              <Button variant="default" size="sm">
                Află Mai Mult
              </Button>
            </div>
            <div className="absolute -bottom-4 -right-4 text-[120px] opacity-10">
              ⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
