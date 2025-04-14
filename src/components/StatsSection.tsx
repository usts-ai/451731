import React from 'react';

interface StatsSectionProps {
  communityMembers: number;
  monthlyVisits: number;
  productsAvailable: number;
  satisfactionRate: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  communityMembers,
  monthlyVisits,
  productsAvailable,
  satisfactionRate
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Notre communauté en chiffres
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-100">
            Rejoignez notre communauté grandissante d'hommes passionnés par les accessoires de qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="text-4xl font-bold text-white mb-2">{communityMembers}</div>
            <div className="text-blue-100 font-medium">Membres actifs</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="text-4xl font-bold text-white mb-2">{monthlyVisits}</div>
            <div className="text-blue-100 font-medium">Visites mensuelles</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="text-4xl font-bold text-white mb-2">{productsAvailable}</div>
            <div className="text-blue-100 font-medium">Produits disponibles</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="text-4xl font-bold text-white mb-2">{satisfactionRate}%</div>
            <div className="text-blue-100 font-medium">Taux de satisfaction</div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
            Rejoindre la communauté
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
