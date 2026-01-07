import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Maria Popescu',
      rating: 5,
      date: '15 decembrie 2025',
      text: 'Flori extraordinare și livrare foarte rapidă! Recomand cu plăcere CriDrum Sales pentru orice ocazie.'
    },
    {
      id: 2,
      name: 'Ion Mihai',
      rating: 5,
      date: '12 decembrie 2025',
      text: 'Serviciu excelent, flori proaspete și mult mai ieftine decât alte florării. Cu siguranță o să mai comand.'
    },
    {
      id: 3,
      name: 'Alexandra Luca',
      rating: 5,
      date: '10 decembrie 2025',
      text: 'Am comandat un buchet pentru ziua de naștere a mamei. A fost perfect! Mulțumesc CriDrum Sales!'
    },
    {
      id: 4,
      name: 'Andrei Stoian',
      rating: 5,
      date: '8 decembrie 2025',
      text: 'Calitate top și livrare gratuită în Chișinău. Nu mai caut alte florării!'
    },
    {
      id: 5,
      name: 'Cristina Mărgărit',
      rating: 5,
      date: '5 decembrie 2025',
      text: 'Foarte mulțumită de achizițiile mele. Flori proaspete, staff amabil și profesionist.'
    },
    {
      id: 6,
      name: 'George Ionescu',
      rating: 5,
      date: '1 decembrie 2025',
      text: 'Comanda a sosit exact la timp și în stare perfectă. Merci CriDrum Sales!'
    },
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Recenzii | CriDrum Sales - Livrare Flori Moldova</title>
        <meta name="description" content="Recenziile clienților mulțumiți ai CriDrum Sales. Citește ce spun alții despre serviciile noastre." />
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
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Recenzii Clienți</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Iată ce spun clienții noștri mulțumiți despre serviciile CriDrum Sales
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-sm text-muted-foreground">Evaluare medie</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Clienți fericiți</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Recomandă CriDrum Sales</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="grid gap-6 max-w-4xl mx-auto">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Și tu ești mulțumit?
              </h2>
              <p className="text-muted-foreground mb-6">
                Distribuie-ți experiența cu CriDrum Sales! Fiecare recenzie ne ajută să ne îmbunătățim serviciile.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                ✍️ Scrie o recenzie
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;
