'use client';
import ShinyText from "./ShinyText";
import { DarkThemeContext } from "./ThemeProvider";
import { useContext } from "react";
import SplitText from "./SplitText";
import Image from "next/image";

function Hero() {
    const theme = useContext(DarkThemeContext)

    if(!theme) {
        throw new Error("Theme context is undefined")
    }

    const [dark] = theme
    return (
        <>
            <div id="hero" className="grid items-center w-full max-w-[1400px] h-[80vh] mx-auto px-7 mt-20 font-monsterrat py-20 md:py-30 md:grid-cols-2">
                <div className="order-2 space-y-5 mx-auto font-inter md:order-1">
                    <div>
                        {dark ? <ShinyText text="Hello, I&apos;m Fabian" disabled={false} speed={3} className='text-4xl md:text-6xl font-bold' /> : <SplitText text="Hello, I&apos;m Fabian" className="text-4xl md:text-6xl font-bold" textAlign="left" splitType="words"/>}
                        {dark ? <ShinyText text="Junior Web Developer" disabled={false} speed={3} className='text-2xl md:text-3xl font-bold'/> : <div className="text-2xl md:text-3xl font-bold">Web Developer</div>}
                    </div>
                    <p className="text-base">Undergraduate student majoring in Information Technology at POLINEMA. <br className="hidden custom-br1:block"/>
                        I&apos;m passionate about building useful and user-friendly web applications, <br className="hidden custom-br1:block"/> and I&apos;m always eager to improve and grow in the tech industry.</p>
                    <p className="text-xl font-semibold">I can help you with:</p>
                    <ul className="list-disc list-inside text-md">
                        <li>Laravel Development</li>
                        <li>Database Management</li>
                    </ul>
                </div>
                <div className="mb-20 order-1 flex justify-center md:order-2 md:mb-0">
                    <div className="relative">
                        <div className={`absolute inset-0 ${dark ? "bg-[#ffffffa4]" : "bg-gray-300"} rounded-lg scale-105 z-20`}/>
                        <div className={`absolute inset-0 rounded-lg scale-102 z-25 transition duration-300 ease-in-out ${dark ? "bg-black" : "bg-white"}`}></div>
                        <Image alt="profile" className="relative z-30 rounded-lg max-w-[300px] h-auto" src="/assets/144343780.webp"/>
                    </div>
                </div>
            </div>
            
        </>
        
    );
}

export default Hero
