/** @format */

import "./globals.css";

export const metadata = {
  title:
    "Frontend Developer Portfolio | | Zain Abro Expert in React.js, Tailwind CSS, and Responsive Web Design",
  description:
    "Explore my portfolio as a Frontend Developer, showcasing expertise in HTML, CSS, JavaScript, React.js, Next.js and creative animations using Gsap. Discover responsive web design and stunning user interfaces. Let's create exceptional digital experiences together.",
  keywords:
    "Frontend development, Zain abro portfolio website, React portfolio website, Porfolio website for web developer, Portfolio website design, HTML, CSS, Tailwind CSS, JavaScript, React.js, GSAP animations, portfolio website, Frontend developer Languages,HTML, CSS, Tailwind CSS, JavaScript, ES6, React.js, GSAP, frontend development, web developer portfolio, responsive design, user interface design, web animations, website development, freelance developer, portfolio showcase, creative web solutions, modern web design, UI/UX design, cross-browser compatibility, mobile-friendly design, interactive websites, clean code practices, GitHub projects, client testimonials, professional web developer, software engineer, custom web applications, digital portfolio, online portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth font-Barlow not-italic' lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <link className=' scale-125' rel='icon' href='/img/ZainAbro.png' />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
