import React, { useState } from 'react';
import { MoreHorizontal, X } from 'lucide-react';
import { PostsService } from '../services/api';

const Post = ({ post, onLike, onComment, onShare }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState(post.likes || 0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLike = async () => {
    try {
      await PostsService.likePost(post.id);
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);
      setLikes(prev => newLikedState ? prev + 1 : prev - 1);
      
      if (onLike) {
        onLike(post.id, newLikedState);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      await PostsService.commentOnPost(post.id, commentText);
      setCommentText('');
      
      if (onComment) {
        onComment(post.id, commentText);
      }
    } catch (error) {
      console.error('Error commenting on post:', error);
    }
  };

  const handleShare = () => {
    console.log('Sharing post:', post.id);
    if (onShare) {
      onShare(post.id);
    }
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    console.log(`${isFollowing ? 'Unfollowing' : 'Following'} ${post.author.name}`);
  };

  const handleAuthorClick = () => {
    console.log('Navigate to author profile:', post.author.id);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = post.content && post.content.length > 200;
  const displayContent = shouldTruncate && !isExpanded 
    ? post.content.substring(0, 200) + '...' 
    : post.content;

  const formatTime = (timeAgo) => {
    return timeAgo || '1h';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-300">
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full cursor-pointer hover:brightness-110 transition-all"
              onClick={handleAuthorClick}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/48/0a66c2/ffffff?text=U';
              }}
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 
                  className="font-semibold text-gray-900 hover:underline cursor-pointer"
                  onClick={handleAuthorClick}
                >
                  {post.author.name}
                </h3>
                {post.author.verified && (
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {post.author.isPremium && (
                  <div className="flex-shrink-0">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" width="24" height="24"/>
                    </svg>
                  </div>
                )}
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 text-sm">{post.author.connectionDegree || '2nd'}</span>
                {!post.author.isConnected && !isFollowing && (
                  <button 
                    onClick={handleFollow}
                    className="text-blue-600 text-sm font-medium hover:underline cursor-pointer ml-2 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path fill="#0a66c2" d="M8 0a8 8 0 100 16A8 8 0 008 0zM4 8a.5.5 0 01.5-.5h3V4a.5.5 0 011 0v3.5h3a.5.5 0 010 1h-3V12a.5.5 0 01-1 0V8.5h-3A.5.5 0 014 8z"/>
                    </svg>
                    <span className="text-blue-600">Follow</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-600 mb-1">{post.author.headline}</p>
              <div className="flex items-center text-xs text-gray-500 mb-3">
                <span>{formatTime(post.author.timeAgo)} • 🌍</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Post Content */}
        <div className="text-sm text-gray-900 mb-4 leading-normal">
          {displayContent}
          {shouldTruncate && (
            <button 
              onClick={toggleExpanded}
              className="text-blue-600 hover:underline cursor-pointer ml-1"
            >
              {isExpanded ? 'less' : 'more'}
            </button>
          )}
        </div>

        {/* Post Image */}
        {post.image && (
          <div className="mb-4">
            <img
              src={post.image}
              alt="Post content"
              className="w-full rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Post Video */}
        {post.video && (
          <div className="mb-4">
            <video
              src={post.video}
              className="w-full rounded-lg"
              controls
            />
          </div>
        )}

        {/* Reaction Icons Row - LinkedIn Style */}
        {likes > 0 && (
          <div className="flex items-center justify-between mb-3">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <div className="flex items-center -space-x-1">
                {/* Like icon */}
                <img 
                  className="w-4 h-4 z-10" 
                  src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" 
                  alt="like"
                />
                {/* Love icon */}
                <img 
                  className="w-4 h-4 z-20" 
                  src="https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22" 
                  alt="love"
                />
                {/* Celebrate icon */}
                <img 
                  className="w-4 h-4 z-30" 
                  src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8" 
                  alt="celebrate"
                />
              </div>
              <span className="text-xs text-gray-600">{likes.toLocaleString()}</span>
            </button>
            
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              {post.comments > 0 && (
                <span>{post.comments} comments</span>
              )}
              {post.reposts > 0 && (
                <span>{post.reposts} reposts</span>
              )}
            </div>
          </div>
        )}

        {/* Divider */}
        {(likes > 0 || post.comments > 0 || post.reposts > 0) && (
          <div className="border-t border-gray-200 mb-2"></div>
        )}

        {/* Action Buttons - LinkedIn Style */}
        <div className="flex items-center justify-around p-2">
          
          {/* Profile Identity Toggle */}
          <button className="flex items-center p-2 hover:bg-gray-100 rounded transition-colors">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQECvOygHKgnYg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709318989954?e=1758153600&v=beta&t=4d-Tqfn_trOK6zyGs-PlFGzrbVVfajeS1YyS3gR5XY0" 
              loading="lazy" 
              alt="Karim Deraz" 
              className="w-6 h-6 rounded-full"
            />
            <svg className="w-3 h-3 ml-1 text-gray-600" viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 11L3 6h10l-5 5z"/>
            </svg>
          </button>

          {/* Like Button */}
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors ${
              isLiked ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
            </svg>
            <span className="text-sm font-medium">Like</span>
          </button>

          {/* Comment Button */}
          <button 
            onClick={handleComment}
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
            </svg>
            <span className="text-sm font-medium">Comment</span>
          </button>

          {/* Repost Button */}
          <button 
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.3.3 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
            </svg>
            <span className="text-sm font-medium">Repost</span>
          </button>

          {/* Send Button */}
          <button className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
            </svg>
            <span className="text-sm font-medium">Send</span>
          </button>

        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <form onSubmit={handleSubmitComment} className="flex space-x-3">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQECvOygHKgnYg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709318989954?e=1758153600&v=beta&t=zZJC1pVSqQrbsupQrUWpgpS0_RqDiUdIIT6Eo10l8jc"
                alt="Your avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;