import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Division from "../components/sections/Division";
import LatestNews from "../components/sections/LatestNews";
import Gallery from "../components/sections/Gallery";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Division />
            <LatestNews />
            <Gallery/>
        </>
    );
}

export default Home;