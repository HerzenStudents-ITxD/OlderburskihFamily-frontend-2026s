import ThemeSwitch from "./components/ThemeSwitch";
import Hero from "./components/Hero";
import AboutOldenburgskie from "./components/AboutOldenburgskie";
import CastleDark from "./assets/CastleDark.svg";
import AboutUs from "./components/AboutUs";


function App() {

  return (
    <>
      <ThemeSwitch/>
      <Hero/>
      <div className="max-w-7xl mx-auto">
        <AboutOldenburgskie/>
      </div>
      <AboutUs/>
    </>
  )
}

export default App
