import "./globals.css";

export const metadata = {
  title: "Portfolio | Zain Abro - Frontend Developer",
  description:
    "Explore my portfolio showcasing expertise in frontend development. Specializing in HTML, CSS (including Tailwind CSS), JavaScript (ES6+), React.js, and GSAP animations. Contact for bespoke web solutions",
  keywords:
    "Frontend development, HTML, CSS, Tailwind CSS, JavaScript, React.js, GSAP animations, portfolio website, Frontend developer Languages,HTML, CSS, Tailwind CSS, JavaScript, ES6, React.js, GSAP, frontend development, web developer portfolio, responsive design, user interface design, web animations, website development, freelance developer, portfolio showcase, creative web solutions, modern web design, UI/UX design, cross-browser compatibility, mobile-friendly design, interactive websites, clean code practices, GitHub projects, client testimonials, professional web developer, software engineer, custom web applications, digital portfolio, online portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
