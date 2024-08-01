/** @format */

export const metadata = {
  title:
    "My Strengths | Frontend Development Services, Skills, and Projects Showcase",
  description:
    "Explore my strengths as a Frontend Developer. Discover the range of services I offer, from responsive web design to complex JavaScript solutions. View my skills in HTML, CSS, React.js, and Next.js, and check out a selection of projects that highlight my expertise and creative approach to frontend development.",
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
          content='My Strengths | Frontend Development Services, Skills, and Projects Showcase'
        />
        <meta
          property='og:description'
          content='Explore my strengths as a Frontend Developer. Discover the range of services I offer, from responsive web design to complex JavaScript solutions. View my skills in HTML, CSS, React.js, and Next.js, and check out a selection of projects that highlight my expertise and creative approach to frontend development.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://graceful-ganache-f860cd.netlify.app/Strength'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
