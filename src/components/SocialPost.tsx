import React, { useState } from 'react';

interface SocialPostProps {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

const SocialPost: React.FC<SocialPostProps> = ({ 
  id, 
  title, 
  content, 
  date, 
  imageUrl, 
  likes, 
  comments 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute top-0 left-0 bg-blue-600 text-white py-1 px-3 rounded-br-lg">
          {formattedDate}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        <p className={`text-gray-600 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {content}
        </p>
        
        {content.length > 150 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4"
          >
            {isExpanded ? 'Voir moins' : 'Lire la suite'}
          </button>
        )}
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button 
            onClick={handleLike}
            className={`flex items-center ${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors duration-300`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={isLiked ? "0" : "1.5"}
            >
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {likeCount}
          </button>
          
          <div className="flex items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {comments} commentaires
          </div>
          
          <div className="flex space-x-2">
            <button className="text-blue-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            <button className="text-blue-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;
