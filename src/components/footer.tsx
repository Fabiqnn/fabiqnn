'use client';
import { useContext } from "react";
import { DarkThemeContext } from "./ThemeProvider";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const theme = useContext(DarkThemeContext)

    if(!theme) {
        throw new Error("Theme context is undefined")
    }

    const [dark] = theme
    return(
        <footer className={`border-t ${dark ? "border-[#ffffff33]": "border-[#dfdfdf]"}`}>
            <div className="flex flex-col place-items-center p-10 mx-auto md:max-w-[1400px] md:justify-between md:flex-row ">
                <div className="flex items-center space-x-2 group mb-3 md:mb-0">
                    <div className="size-[24px]">
                        <Image src="/assets/Logo.webp" alt="" className="group-hover:scale-120 transform duration-750"/>
                    </div>
                    <h1 className="text-lg font-semibold">Fabian</h1>
                </div>
                <div className={`flex flex-col md:flex-row md:align-middle place-items-center space-y-3 md:space-x-3 md:border-l md:pl-3 ${dark ?  "border-[#707070]": "border-[#dfdfdf]"}`}>
                    <p className="text-sm md:align-middle md:mb-0">© 2025 Fabian</p>
                    <div className="space-x-1">
                        <Link href="https://github.com/Fabiqnn" target="_blank"><i className={`fa-brands fa-github fa-lg ${dark ? "hover:text-white": "text-[#707070] hover:text-black"} `}></i></Link>
                        <Link href="https://www.linkedin.com/in/fabianhasbillah/" target="_blank"><i className={`fa-brands fa-square-linkedin fa-lg ${dark ? "hover:text-white": "text-[#707070] hover:text-black"}`}></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}