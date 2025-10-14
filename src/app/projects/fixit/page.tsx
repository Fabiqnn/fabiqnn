'use client';
import { DarkThemeContext } from "@/components/ThemeProvider";
import { useContext } from "react";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";

export default function Fixit() {
    const theme = useContext(DarkThemeContext)
    if (!theme) {
        throw new Error("Theme context is undefined")
    }
    const [dark] = theme
    return(
        <>
            <div className="items-center w-full max-w-[1400px] h-full px-7 font-monsterrat mx-auto mt-40 mb-10 md:py-20 md:mt-0 md:mb-20">
                <div className="md:w-2/4 mx-auto">
                    <div className="flex flex-col text-center space-y-3 items-center md:mt-20">
                        {dark ? <ShinyText text="FixIT" disabled={false} speed={3} className="text-3xl font-montserrat font-semibold md:text-4xl" /> : <h1 className="text-3xl font-montserrat font-semibold md:text-4xl">FixIT</h1>}
                        <div className={`flex w-14 h-14 place-items-center rounded-2xl transition-colors duration-200 ${dark ? "bg-[#1f1f1f]" : "bg-transparent ring ring-[#1f1f1f]"}`}>
                            <Image src="/assets/laravel.png" alt="" className=""/>
                        </div>
                    </div>
                    <div className="space-y-3 mb-10">
                        <div className="space-y-1">
                            <span className="font-semibold">Date</span>
                            <p className={`${dark ? "text-white" : ""}`}>2024</p>
                        </div>
                        <div className="space-y-1">
                            <span className="font-semibold">Service</span>
                            <p className={`${dark ? "text-white" : ""}`}>Helpdesk system</p>
                        </div>
                    </div>
                    <div className="mb-10 ">
                        <Image src="/assets/fixit.png" alt="" className={`border-2 mx-auto rounded border-[#1f1f1f]`}/>
                    </div>
                    <p className={`${dark ? "text-white" : ""}`}>
                        FixIT! is a web-based helpdesk system built to streamline the process of reporting 
                        and resolving academic facility issues within a university environment. Developed
                        as part of a college project, the platform enables students to easily submit reports, 
                        track progress, and communicate with the administrative staff responsible for handling 
                        maintenance or IT problems.
                    </p> <br />
                    <p className={`${dark ? "text-white" : ""}`}>As a full-stack developer, I was responsible for both the front-end interface and the 
                        back-end logic — from database design and RESTful API implementation to building an 
                        intuitive, responsive UI with Tailwind CSS. This project strengthened my understanding 
                        of end-to-end web development, collaborative coding workflows, and user-centric system 
                        design.</p><br />
                    <p className="mb-5 font-semibold">Fixit has 4 roles:</p>
                    <ul className={`list-disc space-y-1 pl-5 text-justify ${dark ? "text-white" : ""}`}>
                        <li className="">Sarpras : Responsible for managing the system and facilities data. Sarpras can also verifying reports, assign technician to repair the infrastucture according to report.</li>
                        <li className="">Civitas : Students, Staffs, and Lecturers. Capable of reporting and requesting repair of infrastructure facilities.</li>
                        <li>Teknisi : Responsible for repairing the infrastructure facilities</li>
                    </ul><br />

                    <h2 className="font-semibold mb-5 text-xl md:text-3xl md:mb-10">Main Features</h2>
                    <div className="space-y-10">
                        <div className="space-y-2">
                            <Image src="/assets/pelaporan.png" alt="" className={`border-2 mx-auto rounded border-[#1f1f1f]`}/>
                            <h3 className="text-lg font-semibold md:text-xl">Reporting</h3>
                            <p className={`${dark ? "text-white" : ""}`}>If there is problem with infrastructure facility, civitas can make detailed report about the issue.
                                The report will be sent to Sarpras to be reviewed.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Image src="/assets/tracking.png" alt="" className={`border-2 mx-auto rounded border-[#1f1f1f]`}/>
                            <h3 className="text-lg font-semibold md:text-xl">Real-Time Tracking</h3>
                            <p className={`${dark ? "text-white" : ""}`}>Each report can be tracked by users, showing progress and resolution status updates</p>
                        </div>

                        <div className="space-y-2">
                            <Image src="/assets/spk.png" alt="" className={`border-2 mx-auto rounded border-[#1f1f1f]`}/>
                            <h3 className="text-lg font-semibold md:text-xl">Decision Support System</h3>
                            <p className={`${dark ? "text-white" : ""}`}>This feature is used to help Sarpras in piroritizing which facility issuesshould be sent to technicians for repair.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}