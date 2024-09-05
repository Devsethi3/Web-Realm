# Web Realm - Digital Web Design Agency

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-v13.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.0-blue.svg)

**Web Realm** is a modern web design and development agency that specializes in crafting innovative websites tailored to your brand's success. Our website is built using `Next.js`, `Tailwind CSS`, and `Framer Motion` to deliver a seamless and visually stunning experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Mobile-first, responsive design that works on all devices.
- **Animations**: Smooth animations using Framer Motion to enhance the user experience.
- **SEO Optimized**: Integrated metadata and optimized SEO for better search engine ranking.
- **Modern UI/UX**: Clean and modern design with a purple-themed color palette.
- **Contact Form with EmailJS**: Contact form that sends inquiries directly to your email inbox.
- **Call to Action**: Engaging call-to-action sections to drive conversions.

## Technologies Used

- **Next.js**: React framework for building server-side rendered and statically generated websites.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React.
- **EmailJS**: Email service to send emails directly from the form without backend setup.
- **TypeScript**: Static type checking for JavaScript.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Devsethi3/web-realm.git
cd web-realm
npm install
```

## Usage

After installing the dependencies, you can run the development server:

```bash
npm run dev
```

This will start the app on [http://localhost:3000](http://localhost:3000).

### Production Build

To build the app for production, run:

```bash
npm run build
npm start
```

### SEO Implementation

The project uses the `Metadata` API in Next.js to handle SEO metadata. Here's how it is integrated:

```js
export const metadata: Metadata = {
  title: "Web Realm - Crafting Innovative Websites",
  description:
    "Web Realm is a web design agency focused on creating tailored websites that boost brand success.",
  keywords: ["Web Design", "Web Development", "Next.js", "Tailwind CSS"],
};
```

## Folder Structure

```bash
web-realm/
├── components/       # Reusable components (Navbar, Footer, etc.)
├── pages/            # Pages (index.tsx, about.tsx, contact.tsx, etc.)
├── public/           # Static assets (images, icons, etc.)
├── styles/           # Global and component-level styles
├── utils/            # Utility functions and constants
└── README.md         # Project documentation
```

## Contributing

We welcome contributions! If you'd like to improve this project or add new features, please submit a pull request. For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need support with your project.

Happy coding! 🚀
