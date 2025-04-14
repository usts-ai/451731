import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import StatsSection from '../components/StatsSection';
import { mainProducts, secondaryProducts, stats } from '../data/products';

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            <span className="block">Découvrez Notre Collection</span>
            <span className="block text-blue-400">Exclusive d'Accessoires Homme</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Des accessoires élégants et fonctionnels pour l'homme moderne, sélectionnés avec soin pour vous démarquer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Découvrir nos produits
            </Link>
            <Link 
              to="/social" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Rejoindre la communauté
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nos Produits Vedettes
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Découvrez notre sélection d'accessoires premium pour homme.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured={product.id === 1} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Voir tous nos produits
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection 
        communityMembers={stats.communityMembers}
        monthlyVisits={stats.monthlyVisits}
        productsAvailable={stats.productsAvailable}
        satisfactionRate={stats.satisfactionRate}
      />

      {/* Secondary Products Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Complétez Votre Style
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Des accessoires complémentaires pour parfaire votre look.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Prêt à rejoindre notre communauté ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, promotions exclusives et conseils de style.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
