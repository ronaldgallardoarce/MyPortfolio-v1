import Hero from "../components/hero";
import SectionContainer from "../components/sectionContainer";

const Home = () => {
    return (
        <main className="flex items-center justify-center w-full px-4">
            <div className="flex flex-col justify-center w-full lg:max-w-4xl">
                <Hero />
                <SectionContainer className="soy class" id="soy id">

                </SectionContainer>
            </div>
        </main>
    );
}

export default Home;