import { Product } from '../types/Product';

export const mainProducts: Product[] = [
  {
    id: 1,
    name: 'Montre Élégance Premium',
    description: 'Notre montre phare, alliant élégance et robustesse pour l\'homme moderne.',
    price: 199.99,
    category: 'premium',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: 'Montre Élégance Standard',
    description: 'Le modèle standard de notre collection, parfait pour tous les jours.',
    price: 99.99,
    category: 'standard',
    imageUrl: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 3,
    name: 'Montre Élégance Économique',
    description: 'Qualité et style à prix abordable pour débuter votre collection.',
    price: 49.99,
    category: 'économique',
    imageUrl: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    inStock: true,
  }
];

export const secondaryProducts: Product[] = [
  {
    id: 4,
    name: 'Bracelet en Cuir Véritable',
    description: 'Complétez votre look avec notre bracelet en cuir de haute qualité.',
    price: 29.99,
    category: 'accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1591013589766-0b8b78ab3b22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 5,
    name: 'Portefeuille Minimaliste',
    description: 'Un portefeuille élégant et fonctionnel pour l\'homme organisé.',
    price: 39.99,
    category: 'accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 6,
    name: 'Lunettes de Soleil Aviateur',
    description: 'Protection et style avec nos lunettes de soleil tendance.',
    price: 59.99,
    category: 'accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    inStock: true,
  }
];

export const posts = [
  {
    id: 1,
    title: 'Découvrez notre nouvelle collection Été 2025',
    content: 'Préparez-vous pour l\'été avec notre nouvelle gamme de montres étanches et élégantes.',
    date: '2025-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    title: 'Comment choisir le bracelet parfait pour votre montre',
    content: 'Nos conseils d\'experts pour assortir votre bracelet à votre style et à votre montre.',
    date: '2025-06-02',
    imageUrl: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 87,
    comments: 9,
  },
  {
    id: 3,
    title: 'Les tendances accessoires homme de l\'été',
    content: 'Découvrez les accessoires indispensables pour être au top cet été.',
    date: '2025-06-20',
    imageUrl: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 156,
    comments: 23,
  },
  {
    id: 4,
    title: 'Notre sélection de lunettes de soleil pour tous les visages',
    content: 'Trouvez la paire parfaite adaptée à la forme de votre visage.',
    date: '2025-07-05',
    imageUrl: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 92,
    comments: 11,
  },
];

export const stats = {
  communityMembers: 487,
  monthlyVisits: 98,
  productsAvailable: 24,
  satisfactionRate: 97
};
