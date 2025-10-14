'use client';
import { DarkThemeContext } from "@/components/ThemeProvider";
import { useContext } from "react";
import ShinyText from "@/components/ShinyText";

export default function About() {
    const theme = useContext(DarkThemeContext)
    if (!theme) {
        throw new Error("Theme context is undefined")
    }
    const [dark, setDark] = theme
    return (
        <>
            <div className="grid md:grid-cols-2 items-center w-full max-w-[1400px] mx-auto px-7 py-40 md:py-30 md:px-50">
                <div className="order-2 space-y-5 mx-auto font-inter md:order-1">
                    {dark ? <ShinyText text="About Me" disabled={false} speed={3} className="text-2xl font-montserrat font-semibold md:text-4xl" /> : <h1 className="text-2xl font-montserrat font-semibold md:text-4xl">About Me</h1>}
                    <p className="mt-5 text-md">
                        Hi, I'm Fabian an Information Technology student at State Polytechnic of Malang. I'm passionate about web
                        development and game development, creating smart and practical solutions through clean, efficient code. I'm constantly learning both in class and independently
                        to build products that are not only functional but genuinely useful.
                    </p>
                </div>
                <div className="mb-20 order-1 flex justify-center md:order-2 md:mb-0">
                    <div className="relative">
                        <div className={`absolute inset-0 ${dark ? "bg-[#ffffffa4]" : "bg-gray-300"} rounded-lg scale-105 z-20`} />
                        <div className={`absolute inset-0 rounded-lg scale-102 z-25 transition duration-300 ease-in-out ${dark ? "bg-black" : "bg-white"}`}></div>
                        <img className="relative z-30 rounded-lg max-w-[300px] h-auto" src="/assets/144343780.webp" />
                    </div>
                </div>
            </div>
            <div className="flex mx-auto px-7 md:mt-0 md:px-43 w-full max-w-[1400px]">
                <div className="flex flex-col md:px-7">
                    {dark ? <ShinyText text="Experience" disabled={false} speed={3} className="text-2xl font-semibold border-t border-[#ffffff33] pt-20" /> : <h1 className="text-2xl font-semibold border-t border-[#dfdfdf] pt-20">Experience</h1>}
                    <div className="grid grid-cols-[auto_1fr] mt-10 gap-5 pb-20">
                        <div className={`flex p-1 w-17 h-17 place-items-center rounded-2xl transition-colors duration-200 ${dark ? "bg-white" : "bg-transparent ring ring-[#1f1f1f]"}`}>
                            <img src="assets/bnsp.png" alt="" className="" />
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h1 className={`font-semibold ${dark ? "text-[#dfdfdf]" : ""} `}>Junior Web Developer Certification</h1>
                                <h2 className="text-sm">(BNSP - Indonesia's National Professional Certification Board)</h2>
                                <h3 className="text-sm">Certified: July 28, 2025 — Valid until July 28, 2028</h3>
                            </div>
                            <div>
                                <p className={`${dark ? "text-[#dfdfdf]" : ""}`}>Assessed on end-to-end web development workflow: front-end & back-end implementation and deployment. Built a complete web project as part of the practical evaluation. Gained certification under Indonesia’s national competency framework (KKNI Level 5 equivalent).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto mt-5 px-7 md:mt-0 w-full pb-20 max-w-[1400px] md:px-43">
                <div className="flex flex-col md:px-7">
                    {dark ? <ShinyText text="Education" disabled={false} speed={3} className="text-2xl font-semibold border-t border-[#ffffff33] pt-20" /> : <h1 className="text-2xl font-semibold border-t border-[#dfdfdf] pt-20">Education</h1>}
                    <div className="grid grid-cols-[auto_1fr] mt-10 gap-5">
                        <div className={`flex p-1 w-17 h-17 place-items-center rounded-2xl transition-colors duration-200 ${dark ? "bg-white" : "bg-transparent ring ring-[#1f1f1f]"}`}>
                            <img src="assets/logo-polinema.png" alt="" className="" />
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h1 className={`font-semibold ${dark ? "text-[#dfdfdf]" : ""} `}>Bachelor of Applied Science - BASc, Information Technology</h1>
                                <h2 className="text-sm">State Polytechnic of Malang</h2>
                                <h3 className="text-sm">August 2023 - Present</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto mt-4 px-7 md:mt-0 w-full pb-30 max-w-[1400px] md:px-43">
                <div className="flex flex-col md:px-7">
                    {dark ? <ShinyText text="Let's Connect" disabled={false} speed={3} className="text-2xl font-semibold border-t border-[#ffffff33] pt-20 " /> : <h1 className="text-2xl font-semibold border-t border-[#dfdfdf] pt-20">Let's Connect</h1>}
                    <div className="mt-5">
                        <p className={`${dark ? "text-[#dfdfdf]" : ""}`}>If you'd like to stay in touch or explore potential collaborations, feel free to follow me on LinkedIn or reach out via email.
                            I'm always eager to work on innovative and exciting projects!.</p>
                    </div>
                </div>
            </div>
        </>
    )
}