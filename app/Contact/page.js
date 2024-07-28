import React, { Suspense, lazy } from "react";
const Map = lazy(() => import("./Components/Map"));
const Header = lazy(() => import("../Components/Header"));
const ContactMe = lazy(() => import("./Components/Contact"));
const Address = lazy(() => import("./Components/Address"));
const Footer = lazy(() => import("../About/Components/Footer"));

const Contact = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center text-5xl font-Barlow not-italic font-bold bg-[#1b1d21] text-white">
            <img
              className=" animate-spin w-[500px] h-[200px] object-cover"
              src="/img/reloader.gif"
            />
          </div>
        }
      >
        <Header />
        <Map/>
        <Address />
        <ContactMe/>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Contact;
