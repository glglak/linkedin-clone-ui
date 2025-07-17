import React, { useState, useEffect } from 'react';
import { UserService } from '../services/api';

const LeftSidebar = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user profile and network data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const userData = await UserService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileClick = () => {
    console.log('Navigate to profile');
  };

  const handleStatsClick = (statType) => {
    console.log(`Navigate to ${statType} analytics`);
  };

  // Premium icon SVG component using official LinkedIn icon
  const PremiumIcon = () => (
    <svg 
      role="img" 
      aria-label="Premium" 
      className="mr-1 flex-shrink-0" 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="14" 
      viewBox="0 0 16 16"
    >
      <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" x="0" y="0" width="14" height="14"></image>
    </svg>
  );

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden mb-2 animate-pulse">
        <div className="h-14 bg-gray-200"></div>
        <div className="pt-8 pb-3 px-4">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded mb-1"></div>
          <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="space-y-2">
      {/* Profile Card */}
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden relative">
        {/* Premium badge on top */}
        {user.isPremium && (
          <div className="absolute top-0 right-0 bg-gray-900 text-white px-3 py-1 text-xs font-medium rounded-bl-lg z-10">
            Premium
          </div>
        )}
        
        <div 
          className="h-16 relative cursor-pointer"
          style={{
            backgroundImage: `url(${user.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onClick={handleProfileClick}
        >
          <div className="absolute -bottom-8 left-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-white cursor-pointer hover:brightness-110 transition-all"
              onClick={handleProfileClick}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/64/0a66c2/ffffff?text=U';
              }}
            />
          </div>
        </div>
        
        <div className="pt-10 pb-4 px-4">
          <div className="flex items-center space-x-1 mb-1">
            <h3 
              className="font-semibold text-base text-gray-900 hover:underline cursor-pointer"
              onClick={handleProfileClick}
            >
              {user.name}
            </h3>
            {user.isPremium && <PremiumIcon />}
          </div>
          
          <p className="text-xs text-gray-700 leading-4 mb-1">{user.headline}</p>
          <p className="text-xs text-gray-500 mb-3">{user.location}</p>
          
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQFpTZ1jG8gsWg/company-logo_100_100/company-logo_100_100/0/1733414595321/link_development_logo?e=1755734400&v=beta&t=-albznL0fLeZ7ERkgi4982W64af6NF-WfzhrpvXVLG4"
              alt="Link Development"
              className="w-4 h-4 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-xs text-blue-600 hover:underline cursor-pointer font-medium">
              Link Development
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats Card */}
      <div className="bg-white rounded-lg border border-gray-300 px-4 py-3">
        <div 
          className="flex justify-between items-center text-xs py-2 hover:bg-gray-50 cursor-pointer rounded -mx-2 px-2"
          onClick={() => handleStatsClick('profile-views')}
        >
          <span className="text-gray-600">Profile viewers</span>
          <span className="font-semibold text-blue-600">873</span>
        </div>
        <div 
          className="flex justify-between items-center text-xs py-2 hover:bg-gray-50 cursor-pointer rounded -mx-2 px-2"
          onClick={() => handleStatsClick('post-impressions')}
        >
          <span className="text-gray-600">Post impressions</span>
          <span className="font-semibold text-blue-600">7,800</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div 
            className="flex items-center text-xs hover:bg-gray-50 cursor-pointer p-2 -m-2 rounded"
            onClick={() => console.log('Navigate to premium features')}
          >
            <div className="w-3 h-3 bg-amber-500 rounded-sm mr-2 flex-shrink-0"></div>
            <span className="text-gray-700 font-medium">Your Premium features</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;