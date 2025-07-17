# Deployment Guide

## Local Development

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
   The app will open at `http://localhost:3000`

## Production Build

1. **Build the project**
   ```bash
   npm run build
   ```
   This creates a `build` folder with optimized files.

## Deployment Options

### 1. Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### 2. Vercel
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Create React App
3. Deploy automatically on push to main branch

### 3. GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://glglak.github.io/linkedin-clone-ui",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Environment Variables

If you need environment variables:

1. Create `.env` file in root:
   ```
   REACT_APP_API_URL=your_api_url
   ```

2. Use in code:
   ```javascript
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

## Performance Optimization

- The app uses code splitting with React.lazy() (can be added)
- Images are optimized for web
- Tailwind CSS is purged for production
- Bundle analyzer can be added for optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)
