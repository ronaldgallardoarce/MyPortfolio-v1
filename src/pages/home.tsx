import Hero from "../components/hero";
import SectionContainer from "../components/ui/sectionContainer";
import SectionTitle from "../components/ui/sectionTitle";

const Home = () => {
    return (
        <main className="flex items-center justify-center w-full px-4 relative">
            <div className="relative flex flex-col justify-center w-full lg:max-w-4xl">
                <Hero />
                <SectionContainer className="bg-gray-700" id="proyectos">
                    <SectionTitle className="text-white">
                        Proyectos
                    </SectionTitle>
                    {/* <NavigationBar /> */}
                    
                </SectionContainer>
            </div>
        </main>
    );
}

export default Home;