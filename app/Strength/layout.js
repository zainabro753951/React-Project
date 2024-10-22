/** @format */

export const metadata = {
  title: "My Strengths | Frontend Development Skills & Expertise | Zain Abro",
  description:
    "Discover Zain Abro's core strengths in frontend development. Explore expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Learn about the skills and strengths that drive successful web projects and innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta charSet='UTF-8' />
        <meta
          property='og:title'
          content="Frontend Development Strengths | Zain Abro's Skills & Expertise"
        />
        <meta
          property='og:description'
          content="Explore Zain Abro's strengths in frontend development, including proficiency in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Understand the skills that contribute to creating exceptional web experiences and solutions."
        />
        <meta
          property='og:image'
          content='/img/og img/frontend_developer.jpeg'
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
