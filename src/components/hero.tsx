import SocialButtonsSection from "./socialButtonsSection";
import Badge from "./ui/badge";

const Hero = () => {
    return (
        <>
            <section id="inicio" className="max-w-2xl py-32">
                <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                    <img
                        className="rounded-full sm:rounded-3xl 
                        size-40"
                        alt="Ronald Gallardo"
                        src="https://img.freepik.com/premium-photo/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1029476-294679.jpg" />
                    <div className="relative flex flex-col items-center sm:items-start -mt-3 sm:mt-0">
                        <div className="w-max h-max relative overflow-hidden">
                            <a
                                href="https://www.linkedin.com/in/ronald-gallardo-arce-a01b53279"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Badge className="text-xs sm:text-sm font-extralight">Disponible para trabajar</Badge>
                            </a>
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-bold mt-4  ">
                            Ronald Gallardo Arce
                        </h1>
                        <h2 className="text-lg sm:text-xl font-semibold
                         fill-indigo-500 
                         drop-shadow-lg drop-shadow-indigo-500/50">
                            Desarrollador <span className="font-black bg-gradient-to-r from-[#bac0f1] to-[#2b6d7a] bg-clip-text text-transparent">full stack</span>
                        </h2>
                    </div>
                </div>
                <p className="mb-2 text-center sm:text-start">
                    Soy desarrollador Full Stack con pasión por el aprendizaje constante y los desafíos que
                    implican salir de la zona de confort.
                </p>
                <p className="text-center sm:text-start">
                    Siempre estoy en busca de proyectos que me reten a crecer profesional y personalmente.
                </p>
                <SocialButtonsSection />
            </section>
        </>
    );
}

export default Hero;
{/* <div className="fixed bottom-8 left-1/2 z-10 -translate-x-1/2 flex-col pointer-events-auto hidden md:flex">
    <div className="box-gen mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] bg-[#18181b]/20 backdrop-blur-sm">
        
    </div>
</div> */}