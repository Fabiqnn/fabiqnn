'use client';
import { useState, useEffect, useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import Darkmode from "./Darkmode";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const [isScrolled, setScroll] = useState(false)
    const theme = useContext(DarkThemeContext)
    
    if(!theme) {
        throw new Error("Theme context is undefined")
    }

    const [dark] = theme

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50); // misal 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    const divClass = clsx(
        "transition-all duration-300 mx-auto flex items-center justify-between px-7 py-3 rounded-b-2xl",
        isScrolled ? "max-w-6xl backdrop-blur-md shadow-m" : "max-w-7xl bg-transparent",
        dark ? "bg-transparent" : "bg-white/80"
    )
    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 `}>
            <div className={divClass}>
                <Link href="/" className="flex items-center space-x-1 group">
                    <div className="size-[18px] md:size-[24px]">
                        <Image src="/assets/Logo.webp" alt="" className="group-hover:scale-120 transform duration-750"/>
                    </div>
                    <h1 className="md:text-lg font-semibold">Fabian</h1>
                </Link>
                <nav className="space-x-5 hidden sm:block">
                    <Link href="/#project">Projects</Link>
                    <Link href="/about">About</Link>
                </nav>
                <Darkmode/>
            </div>
        </header>
    );
}

export default Header