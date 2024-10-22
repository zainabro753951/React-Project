/** @format */

export const metadata = {
  title: "About Zain Abro | Frontend Developer & Web Designer Portfolio",
  description:
    "Discover more about Zain Abro, a skilled frontend developer and web designer with expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Learn about [Your Name]'s journey, skills, and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='robots' content='index, follow' />
        <meta charSet='UTF-8' />
        <meta
          property='og:title'
          content='About Zain Abro | Frontend Developer & Web Designer'
        />
        <meta
          property='og:image'
          content='/img/og img/frontend_developer.jpeg'
        />
        <meta
          property='og:description'
          content="Get to know Zain Abro, a professional frontend developer and web designer specializing in modern web technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS. Explore Zain Abro's background, experience, and key projects."
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
