import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Faq from "./Components/Faq/Faq";
import RoadMap from "./Components/RoadMap/RoadMap";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Join from "./Components/Join/Join";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Team />
      <Faq />
      <Join />
      <RoadMap />
      <p className="copyright">
        2022 © <span className="trash">Trash Panda Gang</span> All rights
        reserved
      </p>
    </>
  );
}

export default App;
