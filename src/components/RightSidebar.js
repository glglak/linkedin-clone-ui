import React from 'react';
import { MoreHorizontal, Plus, Eye, ChevronDown } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div>
      {/* Today's Puzzle */}
      <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2">
        <h4 className="font-semibold text-sm text-gray-900 mb-3">Today's puzzle</h4>
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center relative">
            <div className="grid grid-cols-3 gap-1">
              <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm text-gray-900">Zip - a quick brain teaser</p>
            <p className="text-xs text-gray-600">Solve in 60s or less!</p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Eye className="w-3 h-3 mr-1" />
              Score is private to you
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 transform rotate-90" />
        </div>
      </div>

      {/* Add to your feed */}
      <div className="bg-white rounded-lg border border-gray-300 p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-sm text-gray-900">Add to your feed</h4>
          <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
            <span className="text-xs text-gray-600">i</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">its</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900 leading-tight">International Turnkey Systems - ITS</p>
              <p className="text-xs text-gray-600 mt-0.5">Company • Software Development</p>
              <button className="mt-2 flex items-center text-gray-700 border border-gray-400 rounded-full px-4 py-1 text-xs hover:bg-gray-50 hover:border-gray-600">
                <Plus className="w-3 h-3 mr-1" />
                Follow
              </button>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-teal-600 rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900 leading-tight">Siemens Digital Industries Software</p>
              <p className="text-xs text-gray-600 mt-0.5">Company • Software Development</p>
              <button className="mt-2 flex items-center text-gray-700 border border-gray-400 rounded-full px-4 py-1 text-xs hover:bg-gray-50 hover:border-gray-600">
                <Plus className="w-3 h-3 mr-1" />
                Follow
              </button>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900 leading-tight">Salah Abo El Magd</p>
              <p className="text-xs text-gray-600 mt-0.5 leading-tight">International Trainer | Leadership Coach for CEOs & Executives |Founder of a...</p>
              <button className="mt-2 flex items-center text-gray-700 border border-gray-400 rounded-full px-4 py-1 text-xs hover:bg-gray-50 hover:border-gray-600">
                <Plus className="w-3 h-3 mr-1" />
                Follow
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-2 border-t border-gray-200">
          <button className="text-blue-600 text-xs hover:underline flex items-center font-medium">
            View all recommendations
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* Premium Ad */}
      <div className="bg-white rounded-lg border border-gray-300 p-4 mt-2">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-500">Ad</span>
          <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <p className="text-sm text-gray-700 mb-3 leading-tight">Karim, unlock your full potential with LinkedIn Premium</p>
        <div className="flex items-center space-x-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQECvOygHKgnYg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709318989954?e=1758153600&v=beta&t=zZJC1pVSqQrbsupQrUWpgpS0_RqDiUdIIT6Eo10l8jc"
            alt="Karim Deraz"
            className="w-10 h-10 rounded-full flex-shrink-0"
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
    </div>
  );
};

export default RightSidebar;