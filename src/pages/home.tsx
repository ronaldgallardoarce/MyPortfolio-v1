import Hero from "../components/hero";
import { BentoDemo } from "../components/test";
import SectionContainer from "../components/ui/sectionContainer";
import SectionTitle from "../components/ui/sectionTitle";

const Home = () => {
    return (
        <main className="flex items-center justify-center w-full px-4 sm:px-10 relative">
            <div className="relative flex flex-col justify-center w-full lg:max-w-4xl">
                <Hero />
                <SectionContainer className="" id="proyectos">
                    <SectionTitle className="text-white text-center mb-4">
                        Proyectos
                    </SectionTitle>
                    {/* <NavigationBar /> */}
                    <BentoDemo />
                </SectionContainer>
            </div>
        </main>
    );
}

export default Home;