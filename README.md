# MAARG-DARSHAN 🎓

**Discover. Learn. Enjoy** with MAARG-DARSHAN - An Educational Counselling Platform

MAARG-DARSHAN (also styled as "Marg-Darshan", meaning "Path Guidance" in Hindi) is a modern web application designed to provide educational counselling and guidance services. Built with Next.js and React, this platform offers an intuitive and engaging user experience for students seeking educational guidance.

## 🌟 Features

- **Interactive Homepage**: Eye-catching carousel and hero section to welcome visitors
- **About Us Section**: Detailed information about the platform's mission and vision
- **Services Showcase**: Display of various educational counselling services offered
- **Testimonials**: Real user experiences and feedback
- **FAQ Section**: Comprehensive answers to frequently asked questions
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean and intuitive interface with smooth animations

## 🚀 Tech Stack

- **Framework**: [Next.js 14.2.7](https://nextjs.org/) - React framework for production
- **Frontend Library**: [React 18](https://react.dev/) - JavaScript library for building user interfaces
- **Styling**: CSS Modules - Component-scoped styling
- **Icons**: [React Feather](https://github.com/feathericons/react-feather) - Beautiful open-source icons
- **Carousel**: [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel) - Responsive carousel component
- **Font Optimization**: Next.js Font Optimization with Inter font from Google Fonts

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.17 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)

You can verify your installations by running:
```bash
node --version
npm --version
```

## 💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devagarwal07/MAARG-DARSHAN.git
   cd MAARG-DARSHAN
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Mode

To start the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will automatically reload when you make changes to the code.

### Production Build

To create an optimized production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## 📁 Project Structure

```
MAARG-DARSHAN/
├── public/                 # Static assets
│   ├── about.png          # About section image
│   ├── bg.png             # Background images
│   ├── faq.png            # FAQ section image
│   ├── icon1.png          # Service icons
│   └── ...                # Other images
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.js      # Root layout component
│   │   ├── page.js        # Home page
│   │   ├── globals.css    # Global styles
│   │   └── *.module.css   # Page-specific styles
│   └── components/        # React components
│       ├── navbar/        # Navigation bar
│       ├── homepage/      # Homepage hero section
│       ├── about/         # About section
│       ├── carousel/      # Image carousel
│       ├── ourservices/   # Services section
│       ├── testimonials/  # Testimonials section
│       ├── faq/           # FAQ section
│       └── footer/        # Footer component
├── .eslintrc.json         # ESLint configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev`** - Starts the development server on http://localhost:3000
- **`npm run build`** - Creates an optimized production build
- **`npm start`** - Runs the production server (requires build first)
- **`npm run lint`** - Runs ESLint to check code quality

## 🎨 Customization

### Modifying Content

- **Homepage Text**: Edit `src/components/homepage/HomePage.jsx`
- **About Section**: Edit `src/components/about/About.jsx`
- **Services**: Edit `src/components/ourservices/services.jsx` (note: lowercase filename)
- **FAQ**: Edit `src/components/faq/Faq.jsx`

### Styling

Each component has its own CSS module file (e.g., `component.module.css`) for styling. Modify these files to change the appearance of individual components.

### Images

Replace images in the `public/` directory with your own. Make sure to use the same filenames or update the references in the component files.

## 🔧 Configuration

### Next.js Configuration

The `next.config.mjs` file contains Next.js configuration. Currently, it uses default settings.

### ESLint Configuration

The `.eslintrc.json` file contains ESLint rules for maintaining code quality.

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Other Deployment Options

- **Netlify**: Connect your repository and configure build settings
- **AWS Amplify**: Deploy with AWS's hosting service
- **Docker**: Use the Next.js Docker example for containerized deployment

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to MAARG-DARSHAN:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## 📝 License

This project is currently unlicensed. Please contact the repository owner for usage rights.

## 📧 Contact

For questions or support, please reach out to the project maintainer:

- **GitHub**: [@devagarwal07](https://github.com/devagarwal07)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Feather Icons](https://feathericons.com/)
- Font optimization using [Next.js Font Optimization](https://nextjs.org/docs/basic-features/font-optimization)

---

**Made with ❤️ for Educational Counselling**