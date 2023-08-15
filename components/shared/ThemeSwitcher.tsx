'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const switchTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return (
        <button
            className={`z-40 absolute right-50 top-5 focus:outline-none transform transition-transform duration-500 ease-in-out rounded-full p-3 hover:scale-110 hover:shadow-lg bg-gradient-to-t from-primary-500 to-transparent w-20 truncate flex justify-${theme === "light" ? "start" : "end"}`}
            onClick={switchTheme}
        >
            <div
                className={`w-6 h-6 animate-move-${theme === "light" ? "left" : "right"}`}
            >
                {theme === "light" ? (
                    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
            </svg>
                ) : (
                    <svg width="25px" height="25px" viewBox="0 0 15 15" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66077 11.3619C2.09296 11.4524 2.54093 11.5 3.00002 11.5C6.58987 11.5 9.50002 8.58987 9.50002 5.00002C9.50002 3.25482 8.81224 1.67027 7.69295 0.502625C11.4697 0.604839 14.5 3.69855 14.5 7.50002C14.5 11.366 11.366 14.5 7.49999 14.5C5.06138 14.5 2.91401 13.253 1.66077 11.3619Z" stroke="#ffffff" strokeLinejoin="round"/>
                    </svg>
                )}
            </div>
        </button>
    );
};
