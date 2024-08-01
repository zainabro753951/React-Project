/** @format */

export const metadata = {
  title:
    "Contact Me | Get in Touch for Frontend Development Inquiries and Collaborations",
  description:
    "Reach out to me for frontend development inquiries, collaborations, or project discussions. Find my contact details, including addresses and a convenient contact form, to easily get in touch and start a conversation about how we can work together.",
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth font-Barlow not-italic' lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta charSet='UTF-8' />
        <meta
          property='og:title'
          content='Contact Me | Get in Touch for Frontend Development Inquiries and Collaborations '
        />
        <meta
          property='og:description'
          content='Reach out to me for frontend development inquiries, collaborations, or project discussions. Find my contact details, including addresses and a convenient contact form, to easily get in touch and start a conversation about how we can work together.'
        />
        <meta
          property='og:url'
          content='https://graceful-ganache-f860cd.netlify.app/Contact'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
