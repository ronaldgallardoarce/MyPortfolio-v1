import Badge from "./badge";

const Hero = () => {
    return (
        <>
            <section className="max-w-xl py-32">
                <div className="flex flex-row items-center gap-3">
                    <img
                        className="rounded-full size-20"
                        alt="Ronald Gallardo"
                        src="https://img.freepik.com/premium-photo/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1029476-294679.jpg" />
                    <Badge className="text-sm">Disponible para trabajar</Badge>
                </div>
                <h1 className="text-5xl font-bold my-4">
                    Ronald Gallardo Arce
                </h1>
                <p>
                    Soy desarrollador Full Stack con pasión por el aprendizaje constante y los desafíos que
                    implican salir de la zona de confort.
                </p>
                <p>
                    Siempre estoy en busca de proyectos que me reten a crecer profesional y personalmente.
                </p>
            </section>
        </>
    );
}

export default Hero;