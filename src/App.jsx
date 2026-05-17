import ThemeSwitch from "./components/ThemeSwitch";
import Hero from "./components/Hero";
import AboutOldenburgskie from "./components/AboutOldenburgskie";
import CastleDark from "./assets/CastleDark.svg";
import AboutUs from "./components/AboutUs";
import Member1 from "./assets/Member1.png";
import EkaterinaPavlovna from "./assets/EkaterinaPavlovna.png";
import PetrOldenburgskiy from "./assets/PetrOldenburgskiy.png";
import MemberCard from "./components/MemberCard";
import GeorgiyOldenburgskiy from "./assets/GeorgiyOldenburgskiy.png";
import Members from "./components/Members";
 

function App() {

  return (
    <>
      <ThemeSwitch/>
      <Hero/>
      <AboutOldenburgskie/>
      <AboutUs/>
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-[64px] text-white font-medi um mt-[68px] ml-[262px]">Члены семьи Ольденбургских</h2>
        <div className="mt-[36px] flex gap-[32px] ml-[63px]">
          <MemberCard img={PetrOldenburgskiy}
          text={<>
                Петр Георгиевич Ольденбургский <br />
                (1812 — 1881)
                </>
              } />
          <MemberCard img={EkaterinaPavlovna}
          text={<>
                княгиня Екатерина Павловна <br />
                (1788 - 1819)
                </>
              } />
          <MemberCard img={GeorgiyOldenburgskiy}
          text={<>
                принц Георгий Ольденбургский <br />
                (1784 - 1812)
                </>
              } />
        </div>
      </div> */}
      <Members/>
      
    </>
  )
}

export default App
