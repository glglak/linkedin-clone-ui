// API Services for LinkedIn Clone
// In a real application, these would connect to actual REST endpoints

// Mock delay function to simulate API calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// User Service
export const UserService = {
  getCurrentUser: async () => {
    await delay(500);
    return {
      id: 1,
      name: "Karim Deraz",
      headline: "Principal Solution Architect | AI Enthusiast | Entrepreneur",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQECvOygHKgnYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709318989954?e=1758153600&v=beta&t=oCx7ZFobdFLlyVLoHiQZCedyGObaroM8AP78Oach2BE",
      backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Cairo",
      isPremium: true,
      profileViews: 873,
      postImpressions: 7800,
      connections: 234
    };
  },

  getUserProfile: async (userId) => {
    await delay(300);
    return {
      id: userId,
      name: "User Name",
      headline: "Software Engineer",
      avatar: "https://via.placeholder.com/150",
      mutualConnections: 15
    };
  },

  updateProfile: async (profileData) => {
    await delay(800);
    return { success: true, message: "Profile updated successfully" };
  }
};

// Posts Service
export const PostsService = {
  getFeedPosts: async (page = 1, limit = 10) => {
    await delay(700);
    return [
      {
        id: 1,
        author: {
          name: "Ahmed Abdel Hameed",
          headline: "Vice President & Board Member for Digital Services",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGC7A8pRn7eYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684753490004?e=1758153600&v=beta&t=kNF5BzPEU7GDEKGpJkSgejTX7JlvUcrJ5UFN0NfUzUI",
          verified: true,
          timeAgo: "3h"
        },
        content: "I've been reflecting on the latest advancements in AI and how digital services are evolving. The potential for automation and intelligent solutions to streamline our workflows is incredible. What are your thoughts on how much human effort we can realistically save while maintaining quality and innovation? The intersection of AI and digital transformation continues to fascinate me. #AI #DigitalServices #Innovation",
        likes: 147,
        comments: 28,
        reposts: 12,
        isLiked: false,
        images: [],
        video: null
      },
      {
        id: 2,
        author: {
          name: "Muhammed Gouda",
          headline: "Software Expert and Leader",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGQA6NII7cKEg/profile-displayphoto-shrink_400_400/B4DZPGVTgPGgAg-/0/1734199295570?e=1758153600&v=beta&t=Og-WUZjDQ0Yc7uxs1c0KCmtLUCGdv6z3wyxdytwAarY",
          timeAgo: "5h"
        },
        content: "سألت الـ ChatGPT: \"عندي bug مش عارف أحله من 3 ساعات، ممكن تساعدني؟\" 🐛\n\nرد عليا: \"Have you tried console.log('IT WORKS')?\" \n\nقولت له: \"لا، جربت كل حاجة تقريباً\"\n\nقالي: \"Then try console.log('IT STILL DOESNT WORK') 🤷‍♂️\"\n\nبعدها بربع ساعة لقيت المشكلة... كان ناقصني semicolon واحدة بس! 😭\n\nسألته: \"ليه مقولتليش من الأول؟\"\n\nرد: \"Where's the fun in that? 😈\"\n\n#DebuggingLife #ChatGPT #مطورين_مصر #AI_Trolling",
        likes: 89,
        comments: 15,
        reposts: 3,
        isLiked: true,
        images: [],
        video: null
      }
    ];
  },

  createPost: async (postData) => {
    await delay(1000);
    return {
      id: Date.now(),
      ...postData,
      likes: 0,
      comments: 0,
      reposts: 0,
      createdAt: new Date().toISOString()
    };
  },

  likePost: async (postId) => {
    await delay(200);
    return { success: true, postId };
  },

  commentOnPost: async (postId, comment) => {
    await delay(500);
    return { success: true, postId, comment };
  }
};

// Connections Service
export const ConnectionsService = {
  getSuggestedConnections: async () => {
    await delay(400);
    return [
      {
        id: 1,
        name: "Bayt.com",
        type: "company",
        category: "Technology, Information and Internet",
        avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAArlBMVEUAfcP///8AecHm8fgAe8L5/f43lc1Il84njMpKlM0AdcDg7vcigcXH3u84j8t2tNtandCMr9ju9/sAbb0Aesf/xReqzOacyeWw0ekAcL4XfrxEh7IAdcpajqO7q2rlukWopXhBiKzJsGD7wSq4rGL0vy6zqm17mZbrvDxcjKlvk5ylpH0uhLN9mI7Rslnxvjf/yQCRvN5hp9azyON5rtm+0+kAYrkAXLfX4/FCicixNOjgAAADgklEQVR4nO3YYVfiOBQG4OSSUpqmpYZiKTPqKKPOzujuFooL//+P7Q0oTQs7s4u4+uF9jqcHL6F9TZOQKgQAAAAAAAAAAAAAAAAAAAAAAAAAfFDqvQP8G/n0k8rfO8Sv0OeLy6svD5/pvYP8TK6ub2az2fj261R92KB5fn15O769u7+Zja++fPqYPUr59c238fjrb9N8+v1mPP7246FUQhEdSOuqHrWddN2m3OqfTnA09XB3O55dXlDOp87zx99n4z9+TGkQhv29ma+42mI4z6Y68Jvx76kw/bBvThczf/xzdvddvMzxXNxz0ItyKINEdXNqrrbElSFB54EstNfqjD9r0jjoZafrz/zx6j7Pm0Aqnz5euZgy2etNXcmupVLqXHZjShdT2hPGFGZvtcyF0YdjDnuxz3LOiqgTk94k5t6tdaXDMZUZtGSJlLHpxnyb3jzocEzO36JDK21fv3NM7a09XlSvanoyyEqOGaumcdnE9M9w2gXKiznoN8yIthlHwqtyb3LMOQ/RSbgrptVLzDrtt5xwgWpiysCf0quQ3E3PYr/ILYKMRkmrsXu1ibmn1r++8n+P2eZWQZrbbpljUrrqVv/PmP5C7i5NamT3yoFLbwrbrm5jtr8LgreJufLXHrewp5pHYTD0qn27iSlUqdttt2Nz3l6/BpuxSVprtTkIPmh+dfzU6s50Lbhz5iMOsBp1Z/r2Kk3x5zOd0mpxZtLFoiZzdraoomqRHf3YQBkvMql3lV3M2IupM+7NkDr7JreOLs2aP1CVnR0Vnzjiv8wO+W+QRWgDXnf5Jzq2P5VxAyyLdtxNH+iQb3rVFLOV6zcaRC1V4L5CxUS6Fan1Dt/0cilr0Z/Ivk7s0CY6ttFQ1kffdio4l+29cFMn0aLsuSm/42ZQTarotbgmhii0rbbOXOtyGZhSL+XTqOCYk79WvXUth0dPLTVIOqtJHLoFqdepFiTcDqmNByUP7zro1msdF5VcZlUhi7mN58H50ytjCiqLld8Tk9SdS4eJX0xq3uhTpzfjbVNRttu63jTx0kx6Ns7OLR/SVfW0XK3ndv6Kr1FF66jZp0fPj3Jk/KIhsb+nT83zVVttt5v9aEAiClN3WJNYG1qvhVmb1/2HwJvCu+2eP62fi4efkNwb3XcENU9KaruHVG7b9aqUAAAAAAAAAAAAAAAAAAAAAAAAAHByfwMV5EHH/7IbnwAAAABJRU5ErkJggg==",
        mutualConnections: 43
      },
      {
        id: 2,
        name: "Sam Altman",
        type: "person",
        headline: "CEO of OpenAI",
        avatar: "https://media.wired.com/photos/655cf58564de22446963f396/1:1/w_1498,h_1498,c_limit/Sam-Altman-OpenAI-Return-Business-1258197415.jpg",
        mutualConnections: 25
      }
    ];
  },

  sendConnectionRequest: async (userId) => {
    await delay(600);
    return { success: true, message: "Connection request sent" };
  },

  getNetworkStats: async () => {
    await delay(300);
    return {
      connections: 234,
      views: 234,
      impressions: 5082
    };
  }
};

// Notifications Service
export const NotificationService = {
  getNotificationCounts: async () => {
    await delay(200);
    return {
      home: 1,
      notifications: 1,
      messages: 0
    };
  },

  getNotifications: async () => {
    await delay(400);
    return [
      {
        id: 1,
        type: "like",
        message: "Ahmad Sayyam liked your post",
        timeAgo: "2h",
        read: false
      }
    ];
  },

  markAsRead: async (notificationId) => {
    await delay(200);
    return { success: true };
  }
};

// Search Service
export const SearchService = {
  search: async (query, filters = {}) => {
    await delay(600);
    console.log('Searching for:', query, 'with filters:', filters);
    return {
      people: [],
      companies: [],
      posts: [],
      jobs: []
    };
  },

  getRecentSearches: async () => {
    await delay(200);
    return ["React Developer", "LinkedIn API", "Cairo Jobs"];
  }
};

// Jobs Service  
export const JobsService = {
  getRecommendedJobs: async () => {
    await delay(500);
    return [
      {
        id: 1,
        title: "Senior React Developer",
        company: "Tech Company",
        location: "Cairo, Egypt",
        timePosted: "2d",
        applicants: 15
      }
    ];
  }
};

// News Service
export const NewsService = {
  getTrendingNews: async () => {
    await delay(400);
    return [
      {
        id: 1,
        title: "Tech industry trends in 2024",
        source: "LinkedIn News",
        timeAgo: "3h",
        readers: "1,234 readers"
      }
    ];
  }
}; 