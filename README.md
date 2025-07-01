# Portfolio Website

This is a modern portfolio website built using React 18, Vite, Tailwind CSS, and Framer Motion. The website features dark/light mode, animated sections, and project filtering capabilities.

## Features

- **Dark/Light Mode**: Easily toggle between dark and light themes.
- **Animated Sections**: Smooth animations for a better user experience using Framer Motion.
- **Project Filtering**: Filter projects by categories such as All, Web3, AI, and Embedded.
- **Responsive Design**: Fully responsive layout that works on various screen sizes.

## Project Structure

```
portfolio-website
├── src
│   ├── assets          # Images and other assets
│   ├── components      # Reusable components
│   ├── pages           # Page components
│   ├── data            # Project data
│   ├── hooks           # Custom hooks
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point of the application
│   └── index.css       # Global styles
├── public
│   └── favicon.svg     # Favicon for the website
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the portfolio website.

## Customization

You can customize the project by modifying the following files:

- **src/data/projects.ts**: Update project details and add new projects.
- **src/components/ThemeToggle.tsx**: Adjust the theme toggle functionality.
- **src/index.css**: Add custom styles or modify existing Tailwind CSS styles.

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.