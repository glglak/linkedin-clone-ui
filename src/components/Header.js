import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { UserService, NotificationService, SearchService } from '../services/api';

// Reusable NavItem Component
const NavItem = ({ icon, label, isActive = false, hasNotification = false, notificationCount = 0, onClick }) => (
  <div 
    className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-1 py-1 relative"
    onClick={onClick}
  >
    <div className="relative">
      {icon}
      {hasNotification && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
      )}
      {notificationCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {notificationCount}
        </div>
      )}
    </div>
    <span className="text-xs mt-1 hidden sm:block">{label}</span>
    {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>}
  </div>
);

// Main Header Component
const Header = () => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Fetch user data and notifications on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, notificationData] = await Promise.all([
          UserService.getCurrentUser(),
          NotificationService.getNotificationCounts()
        ]);
        setUser(userData);
        setNotifications(notificationData);
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    fetchData();
  }, []);

  // Navigation handlers
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    // In real app, this would trigger navigation
    console.log(`Navigating to: ${tab}`);
  };

  const handleSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      try {
        await SearchService.search(searchQuery);
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Navigation items configuration
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-6 h-6">
          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
        </svg>
      ),
      hasNotification: notifications.home > 0
    },
    {
      id: 'network',
      label: 'My Network',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-6 h-6">
          <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
        </svg>
      )
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-6 h-6">
          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
        </svg>
      )
    },
    {
      id: 'messaging',
      label: 'Messaging',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-6 h-6">
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
      ),
      notificationCount: notifications.messages || 0
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-6 h-6">
          <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
        </svg>
      ),
      notificationCount: notifications.notifications || 0
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left section - LinkedIn Logo + Search */}
          <div className="flex items-center space-x-3">
            {/* LinkedIn Logo */}
            <div 
              className="mr-1 cursor-pointer" 
              onClick={() => handleNavigation('home')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0a66c2" className="w-10 h-10" width="24" height="24" focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </div>
            
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-80 pl-8 pr-4 py-2 bg-blue-50 border-0 rounded-md text-sm focus:outline-none transition-all ${
                  isSearchFocused ? 'bg-white shadow-sm' : 'bg-blue-50'
                }`}
              />
            </div>
          </div>

          {/* Center navigation */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  isActive={activeTab === item.id}
                  hasNotification={item.hasNotification}
                  notificationCount={item.notificationCount}
                  onClick={() => handleNavigation(item.id)}
                />
              ))}
              
              {/* Me - User Profile */}
              {user && (
                <div 
                  className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-1 py-1"
                  onClick={() => handleNavigation('profile')}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-6 h-6 rounded-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/24/0a66c2/ffffff?text=U';
                    }}
                  />
                  <div className="flex items-center">
                    <span className="text-xs mt-1 hidden sm:block">Me</span>
                    <ChevronDown className="w-3 h-3 mt-1 ml-1 hidden sm:block" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="hidden lg:flex items-center space-x-1">
            <div 
              className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-1 py-1 border-l border-gray-200 pl-4"
              onClick={() => handleNavigation('business')}
            >
              {/* Grid icon for "For Business" */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="w-6 h-6">
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <div className="flex items-center">
                <span className="text-xs mt-1">For Business</span>
                <ChevronDown className="w-3 h-3 mt-1 ml-1" />
              </div>
            </div>
            <div 
              className="text-sm text-amber-700 cursor-pointer hover:underline font-medium px-1"
              onClick={() => handleNavigation('advertise')}
            >
              Advertise
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;