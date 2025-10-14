'use client';
import { useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
    img?: string;
    text?: string;
    title?: string;
    link?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    img = "assets/fixit.png", 
    text = "null", 
    title = "null", 
    link = "#",
    className = "p-5 rounded-2xl"
}) => {
    const theme = useContext(DarkThemeContext)
    
    if(!theme) {
        throw new Error("Theme context is undefined")
    }   

    const [dark] = theme
    return (
        <div className="">
            <Link href={link} className="block">
                <div className={`${className} ${dark ? "bg-[#1f1f1f]" : "ring ring-gray-300"}`}>
                    <Image src={img} alt="" className="rounded h-48 w-full object-cover md:h-70 transform duration-750 hover:scale-102"/>
                </div>
                <div className="mt-2 px-2 h-auto">
                        <h2 className={`text-2xl font-semibold font-montserrat ${dark ? "text-[#dfdfdf]" : ""}`}>{title}</h2>
                        <p className={`truncate ${dark ? "text-[#dfdfdf]" : ""}`}>{text}</p>
                </div>
            </Link> 
        </div>
    );
}

export default Card
