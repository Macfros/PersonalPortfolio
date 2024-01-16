"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const StarterAnimation = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const hasBeenShown = localStorage.getItem('hasBeenShown');

        if (!hasBeenShown) {
            setTimeout(() => {
                setIsVisible(false); // Start fade-out

                setTimeout(() => {
                    setShouldRender(false); // Remove from DOM after fade-out completes
                    localStorage.setItem('hasBeenShown', true);
                }, 250); // Matches the CSS transition duration
            }, 1250);
        }
    }, []);

    if (!shouldRender) {
        return null;
    }

    const containerStyle = isVisible
        ? "transition-opacity duration-250 ease-out opacity-100"
        : "transition-opacity duration-250 ease-out opacity-0";

    return (
        <div className={containerStyle}>
            <div className="text-xl md:text-3xl lg:text-5xl fixed inset-0 flex items-center justify-center z-20 text-black">
                <div className="bg-black text-white font-display p-8 rounded-md">
                    Click Here to know more!
                </div>
            </div>
            <div className="fixed h-full w-full text-black z-10 bg-black bg-opacity-50 transition-opacity duration-500 absolute left-0 right-0 top-2 z-40 pt-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="flex items-center justify-between">
                    <div className=" bg-opacity-80 text-white w-1/2">
                        .
                    </div>
                    <div className="w-1/2 bg-red-400 relative">
                        <Image src="/pointer.png"
                        height={300} width={300}
                        alt="Pointer"
                        className="absolute z-15 right-0"/>
                    </div>

            </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default StarterAnimation;


