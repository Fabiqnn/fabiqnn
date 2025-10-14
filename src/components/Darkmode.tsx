'use client';
import { useContext, useEffect } from "react";
import { DarkThemeContext } from "./ThemeProvider";

function Darkmode() {
    const theme = useContext(DarkThemeContext)

    if(!theme) {
        throw new Error("Theme context is undefined")
    }

    const [dark, setDark] = theme

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = window.document.documentElement
            if (dark) {
                root.classList.add('dark')
            } else {
                root.classList.remove('dark')
            }
        }
    }, [dark])
    return (
        <div className={`cursor-pointer p-2 rounded-full transition-all duration-300 ${dark? "hover:bg-[#020F21] hover:scale-120":"hover:bg-[#efefef] hover:scale-120"}`} onClick={
            () => setDark(!dark)}>
            {dark ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-5 w-5 text-white">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path><path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5 text-[#020F21]">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>}
        </div>
    );
}

export default Darkmode