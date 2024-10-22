/** @format */

export const metadata = {
  title: "My Work | Frontend Developer Projects & Portfolio | Zain Abro",
  description:
    "Explore Zain Abro's portfolio showcasing a diverse range of frontend development projects. View detailed work examples in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Discover innovative web design solutions and code samples.",
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
          name='description'
          content='A portfolio showcasing my work in web development.'
        />
        <meta
          property='og:title'
          content="Frontend Developer Projects | Zain Abro's Work Portfolio"
        />
        <meta
          property='og:description'
          content="Check out Zain Abro's work portfolio featuring frontend development projects. From HTML and CSS to JavaScript and React.js, explore a collection of professional web design and development work that highlights technical skills and creativity."
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
