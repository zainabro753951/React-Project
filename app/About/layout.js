/** @format */

export const metadata = {
  title:
    "About Me | Frontend Developer Skilled in HTML, CSS, JavaScript, and Modern Frameworks",
  description:
    "Learn more about my journey as a Frontend Developer, mastering HTML, CSS, JavaScript, and frameworks like React.js, Next.js, Bootstrap, Tailwind css. Discover my passion for creating responsive, user-friendly, and visually appealing websites that deliver seamless digital experiences.",
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
          property='og:description'
          content='Learn more about my journey as a Frontend Developer, mastering HTML, CSS, JavaScript, and frameworks like React.js and Next.js. Discover my passion for creating responsive, user-friendly, and visually appealing websites that deliver seamless digital experiences.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://graceful-ganache-f860cd.netlify.app/'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
