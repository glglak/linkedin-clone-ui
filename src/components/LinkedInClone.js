import React, { useState } from 'react';
import { Search, Home, Users, Briefcase, MessageCircle, Bell, User, ChevronDown, MoreHorizontal, X, Play, Image, FileText, Plus, Eye } from 'lucide-react';

const LinkedInClone = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left section */}
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-blue-700 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <div className="relative ml-2 hidden md:block">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-72 pl-8 pr-4 py-2 bg-blue-50 border-0 rounded-sm text-sm focus:outline-none focus:bg-white focus:shadow-md"
                />
              </div>
            </div>

            {/* Center navigation */}
            <div className="flex items-center">
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1 border-b-2 border-black">
                  <Home className="w-6 h-6" />
                  <span className="text-xs mt-1 font-medium hidden sm:block">Home</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1">
                  <Users className="w-6 h-6" />
                  <span className="text-xs mt-1 hidden sm:block">My Network</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1">
                  <Briefcase className="w-6 h-6" />
                  <span className="text-xs mt-1 hidden sm:block">Jobs</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1 relative">
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-xs mt-1 hidden sm:block">Messaging</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1">
                  <Bell className="w-6 h-6" />
                  <span className="text-xs mt-1 hidden sm:block">Notifications</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="text-xs mt-1 hidden sm:block">Me</span>
                    <ChevronDown className="w-3 h-3 mt-1 ml-1 hidden sm:block" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black px-3 py-1 border-l border-gray-200 pl-6">
                <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-sm"></div>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-xs mt-1">For Business</span>
                  <ChevronDown className="w-3 h-3 mt-1 ml-1" />
                </div>
              </div>
              <div className="text-sm text-amber-700 cursor-pointer hover:underline font-medium">
                Advertise
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            {/* Profile Card */}
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden mb-2">
              <div className="h-14 bg-gradient-to-r from-slate-600 to-slate-700 relative">
                <div className="absolute -bottom-6 left-4">
                  <div className="w-16 h-16 bg-gray-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-0.5 rounded text-xs font-medium">
                  Premium
                </div>
              </div>
              <div className="pt-8 pb-3 px-4">
                <h3 className="font-semibold text-base text-gray-900 hover:underline cursor-pointer">Karim Deraz</h3>
                <div className="flex items-center">
                  <span className="text-blue-700 text-sm">🟦</span>
                </div>
                <p className="text-xs text-gray-700 mt-1 leading-4">Principal Solution Architect | AI Enthusiast | Entrepreneur</p>
                <p className="text-xs text-gray-500 mt-1">Cairo</p>
                <div className="mt-2">
                  <div className="text-xs text-blue-600 hover:underline cursor-pointer font-medium">
                    📋 Link Development
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

            {/* My Pages */}
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

          {/* Main Feed */}
          <div className="lg:col-span-6">
            {/* Create Post */}
            <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                <button className="flex-1 text-left bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 border border-gray-300 text-gray-600 text-sm font-medium">
                  Start a post
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded">
                    <Play className="w-5 h-5 text-green-600 fill-current" />
                    <span className="text-sm font-medium text-gray-700">Video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded">
                    <Image className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Photo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded">
                    <FileText className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">Write article</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sort dropdown */}
            <div className="flex justify-end mb-4 mr-4">
              <div className="text-xs text-gray-600">
                Sort by: <span className="font-medium text-gray-900">Top</span> 
                <ChevronDown className="w-3 h-3 inline ml-1" />
              </div>
            </div>

            {/* Post */}
            <div className="bg-white rounded-lg border border-gray-300">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    <div className="text-xs text-gray-600">
                      <span className="font-medium text-gray-900">Rimaz Tarek, DBA, MBA, PHRI</span> commented on this
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer hover:bg-gray-100 rounded p-1" />
                    <X className="w-5 h-5 text-gray-500 cursor-pointer hover:bg-gray-100 rounded p-1" />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900 hover:underline cursor-pointer">Dr.Khouloud Akrout خلود</h3>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600 text-sm">2nd</span>
                      <button 
                        onClick={() => setIsFollowing(!isFollowing)}
                        className="text-blue-600 text-sm font-medium hover:underline cursor-pointer ml-2"
                      >
                        ➕ Follow
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Healthcare Leader| Pharmacist lieutenant 🇹🇳 |LinkedIn Content creator ...</p>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span>2h • 🌍</span>
                    </div>
                    
                    <div className="text-sm text-gray-900 mb-4 leading-5" dir="rtl">
                      يجب إعادة النظر في عدد ساعات العمل اليومية فثماني ساعات في اليوم تعد إجحافا بحق 
                      الإنسان وعمره، بعد أن بدأ وقاهل وبقاء لا ينفقى لا من يوم ما يكفى لإيجاد حياة حقيقية خارج دوامة أن
                      <span className="text-blue-600 hover:underline cursor-pointer"> ...more</span>
                    </div>
                  </div>
                </div>

                {/* Post Image - Healthcare Illustration */}
                <div className="mt-4">
                  <div className="w-full h-80 bg-blue-100 rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden">
                    {/* Illustration placeholder that matches the screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-60"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl">🏥</span>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">Healthcare Content Image</p>
                      <p className="text-xs text-gray-500">Dr.Khouloud-Akrout</p>
                    </div>
                    {/* LinkedIn watermark */}
                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-bold text-blue-700">
                      in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
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
                <div className="w-10 h-10 bg-gray-400 rounded-full flex-shrink-0"></div>
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
        </div>
      </div>
    </div>
  );
};

export default LinkedInClone;