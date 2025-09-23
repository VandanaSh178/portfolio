
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/Skills";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import CodingProfiles from "./sections/CodingProfiles";
import AchievementCard from "./components/AchievementCard";
import Achievements from "./sections/Achievements";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";


const App = () => (
  <>
    <Navbar />
    <Hero />
    <About/>
    <Skills/>
    <Projects/>
    <Experience />
    <Achievements/>
    <Certificates/>
    <CodingProfiles/>
    <LogoShowcase />
    <FeatureCards />
    <Contact />
    <Footer />
  </>
);

export default App;