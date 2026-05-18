import ThemeSwitch from "./components/ThemeSwitch";
import Hero from "./components/Hero";
import AboutOldenburgskie from "./components/AboutOldenburgskie";
import AboutUs from "./components/AboutUs";
import Members from "./components/Members";
import Events from "./components/Events";
import Footer from "./components/Footer";
import GoToTop from "./assets/GoToTop.svg";
import { useEffect, useState } from "react";
 
function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
  const section = document.getElementById("about-oldenburgskie");

  const handleScroll = () => {
    if (!section) return;

    const top = section.offsetTop;

    if (window.scrollY >= top) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <a href="#">
          <img
            src={GoToTop}
            alt=""
            className="fixed right-[45px] top-[28px] z-50"
          />
        </a>
      )}
      <ThemeSwitch/>
      <Hero/>
      <AboutOldenburgskie/>
      <AboutUs/>
      <Members/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
