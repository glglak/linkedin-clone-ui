import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Eye, ChevronDown } from 'lucide-react';
import { ConnectionsService, NewsService, UserService } from '../services/api';

const RightSidebar = () => {
  const [suggestedConnections, setSuggestedConnections] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [followingStates, setFollowingStates] = useState({});

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [connections, news, userData] = await Promise.all([
          ConnectionsService.getSuggestedConnections(),
          NewsService.getTrendingNews(),
          UserService.getCurrentUser()
        ]);
        
        setSuggestedConnections(connections);
        setTrendingNews(news);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching sidebar data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFollowClick = async (connectionId) => {
    try {
      await ConnectionsService.sendConnectionRequest(connectionId);
      setFollowingStates(prev => ({
        ...prev,
        [connectionId]: true
      }));
      console.log('Connection request sent');
    } catch (error) {
      console.error('Error sending connection request:', error);
    }
  };

  const handlePuzzleClick = () => {
    console.log('Navigate to LinkedIn puzzle game');
  };

  const handleNewsClick = (newsId) => {
    console.log('Navigate to news article:', newsId);
  };

  const handleViewAllRecommendations = () => {
    console.log('Navigate to all recommendations');
  };

  const handleConnectionClick = (connectionId) => {
    console.log('Navigate to connection profile:', connectionId);
  };

  // Today's Puzzle Component
  const TodaysPuzzle = () => (
    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2">
      <h4 className="font-semibold text-sm text-gray-900 mb-3">Today's puzzle</h4>
      <div 
        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded transition-colors"
        onClick={handlePuzzleClick}
      >
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center relative">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i % 2 === 0 ? 'bg-orange-800' : 'bg-white'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm text-gray-900">Zip - a quick brain teaser</p>
          <p className="text-xs text-gray-600">Solve in 60s or less!</p>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Eye className="w-3 h-3 mr-1" />
            43 connections played
          </div>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400 transform rotate-90" />
      </div>
    </div>
  );

  // Connection Card Component
  const ConnectionCard = ({ connection }) => {
    const isFollowing = followingStates[connection.id];
    
    return (
      <div className="flex items-start space-x-3">
        <div 
          className={`w-12 h-12 flex items-center justify-center flex-shrink-0 cursor-pointer ${
            connection.type === 'company' 
              ? 'bg-blue-600 rounded-sm' 
              : 'bg-gray-400 rounded-full'
          }`}
          onClick={() => handleConnectionClick(connection.id)}
        >
          {connection.avatar ? (
            <img
              src={connection.avatar}
              alt={connection.name}
              className={`w-full h-full object-cover ${
                connection.type === 'company' ? 'rounded-sm' : 'rounded-full'
              }`}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <span className="text-white text-sm font-medium">
              {connection.name.charAt(0)}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <p className="font-medium text-sm text-gray-900 truncate cursor-pointer hover:underline"
               onClick={() => handleConnectionClick(connection.id)}>
              {connection.name}
            </p>
            {connection.isPremium && (
              <div className="ml-1 flex-shrink-0">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" width="24" height="24"/>
                </svg>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-600 line-clamp-2 mt-0.5">
            {connection.type === 'company' 
              ? `Company • ${connection.category}`
              : connection.headline
            }
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {connection.connectionDegree || `${connection.mutualConnections} mutual connections`}
          </p>
          {!connection.isConnected && (
            <button 
              onClick={() => handleFollowClick(connection.id)}
              disabled={isFollowing}
              className={`mt-2 flex items-center justify-center border rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isFollowing 
                  ? 'text-gray-500 border-gray-300 bg-gray-100 cursor-not-allowed'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
              }`}
            >
              <svg className="w-4 h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zM4.5 8a.5.5 0 01.5-.5h2.5V5a.5.5 0 011 0v2.5H11a.5.5 0 010 1H8.5V11a.5.5 0 01-1 0V8.5H5a.5.5 0 01-.5-.5z"/>
              </svg>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          )}
          {connection.isConnected && (
            <button 
              onClick={() => console.log('Send message to', connection.id)}
              className="mt-2 flex items-center border rounded-full px-4 py-1 text-xs transition-colors text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              Message
            </button>
          )}
        </div>
      </div>
    );
  };

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2">
        <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <>
        <LoadingSkeleton />
        <LoadingSkeleton />
      </>
    );
  }

  return (
    <div>
      {/* Today's Puzzle */}
      <TodaysPuzzle />

      {/* Add to your feed */}
      <div className="bg-white rounded-lg border border-gray-300 p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-sm text-gray-900">Add to your feed</h4>
          <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
            <span className="text-xs text-gray-600">i</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {suggestedConnections.slice(0, 3).map((connection) => (
            <ConnectionCard key={connection.id} connection={connection} />
          ))}
        </div>
        
        <div className="mt-4 pt-2 border-t border-gray-200">
          <button 
            onClick={handleViewAllRecommendations}
            className="text-blue-600 text-xs hover:underline flex items-center font-medium transition-colors"
          >
            View all recommendations
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* LinkedIn News */}
      {trendingNews.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-300 p-4 mt-2">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">LinkedIn News</h4>
          <div className="space-y-3">
            {trendingNews.slice(0, 3).map((news) => (
              <div 
                key={news.id}
                className="cursor-pointer hover:bg-gray-50 p-1 -m-1 rounded transition-colors"
                onClick={() => handleNewsClick(news.id)}
              >
                <p className="text-sm font-medium text-gray-900 leading-tight">
                  {news.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {news.timeAgo} • {news.readers}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200">
            <button className="text-blue-600 text-xs hover:underline font-medium">
              Show more
            </button>
          </div>
        </div>
      )}

      {/* Premium Ad */}
      {user && (
        <div className="bg-white rounded-lg border border-gray-300 p-4 mt-2">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-gray-500">Ad</span>
            <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-700 mb-3 leading-tight">
            {user.name}, unlock your full potential with LinkedIn Premium
          </p>
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full flex-shrink-0"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40/0a66c2/ffffff?text=U';
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Messaging</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;