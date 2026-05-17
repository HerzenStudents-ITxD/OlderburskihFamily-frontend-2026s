import HeroButton from "../components/HeroButton";
import heroimage from "../assets/hero-image.svg";

function Hero() {
    return (
        <div className="relative h-full w-full">
          <img src={heroimage} alt="" className="w-full h-full grayscale"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-[128px] font-CormorantGaramond font-bold">ОЛЬДЕНБУРГСКИЕ</h1>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[29px] flex gap-[80px]">
            <HeroButton text="КЛУБ" />
            <HeroButton text="МУЗЕЙ" />
            <HeroButton text="СОБЫТИЯ" />
            <HeroButton text="СЕМЬЯ" />
          </div>
      </div>
    );
}

export default Hero