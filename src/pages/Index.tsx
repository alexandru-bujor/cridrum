import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { PromoBanner } from '@/components/home/PromoBanner';
import { AboutSection } from '@/components/home/AboutSection';
import { FAQSection } from '@/components/home/FAQSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CriDrum Sales - Livrare Flori Moldova | Buchete Proaspete</title>
        <meta 
          name="description" 
          content="Comandă flori online cu livrare în toată Moldova. Buchete proaspete de trandafiri, bujori, lalele și multe altele. Livrare gratuită în Chișinău pentru comenzi peste 500 lei." 
        />
        <meta name="keywords" content="flori Moldova, livrare flori Chișinău, buchete online, trandafiri, bujori, florărie online" />
        <link rel="canonical" href="" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <ProductGrid />
          <PromoBanner />
          <CategoryGrid />
          <AboutSection />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
