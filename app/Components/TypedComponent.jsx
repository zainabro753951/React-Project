"use client"
// TypedComponent.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Zain Abro", "Frontend Developer", "Website Designer!"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="flex md:justify-start xs:justify-center items-center text-[#2EE3B8] font-semibold font-Barlow not-italic md:mb-7 xs:mb-4 xs:text-3xl sm:text-4xl md:text-5xl">
            <p ref={el} />
        </div>
    );
};

export default TypedComponent;
