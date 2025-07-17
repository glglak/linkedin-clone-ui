import React, { useState, useEffect } from 'react';
import { UserService, PostsService } from '../services/api';

const CreatePost = ({ onPostCreated }) => {
  const [user, setUser] = useState(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [postContent, setPostContent] = useState('');

  // Fetch user data for profile image
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await UserService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleStartPost = () => {
    setShowPostModal(true);
  };

  const handleVideoPost = () => {
    console.log('Starting video post...');
    // In real app, would open video upload/recording interface
  };

  const handlePhotoPost = () => {
    console.log('Starting photo post...');
    // In real app, would open photo upload interface
  };

  const handleWriteArticle = () => {
    console.log('Starting article creation...');
    // In real app, would open article editor
  };

  const handleSubmitPost = async () => {
    if (!postContent.trim()) return;

    try {
      setIsCreatingPost(true);
      const newPost = await PostsService.createPost({
        content: postContent,
        author: user,
        type: 'text'
      });
      
      // Notify parent component of new post
      if (onPostCreated) {
        onPostCreated(newPost);
      }
      
      // Reset form
      setPostContent('');
      setShowPostModal(false);
      
      console.log('Post created successfully:', newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsCreatingPost(false);
    }
  };

  const handleCloseModal = () => {
    setShowPostModal(false);
    setPostContent('');
  };

  // Post creation modal
  const PostModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create a post</h2>
          <button 
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-500">Public</p>
          </div>
        </div>
        
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What do you want to talk about?"
          className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
          autoFocus
        />
        
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmitPost}
            disabled={!postContent.trim() || isCreatingPost}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {isCreatingPost ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2 animate-pulse">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-12 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex space-x-6">
          <div className="w-16 h-8 bg-gray-200 rounded"></div>
          <div className="w-16 h-8 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-300 p-4 mb-2">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full cursor-pointer hover:brightness-110 transition-all"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/48/0a66c2/ffffff?text=U';
            }}
          />
          <button 
            onClick={handleStartPost}
            className="flex-1 text-left bg-transparent hover:bg-gray-50 rounded-full px-4 py-3 border border-gray-400 text-gray-600 text-sm font-medium transition-colors"
          >
            Start a post
          </button>
        </div>
        
        <div className="flex items-center justify-around">
          <button 
            onClick={handleVideoPost}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
              <path fill="currentColor" d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Video</span>
          </button>
          
          <button 
            onClick={handlePhotoPost}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
              <path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Photo</span>
          </button>
          
          <button 
            onClick={handleWriteArticle}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 text-orange-600">
              <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Write article</span>
          </button>
        </div>
      </div>

      {/* Post Modal */}
      {showPostModal && <PostModal />}
    </>
  );
};

export default CreatePost;