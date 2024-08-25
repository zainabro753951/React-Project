/** @format */

import "./globals.css";

export const metadata = {
<<<<<<< HEAD
  title: "Zain Abro | Expert of Frontend Technologies",
  description:
    "Discover professional frontend development services including HTML, CSS, Tailwind, Bootstrap, JavaScript, GSAP, and React.",
=======
  title:
    "Web Developer Portfolio | Zain Abro - Creatively Designed Projects & Services",
  description:
    "Explore the impressive portfolio of Zain Abro, a skilled web developer. Discover innovative projects, professional services, and expertise in modern web technologies like React, JavaScript, and more. Let's create something amazing together!",
>>>>>>> 699f0447ad56cefb7b985bda99fa15097be21b62
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html className="scroll-smooth font-Barlow not-italic" lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Web Developer, React Developer, Frontend Development, JavaScript Projects, Creative Solutions"
        ></meta>
        <meta
          property="og:title"
          content="Web Developer Portfolio | Zain Abro - Creative Solutions"
        />
        <meta
          property="og:description"
          content="Discover the portfolio of Zain Abro, a talented web developer specializing in React and modern web technologies. Check out innovative projects and professional services that bring ideas to life."
        />
        <meta
          property="og:image"
          content="/img/og img/frontend_developer.jpeg"
        />
        <meta property="og:url" content="https://zainabro.netlify.app/" />
        <link rel="icon" href="/img/ZainAbro.png" />
=======
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
        <meta
          name='keywords'
          content='Web Developer, React Developer, Frontend Development, JavaScript Projects, Creative Solutions'></meta>
        <meta
          property='og:title'
          content='Web Developer Portfolio | Zain Abro - Creative Solutions'
        />
        <meta
          property='og:description'
          content='Discover the portfolio of Zain Abro, a talented web developer specializing in React and modern web technologies. Check out innovative projects and professional services that bring ideas to life.'
        />
        <meta
          property='og:image'
          content='/img/og img/frontend_developer.jpeg'
        />
        <meta property='og:url' content='https://zainabro.netlify.app/' />
        <link rel='icon' href='/img/ZainAbro.png' />
>>>>>>> 699f0447ad56cefb7b985bda99fa15097be21b62
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
