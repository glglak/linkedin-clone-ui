import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { PostsService } from '../services/api';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch posts from API
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (pageNum = 1, reset = true) => {
    try {
      setIsLoading(pageNum === 1);
      const newPosts = await PostsService.getFeedPosts(pageNum, 10);
      
      if (reset) {
        setPosts(newPosts);
      } else {
        setPosts(prev => [...prev, ...newPosts]);
      }
      
      setHasMore(newPosts.length === 10);
      setPage(pageNum);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load posts');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePostCreated = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
    console.log('New post added to feed:', newPost);
  };

  const handlePostLike = (postId, isLiked) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isLiked, likes: isLiked ? post.likes + 1 : post.likes - 1 }
        : post
    ));
  };

  const handlePostComment = (postId, comment) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, comments: post.comments + 1 }
        : post
    ));
  };

  const handlePostShare = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, reposts: post.reposts + 1 }
        : post
    ));
  };

  const loadMore = () => {
    if (!isLoading && hasMore) {
      fetchPosts(page + 1, false);
    }
  };

  const SortDropdown = () => (
    <div className="flex justify-end mb-4 mr-4">
      <div className="relative">
        <button 
          className="flex items-center text-xs text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
          onClick={() => {/* Toggle dropdown */}}
        >
          Sort by: <span className="font-medium text-gray-900 ml-1">Top</span>
          <ChevronDown className="w-3 h-3 ml-1" />
        </button>
        {/* Dropdown menu would go here */}
      </div>
    </div>
  );

  const LoadingPost = () => (
    <div className="bg-white rounded-lg border border-gray-300 p-4 animate-pulse">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded mb-1 w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="h-40 bg-gray-200 rounded mb-4"></div>
      <div className="flex justify-between">
        <div className="h-8 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  );

  // Handle loading and error states
  if (isLoading && posts.length === 0) {
    return (
      <div className="space-y-4">
        <CreatePost onPostCreated={handlePostCreated} />
        <LoadingPost />
        <LoadingPost />
        <LoadingPost />
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="space-y-4">
        <CreatePost onPostCreated={handlePostCreated} />
        <div className="bg-white rounded-lg border border-gray-300 p-8 text-center">
          <p className="text-gray-500">{error}</p>
          <button 
            onClick={() => fetchPosts(1, true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Create Post */}
      <CreatePost onPostCreated={handlePostCreated} />

      {/* Sort Options */}
      <SortDropdown />

      {/* Posts Feed */}
      <div className="space-y-1">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={handlePostLike}
            onComment={handlePostComment}
            onShare={handlePostShare}
          />
        ))}

        {/* Loading States */}
        {isLoading && posts.length === 0 && (
          <>
            <LoadingPost />
            <LoadingPost />
            <LoadingPost />
          </>
        )}

        {/* Load More */}
        {!isLoading && hasMore && posts.length > 0 && (
          <div className="text-center py-4">
            <button
              onClick={loadMore}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              Load more posts
            </button>
          </div>
        )}

        {/* End of Feed */}
        {!isLoading && !hasMore && posts.length > 0 && (
          <div className="text-center py-8 text-gray-500 text-sm">
            You've reached the end of your feed
          </div>
        )}

        {/* Empty State */}
        {!isLoading && posts.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-300 p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts to show</h3>
            <p className="text-gray-500">Start following people to see posts in your feed.</p>
          </div>
        )}

        {/* Loading More */}
        {isLoading && posts.length > 0 && (
          <LoadingPost />
        )}
      </div>
    </div>
  );
};

export default Feed; 