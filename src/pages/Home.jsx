
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Interviews from "../components/Interviews";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import About from "../components/About";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    {/* <Interviews /> */}
    <Gallery />
    <VideoSection />
  </>
);
export default Home;
