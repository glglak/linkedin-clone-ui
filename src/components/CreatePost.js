import React from 'react';

const CreatePost = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQECvOygHKgnYg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709318989954?e=1758153600&v=beta&t=zZJC1pVSqQrbsupQrUWpgpS0_RqDiUdIIT6Eo10l8jc"
          alt="Karim Deraz"
          className="w-12 h-12 rounded-full"
        />
        <button className="flex-1 text-left bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 border border-gray-300 text-gray-600 text-sm font-medium">
          Start a post
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded">
            {/* Video Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
              <path fill="currentColor" d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded">
            {/* Photo Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
              <path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Photo</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded">
            {/* Write Article Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 text-orange-500">
              <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Write article</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;