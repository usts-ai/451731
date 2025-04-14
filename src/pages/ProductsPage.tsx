import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { mainProducts, secondaryProducts } from '../data/products';
import { Product } from '../types/Product';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([...mainProducts, ...secondaryProducts]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>('tous');
  const [sortOption, setSortOption] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'tous', name: 'Tous les produits' },
    { id: 'premium', name: 'Collection Premium' },
    { id: 'standard', name: 'Collection Standard' },
    { id: 'économique', name: 'Collection Économique' },
    { id: 'accessoires', name: 'Accessoires' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Produits vedettes' },
    { id: 'price-asc', name: 'Prix: croissant' },
    { id: 'price-desc', name: 'Prix: décroissant' },
    { id: 'rating', name: 'Meilleures notes' },
  ];

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'tous') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // For 'featured', we'll put main products first, then sort by id
        result.sort((a, b) => {
          const aIsMain = mainProducts.some(p => p.id === a.id);
          const bIsMain = mainProducts.some(p => p.id === b.id);
          
          if (aIsMain && !bIsMain) return -1;
          if (!aIsMain && bIsMain) return 1;
          return a.id - b.id;
        });
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortOption, searchQuery, products]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Notre Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection d'accessoires de qualité pour l'homme moderne.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <div className="relative inline-block w-full md:w-auto">
                <select
                  className="block appearance-none w-full bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <button
                className="md:hidden bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Category Filter - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Category Filter - Mobile */}
          {isFilterOpen && (
            <div className="md:hidden flex flex-wrap gap-2 mt-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsFilterOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                featured={mainProducts.some(p => p.id === product.id && p.id === 1)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
            <p className="mt-1 text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
            <button 
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {
                setActiveCategory('tous');
                setSortOption('featured');
                setSearchQuery('');
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
        
        {/* Product Count */}
        <div className="mt-8 text-gray-600 text-sm">
          Affichage de {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} sur {products.length}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
