import React from 'react';

const LeftSidebar = () => {
  return (
    <div>
      {/* Profile Card */}
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden mb-2">
        <div 
          className="h-14 relative"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4D16AQFKMsr8T2cXNw/profile-displaybackgroundimage-shrink_200_800/B4DZfIw9buHkAY-/0/1751419969095?e=1758153600&v=beta&t=SbV7hxz9iyAZ4vZMMxbrYQgt6QR5VzXubTLiPv4cPNQ)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute -bottom-6 left-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQECvOygHKgnYg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709318989954?e=1758153600&v=beta&t=zZJC1pVSqQrbsupQrUWpgpS0_RqDiUdIIT6Eo10l8jc"
              alt="Karim Deraz"
              className="w-16 h-16 rounded-full border-2 border-white"
            />
          </div>
          <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-0.5 rounded text-xs font-medium">
            Premium
          </div>
        </div>
        <div className="pt-8 pb-3 px-4">
          <div className="flex items-center space-x-1">
            <h3 className="font-semibold text-base text-gray-900 hover:underline cursor-pointer">Karim Deraz</h3>
            {/* Premium Badge SVG */}
            <svg width="14" height="14" className="flex-shrink-0">
              <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" x="0" y="0" width="14" height="14"></image>
            </svg>
          </div>
          <p className="text-xs text-gray-700 mt-1 leading-4">Principal Solution Architect | AI Enthusiast | Entrepreneur</p>
          <p className="text-xs text-gray-500 mt-1">Cairo</p>
          <div className="mt-2 flex items-center space-x-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQFpTZ1jG8gsWg/company-logo_100_100/company-logo_100_100/0/1733414595321/link_development_logo?e=1755734400&v=beta&t=-albznL0fLeZ7ERkgi4982W64af6NF-WfzhrpvXVLG4"
              alt="Link Development"
              className="w-4 h-4"
            />
            <div className="text-xs text-blue-600 hover:underline cursor-pointer font-medium">
              Link Development
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between items-center text-xs py-1 hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-600">Profile viewers</span>
              <span className="font-semibold text-blue-600">235</span>
            </div>
            <div className="flex justify-between items-center text-xs py-1 hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-600">Post impressions</span>
              <span className="font-semibold text-blue-600">5,026</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex items-center text-xs hover:bg-gray-50 cursor-pointer p-1 -m-1 rounded">
              <div className="w-3 h-3 bg-amber-500 rounded-sm mr-2"></div>
              <span className="text-gray-700 font-medium">Your Premium features</span>
            </div>
          </div>
        </div>
      </div>

      {/* My Pages - RESTORED */}
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
        <div className="px-4 pt-3">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-sm text-gray-900">My pages (5)</h4>
            <span className="text-xs text-gray-500 cursor-pointer hover:underline">See all</span>
          </div>
          
          <div className="space-y-2 pb-2">
            <div className="flex items-center hover:bg-gray-50 cursor-pointer p-1 -m-1 rounded">
              <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-sm mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">🎨</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Creative Units</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Activity</span>
                  <span className="text-blue-600 font-medium">0</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center hover:bg-gray-50 cursor-pointer p-1 -m-1 rounded">
              <div className="w-7 h-7 bg-red-500 rounded-sm mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏥</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">FelCare</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Activity</span>
                  <span className="text-blue-600 font-medium">0</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center hover:bg-gray-50 cursor-pointer p-1 -m-1 rounded">
              <div className="w-7 h-7 bg-blue-600 rounded-sm mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">BotZoo</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Activity</span>
                  <span className="text-blue-600 font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-2 pb-3">
            <p className="text-xs text-gray-600 mb-2">Stand out to prospects</p>
            <div className="flex items-center text-xs hover:bg-gray-50 cursor-pointer p-1 -m-1 rounded">
              <div className="w-3 h-3 bg-amber-500 rounded-sm mr-2"></div>
              <span className="text-gray-700 font-medium">Try Premium Page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;