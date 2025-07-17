import React, { useState } from 'react';
import { MoreHorizontal, X, ChevronDown } from 'lucide-react';

const Post = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  return (
    <div>
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
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQErqes_wGlUyA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728683157850?e=1758153600&v=beta&t=CVLNRoC-aDgO9f6hsLUOnW0KwiUG1ODKcjjiIiafQWQ"
                alt="Rimaz Tarek"
                className="w-8 h-8 rounded-full"
              />
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
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGqfIMmKldFnQ/profile-displayphoto-shrink_100_100/B4DZd.GqJNGYAY-/0/1750167368482?e=1758153600&v=beta&t=_72IcT0s9Yc890V1xyqiChGzcnw69UEkOGh7pMkhpTw"
              alt="Dr.Khouloud Akrout"
              className="w-12 h-12 rounded-full"
            />
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

          {/* Post Image */}
          <div className="mt-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D22AQF4or9RdJ8igQ/feedshare-shrink_800/B4DZgXN82HH8Ak-/0/1752736192515?e=1755734400&v=beta&t=NEQ-3SJwHcBSYSIgR1ZlFWqAGiPY084H_A_U0vYWUpU"
              alt="Healthcare content by Dr.Khouloud Akrout"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;