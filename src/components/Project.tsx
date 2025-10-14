import Card from "./Card";

function Project() {
    return (
        <div id="project" className="items-center w-full max-w-[1400px] h-full px-7 font-monsterrat mx-auto mt-40 mb-10 md:py-20 md:mt-0 md:mb-20">
            <div className="md:px-18">
                <h1 className="text-2xl md:text-3xl font-bold">My Project</h1>
                <h3 className="text-base" >Here are some project i&apos;ve worked on!</h3>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:scale-90 gap-8">
                <Card img="assets/fixit.png" title="FixIT" text="Late 2024" link="./projects/fixit"/>
                <Card img="assets/SIMBebasTanggungan.png" title="Sistem Informasi Bebas Tanggungan" text="Early 2024"/>
            </div>
        </div>    
    )
}

export default Project