# Backroads App

This is a React application created for educational and practice purposes, demonstrating the transformation of a static HTML/CSS/JavaScript website into a dynamic React app. It showcases component-based architecture, data management, and modern React practices.

[Working Application - Deployed](https://backroads-app.netlify.app/)

## Overview

The project is based on a tutorial from [My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF). It includes components for navigation, hero section, about, services, tours, and footer, all built using React and styled with CSS.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone or download the repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.
4. Run `npm start` to launch the development server.

### Build for Production

- Run `npm run build` to create a production build.

## Project Structure

- `src/App.js`: Main app component rendering all sections.
- `src/Components/`: Folder containing individual React components (e.g., [Navbar.js](src/Components/Navbar.js), [Hero.js](src/Components/Hero.js), etc.).
- `src/data.js`: Centralized data for links, services, and tours.
- `src/index.css`: Global styles.
- `public/`: Static assets like HTML template and manifest.

## Key Features

- Responsive design with CSS Grid and Flexbox.
- Smooth scrolling navigation.
- Reusable components for scalability.
- Data-driven rendering using arrays from [data.js](src/data.js).

## Educational Notes

This project is intended solely for learning React fundamentals, including:

- Component creation and props.
- Mapping over data to render lists.
- Importing images and managing assets.
- Basic state-less functional components.

It serves as a hands-on exercise to understand the shift from vanilla HTML to React, emphasizing best practices for code organization and reusability.

## Support

If you find this useful, consider supporting the original course creator: [Buy me a coffee](https://www.buymeacoffee.com/johnsmilga).

## License

This project is for educational use only and does not include a license. All assets and code are based on the referenced tutorial.
