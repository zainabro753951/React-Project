/** @format */

export const metadata = {
  title: "Latest Frontend Development Insights & Tips | Zain Abro Blog",
  description:
    "Explore expert insights, tutorials, and tips on frontend development. Stay updated with the latest trends in HTML, CSS, JavaScript, React.js, and web design on Zain Abro's blog.",
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
          content='Frontend Development Blog | Expert Tips & Trends by Zain Abro'
        />
        <meta
          property='og:description'
          content="Dive into the world of frontend development with Zain Abro's blog. Discover tutorials, best practices, and the latest web development trends, covering HTML, CSS, JavaScript, React.js, and more."
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
