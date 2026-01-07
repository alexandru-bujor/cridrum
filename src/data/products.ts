import productRoses from '@/assets/product-roses.jpg';
import productPeonies from '@/assets/product-peonies.jpg';
import productHydrangeas from '@/assets/product-hydrangeas.jpg';
import productTulips from '@/assets/product-tulips.jpg';
import productMixed from '@/assets/product-mixed.jpg';
import productBridal from '@/assets/product-bridal.jpg';
import productOrchid from '@/assets/product-orchid.jpg';
import { Product } from '@/store/useStore';

export const products: Product[] = [
  {
    id: '1',
    name: 'Romantic Rose Bouquet',
    nameRo: 'Buchet de Trandafiri Romantici',
    price: 890,
    originalPrice: 1200,
    image: productRoses,
    category: 'roses',
    discount: 26,
    freeDelivery: true,
    bonusPoints: 89,
    description: 'Un buchet minunat de trandafiri roz și roșii, perfect pentru ocazii speciale.',
  },
  {
    id: '2',
    name: 'Pink Peony Paradise',
    nameRo: 'Paradis de Bujori Roz',
    price: 1450,
    originalPrice: 1800,
    image: productPeonies,
    category: 'peonies',
    discount: 19,
    freeDelivery: true,
    bonusPoints: 145,
    description: 'Bujori delicați în nuanțe de roz și alb, eleganță pură.',
  },
  {
    id: '3',
    name: 'Blue Hydrangea Dream',
    nameRo: 'Vis de Hortensii Albastre',
    price: 750,
    image: productHydrangeas,
    category: 'hydrangeas',
    freeDelivery: false,
    bonusPoints: 75,
    description: 'Hortensii vibrante în nuanțe de albastru și violet.',
  },
  {
    id: '4',
    name: 'Spring Tulip Collection',
    nameRo: 'Colecție de Lalele de Primăvară',
    price: 590,
    originalPrice: 750,
    image: productTulips,
    category: 'tulips',
    discount: 21,
    freeDelivery: true,
    bonusPoints: 59,
    description: 'Lalele colorate care aduc bucuria primăverii.',
  },
  {
    id: '5',
    name: 'Elegant Mixed Bouquet',
    nameRo: 'Buchet Mixt Elegant',
    price: 1100,
    image: productMixed,
    category: 'mixed',
    freeDelivery: true,
    bonusPoints: 110,
    description: 'Combinație armonioasă de crini, trandafiri și verdeață.',
  },
  {
    id: '6',
    name: 'Classic Bridal Bouquet',
    nameRo: 'Buchet de Mireasă Clasic',
    price: 1890,
    originalPrice: 2200,
    image: productBridal,
    category: 'bridal',
    discount: 14,
    freeDelivery: true,
    bonusPoints: 189,
    description: 'Buchet de mireasă elegant cu trandafiri albi și gypsophila.',
  },
  {
    id: '7',
    name: 'Purple Orchid Plant',
    nameRo: 'Orhidee Violet în Ghiveci',
    price: 650,
    image: productOrchid,
    category: 'plants',
    freeDelivery: false,
    bonusPoints: 65,
    description: 'Orhidee phalaenopsis elegantă în ghiveci ceramic.',
  },
  {
    id: '8',
    name: 'Luxury Rose Collection',
    nameRo: 'Colecție Lux de Trandafiri',
    price: 2100,
    originalPrice: 2800,
    image: productRoses,
    category: 'roses',
    discount: 25,
    freeDelivery: true,
    bonusPoints: 210,
    description: '50 de trandafiri premium într-un aranjament spectaculos.',
  },
];

export const categories = [
  { id: 'roses', name: 'Trandafiri', nameEn: 'Roses', icon: '🌹' },
  { id: 'peonies', name: 'Bujori', nameEn: 'Peonies', icon: '🌸' },
  { id: 'tulips', name: 'Lalele', nameEn: 'Tulips', icon: '🌷' },
  { id: 'hydrangeas', name: 'Hortensii', nameEn: 'Hydrangeas', icon: '💐' },
  { id: 'mixed', name: 'Buchete Mixte', nameEn: 'Mixed Bouquets', icon: '💝' },
  { id: 'bridal', name: 'Buchete Mireasă', nameEn: 'Bridal Bouquets', icon: '👰' },
  { id: 'plants', name: 'Plante', nameEn: 'Plants', icon: '🪴' },
  { id: 'gifts', name: 'Cadouri', nameEn: 'Gifts', icon: '🎁' },
];

export const cities = [
  'Chișinău',
  'Bălți',
  'Orhei',
  'Cahul',
  'Ungheni',
  'Soroca',
  'Tiraspol',
  'Bender',
];

export const faqItems = [
  {
    question: 'Cât costă livrarea?',
    answer: 'Livrarea în Chișinău este GRATUITĂ pentru comenzi peste 500 lei. Pentru alte localități, costul livrării variază în funcție de distanță.',
  },
  {
    question: 'Pot comanda livrare anonimă?',
    answer: 'Da, oferim opțiunea de livrare anonimă. Puteți selecta această opțiune în timpul plasării comenzii și vom respecta confidențialitatea dumneavoastră.',
  },
  {
    question: 'Cum pot urmări comanda mea?',
    answer: 'După plasarea comenzii, veți primi un email cu link-ul de urmărire. De asemenea, puteți verifica statusul comenzii în contul dumneavoastră.',
  },
  {
    question: 'Ce zone de livrare acoperiți?',
    answer: 'Livrăm în toată Moldova! Chișinău, Bălți, Orhei, Cahul și multe alte localități. Contactați-ne pentru detalii despre zona dumneavoastră.',
  },
  {
    question: 'Pot modifica comanda după plasare?',
    answer: 'Modificările sunt posibile în primele 2 ore de la plasarea comenzii. Contactați-ne urgent prin telefon sau WhatsApp pentru modificări.',
  },
];
