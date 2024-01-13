"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

const StarterAnimation = () => {
    const [rendered, setRendered] = useState(false);
    const [opacity, setOpacity] = useState(1); // State for opacity

    useEffect(() => {
        const hasBeenShown = localStorage.getItem('hasBeenShown');

        if (!hasBeenShown) {
            setRendered(true);

            setTimeout(() => {
                setOpacity(0); // Trigger fade out
            }, 2500); // Start fade out after 2.5 seconds

            const timer = setTimeout(() => {
                setRendered(false);
                localStorage.setItem('hasBeenShown', true);
            }, 3000); // Fully hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const baseClass = 'transition-opacity duration-500 ease-out'; // Transition for opacity
    const hiddenClass = 'hidden';

    const classes = clsx(baseClass, {
        [hiddenClass]: !rendered,
    });

    return (
        <div className={classes} style={{ opacity: opacity }}>
            <div className="text-5xl fixed inset-0 flex items-center justify-center z-20 text-black">
                <div className="bg-black text-white font-display p-8 rounded-md">
                    Click Here to know more!
                </div>
            </div>
            <div className="fixed h-full w-full text-black z-10 bg-black bg-opacity-50 transition-opacity duration-500 absolute left-0 right-0 top-2 z-40 pt-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="flex items-center justify-between">
                    <div className="bg-black bg-opacity-80 text-white">
                        .
                    </div>
                  <Image src="/pointer.png"
                height={300} width={300}
                alt="Pointer"
                className="right-0 top-0 z-15" />
            </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default StarterAnimation;

