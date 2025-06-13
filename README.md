# Aviva Photography Website 📸

A beautiful, responsive photography portfolio website showcasing family photography services including newborn, maternity, family portraits, and smash cake photography sessions.

## 🌟 Live Demo

Visit the live website: [Viva Family Photography](http://localhost:3000) (local development)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Photography Categories](#photography-categories)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

Viva Family Photography is a professional photography portfolio website created for Aviva Stoller, specializing in capturing precious family moments. The website showcases different photography categories and provides an easy way for clients to view work and book sessions.

### Key Highlights
- **Modern Design**: Clean, elegant interface that puts photography front and center
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Gallery Showcase**: Beautiful image galleries for each photography category
- **Contact Integration**: Direct email integration for easy client communication
- **Professional Presentation**: Designed to convert visitors into clients

## ✨ Features

### 🎨 Design & User Experience
- **Hero Slideshow**: Auto-rotating image carousel showcasing best work
- **Image Galleries**: Category-specific galleries with hover effects
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Custom Logo Section**: Professional branding with elegant typography
- **Smooth Navigation**: Easy-to-use navigation between categories

### 📸 Photography Categories
- **Family Portraits**: Traditional family photography sessions
- **Newborn Photography**: Gentle, safe newborn sessions
- **Maternity Photography**: Celebrating pregnancy milestones
- **Smash Cake Sessions**: Fun first birthday celebrations

### 🔧 Technical Features
- **Server-Side Rendering**: EJS templating for fast page loads
- **Static Asset Optimization**: Efficient image and CSS delivery
- **Contact Forms**: Formspree integration for lead generation
- **Error Handling**: Custom 404 pages
- **SEO Friendly**: Optimized meta tags and semantic HTML

### 📱 User Features
- **Easy Booking**: Direct email links for session booking
- **Portfolio Browsing**: Organized galleries by photography type
- **Contact Form**: Detailed inquiry form with session type selection
- **Social Media Integration**: Links to photographer's social profiles

## 🛠 Technologies Used

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **EJS**: Embedded JavaScript templating engine

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with responsive design
- **JavaScript**: Interactive elements and slideshow functionality
- **Responsive Design**: Mobile-first CSS approach

### Development Tools
- **npm**: Package management
- **Mocha**: Testing framework
- **Git**: Version control

### External Services
- **Formspree**: Contact form handling
- **Email Integration**: Direct mailto links for bookings

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/gianlucabinetti/aviva-photography-website.git
   cd aviva-photography-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

### Environment Setup
The application runs on port 3000 by default. You can change this by setting the PORT environment variable:

```bash
PORT=8080 npm start
```

## 💡 Usage

### Running the Application
```bash
# Start the server
npm start

# Run tests
npm test

# Development mode (if you add nodemon)
npm run dev
```

### Accessing Different Pages
- **Homepage**: `http://localhost:3000/`
- **About**: `http://localhost:3000/about`
- **Family Portraits**: `http://localhost:3000/family-portraits`
- **Newborn**: `http://localhost:3000/newborn`
- **Maternity**: `http://localhost:3000/maternity`
- **Smash Cake**: `http://localhost:3000/smash-cake`

## 📁 Project Structure

```
aviva-photography-website/
├── Views/                      # EJS templates
│   ├── partials/              # Reusable template components
│   │   ├── header.ejs         # Site header with navigation
│   │   └── footer.ejs         # Site footer
│   ├── index.ejs              # Homepage template
│   ├── about.ejs              # About page template
│   ├── family-portraits.ejs   # Family portraits gallery
│   ├── newborn.ejs           # Newborn gallery
│   ├── maternity.ejs         # Maternity gallery
│   ├── smash-cake.ejs        # Smash cake gallery
│   └── 404.ejs               # Error page template
├── public/                    # Static assets
│   ├── css/                   # Stylesheets
│   ├── images/               # Photography portfolio images
│   │   ├── Family-Portraits/ # Family photo collection
│   │   ├── Newborn/          # Newborn photo collection
│   │   ├── Maternity/        # Maternity photo collection
│   │   ├── Smash-Cake/       # Smash cake photo collection
│   │   ├── Logo.webp         # Site logo
│   │   └── *.png/*.webp      # Social media icons
│   └── fonts/                # Custom fonts
├── test/                     # Test files
│   └── app.test.js           # Basic test suite
├── node_modules/             # Dependencies (auto-generated)
├── app.js                    # Main application file
├── package.json              # Project configuration
├── package-lock.json         # Dependency lock file
└── README.md                 # Project documentation
```

## 🛣 API Routes

### Main Routes
| Route | Method | Description | Template |
|-------|--------|-------------|----------|
| `/` | GET | Homepage with featured galleries | `index.ejs` |
| `/about` | GET | About the photographer | `about.ejs` |
| `/family-portraits` | GET | Family portrait gallery | `family-portraits.ejs` |
| `/newborn` | GET | Newborn photography gallery | `newborn.ejs` |
| `/maternity` | GET | Maternity photography gallery | `maternity.ejs` |
| `/smash-cake` | GET | Smash cake session gallery | `smash-cake.ejs` |

### Utility Routes
| Route | Method | Description |
|-------|--------|-------------|
| `/test-image` | GET | Test endpoint for image serving |
| `*` | GET | 404 error handler |

## 📸 Photography Categories

### 👨‍👩‍👧‍👦 Family Portraits
Traditional family photography sessions capturing authentic family connections and bonds. Perfect for:
- Annual family photos
- Holiday cards
- Multi-generational portraits
- Lifestyle family sessions

### 👶 Newborn Photography
Gentle, safe photography sessions for newborns up to 2 weeks old. Features:
- Soft, natural lighting
- Safe posing techniques
- Props and backgrounds
- Parent and sibling inclusion

### 🤰 Maternity Photography
Celebrating the beauty of pregnancy with elegant maternity portraits. Includes:
- Studio and outdoor options
- Couples and solo shots
- Elegant posing and styling
- Professional retouching

### 🎂 Smash Cake Sessions
Fun, messy first birthday celebrations featuring:
- Custom cake setups
- Colorful, playful backgrounds
- Before and after shots
- High-energy, fun atmosphere

## 🧪 Testing

The project includes a basic testing setup using Mocha:

```bash
# Run all tests
npm test

# Run specific test file
npx mocha test/app.test.js
```

### Test Structure
- Basic assertion testing
- Server functionality verification
- Template rendering validation

### Adding New Tests
Create new test files in the `test/` directory following the pattern:
```javascript
const assert = require('assert');

describe('Feature Name', function () {
  it('should do something', function () {
    // Test implementation
  });
});
```

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Deployment

#### Heroku Deployment
1. Install Heroku CLI
2. Create a new Heroku app:
   ```bash
   heroku create aviva-photography
   ```
3. Deploy:
   ```bash
   git push heroku main
   ```

#### Netlify Deployment
1. Build the project
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

#### Traditional Hosting
1. Upload files to your web server
2. Ensure Node.js is installed on the server
3. Run `npm install` and `npm start`

### Environment Variables
Set these environment variables in production:
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (production/development)

## 🤝 Contributing

We welcome contributions to improve the Aviva Photography Website! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation for significant changes
- Ensure responsive design principles
- Optimize images and assets

### Code Style
- Use consistent indentation (2 spaces)
- Follow Express.js best practices
- Comment complex logic
- Use semantic HTML elements
- Follow CSS BEM methodology

## 📄 License

This project is licensed under the ISC License. See the `package.json` file for details.

## 📞 Contact

### Photographer
**Aviva Stoller**
- Email: vivafamilyphotography@gmail.com
- Website: [Viva Family Photography](http://localhost:3000)

### Developer
**Gianluca Binetti**
- GitHub: [@gianlucabinetti](https://github.com/gianlucabinetti)
- Portfolio: [View Projects](https://github.com/gianlucabinetti?tab=repositories)

## 🙏 Acknowledgments

- Express.js community for excellent documentation
- EJS templating engine for powerful server-side rendering
- Formspree for seamless contact form integration
- Photography community for inspiration and best practices

---

**Made with ❤️ for capturing beautiful family moments**

*This project represents a professional photography portfolio designed to showcase artistic vision and connect with families seeking to preserve their precious memories.* 