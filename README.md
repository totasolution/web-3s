# PT. Sigma Solusi Servis - Modern HR Solutions Website

A modern, elegant, and SEO-friendly website built with Next.js for PT. Sigma Solusi Servis, a leading HR solutions provider in Indonesia.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **SEO Optimized**: Built with Next.js for excellent search engine visibility
- **Performance**: Fast loading times and optimized performance
- **Mobile First**: Fully responsive design for all devices
- **Interactive Elements**: Smooth animations and micro-interactions
- **Professional UI**: Clean, modern interface suitable for business

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📱 Pages

- **Home**: Hero section, services overview, and company highlights
- **About**: Company information, core values, and client testimonials
- **Services**: Detailed service offerings with features and benefits
- **Contact**: Contact form and company information
- **Login**: Client portal access

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd web-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── contact/          # Contact page
│   ├── login/            # Login page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx    # Navigation component
│   ├── HeroSection.tsx   # Hero section
│   ├── ServicesSection.tsx # Services section
│   └── Footer.tsx        # Footer component
└── types/                 # TypeScript type definitions
```

## 🎨 Customization

### Colors
The website uses a blue-to-purple gradient theme. You can customize colors in:
- `tailwind.config.js` for Tailwind classes
- Component files for specific color schemes

### Content
Update content in the respective page files:
- Company information in `src/app/about/page.tsx`
- Services in `src/app/services/page.tsx`
- Contact details in `src/app/contact/page.tsx`

### Styling
Modify styles in:
- `src/app/globals.css` for global styles
- Individual component files for component-specific styles
- Tailwind classes for utility-based styling

## 📊 SEO Features

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for schema markup
- **Performance**: Fast loading for better search rankings
- **Mobile Friendly**: Responsive design for mobile-first indexing

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Build command: `npm run build`
- **Traditional Hosting**: Build with `npm run build` and upload the `out` folder

## 📈 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as needed
- **Minification**: Automatic CSS and JS minification
- **Caching**: Built-in caching strategies

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components
4. Add navigation links in `Navigation.tsx`

### Adding New Components

1. Create a new file in `src/components/`
2. Export the component
3. Import and use in your pages

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary software for PT. Sigma Solusi Servis.

## 🤝 Support

For support or questions:
- Email: info@sigmasolusiservis.com
- Phone: +62 21 1234 5678

## 🚀 Future Enhancements

- **Blog System**: Add a blog for HR insights
- **Client Portal**: Enhanced client dashboard
- **Multi-language**: Indonesian and English support
- **CMS Integration**: Content management system
- **Analytics**: Advanced analytics and tracking
- **Chat Support**: Live chat functionality

---

Built with ❤️ for PT. Sigma Solusi Servis
# web-3s
