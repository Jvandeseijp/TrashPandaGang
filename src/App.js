import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Faq from "./Components/Faq/Faq";
import RoadMap from "./Components/RoadMap/RoadMap";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Features from "./Components/Features/Features";
import Navbar from "./Components/Navbar/Navbar";
import Gallary from "./Components/Gallary/Gallary";
import DiscordSection from "./Components/DiscordSection/DiscordSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <RoadMap />
      <Team />
      <Gallary />
      <Faq />
      <DiscordSection />

      <p className="copyright">
        2022 © <span className="trash">Raccoon City</span> All rights
        reserved
      </p>
    </>
  );
}

export default App;
