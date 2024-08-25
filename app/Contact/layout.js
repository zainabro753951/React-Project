/** @format */

export const metadata = {
  title: "Contact Me - Get in Touch | Frontend Developer",
  description:
    "Connect with a frontend developer through the contact form and address details provided. Reach out for professional web development services and inquiries.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth font-Barlow not-italic" lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Contact me Zain Abro | Frontend Development & Web Design Inquiries"
        />
        <meta
          property="og:description"
          content="Reach out to [Zain Abro for frontend development and web design services. Use the contact form to inquire about project collaborations, freelance opportunities, or any questions related to web development."
        />
        <meta
          property="og:image"
          content="/img/og img/frontend_developer.jpeg"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
