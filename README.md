# LinkedIn Clone UI

A pixel-perfect recreation of LinkedIn's user interface built with React.js and Tailwind CSS, featuring modular components and real LinkedIn styling.

![LinkedIn Clone](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.6-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- **Pixel-perfect UI**: Exact recreation of LinkedIn's interface
- **Modular Components**: Well-structured React components for easy maintenance
- **Real Assets**: Uses actual LinkedIn profile images and company logos
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover effects, notifications, and state management
- **RTL Support**: Arabic text support for international content

## 📁 Component Structure

```
src/
├── components/
│   ├── LinkedInClone.js    # Main container component
│   ├── Header.js           # Navigation header with search and menu
│   ├── LeftSidebar.js      # Profile card and pages section
│   ├── CreatePost.js       # Post creation interface
│   ├── Post.js             # Individual post component
│   └── RightSidebar.js     # Recommendations and ads
├── App.js
├── index.js
└── index.css
```

## 🎯 Components Overview

### Header Component
- LinkedIn logo with proper SVG
- Search functionality
- Navigation icons (Home, Network, Jobs, Messaging, Notifications)
- User profile dropdown
- Business menu and Advertise link
- Notification badges

### LeftSidebar Component
- **Profile Card**: Real background image and profile photo
- **Premium Badge**: LinkedIn premium indicator
- **Company Link**: Link Development logo and link
- **Stats**: Profile viewers (235) and post impressions (5,026)
- **My Pages**: Creative Units, FelCare, BotZoo with activity counts
- **Premium Features**: Premium subscription callout

### CreatePost Component
- Profile picture integration
- Post creation interface
- Media options (Video, Photo, Write Article) with proper icons
- Hover effects and interactions

### Post Component
- **Sort Options**: Top/Recent sorting dropdown
- **User Interactions**: Comment indicator from Rimaz Tarek
- **Main Post**: Dr. Khouloud Akrout's healthcare post
- **Arabic Text**: RTL text support
- **Follow Button**: Interactive follow functionality
- **Post Image**: Real healthcare content image

### RightSidebar Component
- **Today's Puzzle**: Zip brain teaser with interactive elements
- **Recommendations**: Company and people suggestions
- **Premium Ad**: Personalized LinkedIn Premium advertisement

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/glglak/linkedin-clone-ui.git
   cd linkedin-clone-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 🎨 Real Assets Used

- **Profile Images**: Actual LinkedIn profile photos
- **Company Logos**: Real company branding (Link Development, ITS, Siemens)
- **Background Images**: Professional LinkedIn background
- **Post Content**: Real healthcare industry post with Arabic text
- **LinkedIn Branding**: Official LinkedIn logo and styling

## 📱 Responsive Design

- **Desktop (1024px+)**: Full 3-column layout
- **Tablet (768px-1023px)**: Optimized 2-column layout
- **Mobile (<768px)**: Single column with responsive navigation

## 🧩 Key Features

✅ **Modular Architecture**: Each component is self-contained and reusable

✅ **Real Data Integration**: Uses actual LinkedIn profile and company data

✅ **Interactive Elements**: 
- Notification badges with counts
- Follow buttons with state management
- Hover effects on all clickable elements
- Sort dropdown functionality

✅ **Internationalization**: 
- RTL text support for Arabic content
- Proper text direction handling

✅ **Accessibility**: 
- Semantic HTML structure
- Proper alt text for images
- Keyboard navigation support

## 🚦 Available Scripts

- `npm start` - Development server
- `npm test` - Run tests
- `npm run build` - Production build
- `npm run eject` - Eject from Create React App

## 🎯 Future Enhancements

- [ ] Add more post types (polls, documents, events)
- [ ] Implement real-time messaging interface
- [ ] Add job posting functionality
- [ ] Include connection management
- [ ] Add dark mode support
- [ ] Implement infinite scroll for feed

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- LinkedIn for the amazing UI design inspiration
- Tailwind CSS for the utility-first approach
- Lucide React for beautiful icons
- React community for excellent documentation

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [Coming Soon]

📧 **Contact**: [Your GitHub Profile](https://github.com/glglak)