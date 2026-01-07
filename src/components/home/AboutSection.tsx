import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Despre CriDrum Sales
          </h2>
          
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Bine ați venit la <strong className="text-foreground">CriDrum Sales</strong> - cea mai de încredere florărie online din Moldova! 
              Cu o experiență de peste 10 ani în arta florală, oferim cele mai proaspete și frumoase buchete pentru toate ocaziile.
            </p>
            
            {isExpanded && (
              <>
                <p>
                  Fiecare buchet este creat cu grijă și atenție la detalii de către floristii noștri profesioniști. 
                  Folosim doar flori de cea mai înaltă calitate, importate din cele mai bune gradini din Olanda, Ecuador și alte țări renumite pentru floricultura lor.
                </p>
                <p>
                  Livrăm în toată Moldova - de la Chișinău la Bălți, Orhei, Cahul și multe alte localități. 
                  Oferim livrare gratuită pentru comenzi peste 500 lei și livrare expresă în aceeași zi pentru comenzile plasate înainte de ora 14:00.
                </p>
                <p>
                  Fie că sărbătorești o zi de naștere, o aniversare, Ziua Îndrăgostiților sau pur și simplu vrei să aduci bucurie cuiva drag, 
                  avem buchetul perfect pentru tine. Comandă online simplu și rapid!
                </p>
              </>
            )}
          </div>
          
          <Button
            variant="ghost"
            className="mt-6"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Citește mai puțin
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Citește mai mult
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
