import React, { useState } from 'react';
import SocialPost from '../components/SocialPost';
import { posts } from '../data/products';

const SocialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'calendar'>('posts');
  
  // Mock data for calendar
  const months = ['Mai 2025', 'Juin 2025', 'Juillet 2025'];
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  
  const calendarData = {
    'Mai 2025': [
      { date: '3 Mai', content: 'Post promotionnel: Montre Élégance Premium', type: 'main' },
      { date: '7 Mai', content: 'Post promotionnel: Bracelet en Cuir Véritable', type: 'secondary' },
      { date: '10 Mai', content: 'Post promotionnel: Montre Élégance Standard', type: 'main' },
      { date: '14 Mai', content: 'Post promotionnel: Portefeuille Minimaliste', type: 'secondary' },
      { date: '17 Mai', content: 'Post promotionnel: Montre Élégance Économique', type: 'main' },
      { date: '21 Mai', content: 'Post promotionnel: Lunettes de Soleil Aviateur', type: 'secondary' },
      { date: '24 Mai', content: 'Post promotionnel: Montre Élégance Premium', type: 'main' },
      { date: '28 Mai', content: 'Post promotionnel: Bracelet en Cuir Véritable', type: 'secondary' },
    ],
    'Juin 2025': [
      { date: '1 Juin', content: 'Post promotionnel: Montre Élégance Standard', type: 'main' },
      { date: '5 Juin', content: 'Post promotionnel: Portefeuille Minimaliste', type: 'secondary' },
      { date: '8 Juin', content: 'Post promotionnel: Montre Élégance Économique', type: 'main' },
      { date: '12 Juin', content: 'Post promotionnel: Lunettes de Soleil Aviateur', type: 'secondary' },
      { date: '15 Juin', content: 'Post promotionnel: Montre Élégance Premium', type: 'main' },
      { date: '19 Juin', content: 'Post promotionnel: Bracelet en Cuir Véritable', type: 'secondary' },
      { date: '22 Juin', content: 'Post promotionnel: Montre Élégance Standard', type: 'main' },
      { date: '26 Juin', content: 'Post promotionnel: Portefeuille Minimaliste', type: 'secondary' },
      { date: '29 Juin', content: 'Post promotionnel: Montre Élégance Économique', type: 'main' },
    ],
    'Juillet 2025': [
      { date: '3 Juillet', content: 'Post promotionnel: Lunettes de Soleil Aviateur', type: 'secondary' },
      { date: '6 Juillet', content: 'Post promotionnel: Montre Élégance Premium', type: 'main' },
      { date: '10 Juillet', content: 'Post promotionnel: Bracelet en Cuir Véritable', type: 'secondary' },
      { date: '13 Juillet', content: 'Post promotionnel: Montre Élégance Standard', type: 'main' },
      { date: '17 Juillet', content: 'Post promotionnel: Portefeuille Minimaliste', type: 'secondary' },
      { date: '20 Juillet', content: 'Post promotionnel: Montre Élégance Économique', type: 'main' },
      { date: '24 Juillet', content: 'Post promotionnel: Lunettes de Soleil Aviateur', type: 'secondary' },
      { date: '27 Juillet', content: 'Post promotionnel: Montre Élégance Premium', type: 'main' },
      { date: '31 Juillet', content: 'Post promotionnel: Bracelet en Cuir Véritable', type: 'secondary' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Notre Communauté
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez-nous sur les réseaux sociaux et rejoignez notre communauté d'hommes passionnés par les accessoires de qualité.
          </p>
        </div>
        
        {/* Social Media Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Facebook</h3>
                <p className="text-gray-600">487 abonnés</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mr-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Instagram</h3>
                <p className="text-gray-600">512 abonnés</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="p-3 rounded-full bg-blue-400 text-white mr-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Twitter</h3>
                <p className="text-gray-600">243 abonnés</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`${
                  activeTab === 'posts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
                onClick={() => setActiveTab('posts')}
              >
                Publications Récentes
              </button>
              <button
                className={`${
                  activeTab === 'calendar'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
                onClick={() => setActiveTab('calendar')}
              >
                Calendrier Éditorial
              </button>
            </nav>
          </div>
        </div>
        
        {/* Content */}
        {activeTab === 'posts' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <SocialPost
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                date={post.date}
                imageUrl={post.imageUrl}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Calendrier Éditorial
                </h2>
                <div className="relative inline-block w-48">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    {months.map(month => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {calendarData[selectedMonth as keyof typeof calendarData].map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      item.type === 'main' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-purple-500 bg-purple-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${
                        item.type === 'main' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-purple-100 text-purple-600'
                      } mr-4`}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.type === 'main' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          )}
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{item.date}</div>
                        <div className="text-gray-600">{item.content}</div>
                        <div className="mt-2 flex space-x-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.type === 'main' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {item.type === 'main' ? 'Produit Principal' : 'Produit Secondaire'}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Planifié
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Rejoignez-nous sur les réseaux sociaux
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Suivez-nous pour découvrir nos derniers produits, promotions exclusives et conseils de style.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
