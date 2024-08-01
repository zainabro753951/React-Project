/** @format */

export const metadata = {
  title:
    "My Work | Showcasing Projects Built with React.js, HTML, CSS, and JavaScript Tailwind css other",
  description:
    "Explore my portfolio of projects developed using React.js, HTML, CSS, and JavaScript. From interactive web applications to visually appealing websites, see how my expertise in frontend technologies delivers innovative solutions and exceptional user experiences.",
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
          content='My Work | Showcasing Projects Built with React.js, HTML, CSS, and JavaScript '
        />
        <meta
          property='og:description'
          content='Explore my portfolio of projects developed using React.js, HTML, CSS, and JavaScript. From interactive web applications to visually appealing websites, see how my expertise in frontend technologies delivers innovative solutions and exceptional user experiences.'
        />
        <meta
          property='og:url'
          content='https://graceful-ganache-f860cd.netlify.app/Work'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
