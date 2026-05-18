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
            <HeroButton text="КЛУБ" link={"#club"} />
            <HeroButton text="МУЗЕЙ" link={"#museum"} />
            <HeroButton text="СОБЫТИЯ" />
            {/* <HeroButton text="СЕМЬЯ" /> */}
            <div className="flex items-center justify-center group relative">
              <button className="dark:text-white dark:bg-[#0B0B0B] rounded-[10px] w-[201px] h-[108px] 
                  text-[30px] font-CormorantGaramond font-bold 
                  dark:hover:bg-white duration-300 ease-out dark:hover:text-[#0B0B0B] cursor-pointer
                  bg-white hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white"><a href="">СЕМЬЯ</a></button>
              <div class="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block dark:bg-black bg-white rounded-[10px] w-[347px] py-1 z-10 top-[80px]">
                <a href="" class="block px-4 py-2 dark:text-white text-[20px] font-semibold hover:underline text-black">
                                                  БЛАГОТВОРИТЕЛЬНЫЕ И ОПЕКАЕМЫЕ УЧРЕЖДЕНИЯ</a>
                <a href="" class="block px-4 py-2 dark:text-white text-[20px] font-semibold hover:underline text-black">ПИСЬМА И ВОСПОМИНАНИЯ</a>
                <a href="" class="block px-4 py-2 dark:text-white text-[20px] font-semibold hover:underline text-black">ИМЕНИЯ</a>
                <a href="" class="block px-4 py-2 dark:text-white text-[20px] font-semibold hover:underline text-black">РУССКОЕ ЗАРУБЕЖЬЕ </a>
                <a href="" class="block px-4 py-2 dark:text-white text-[20px] font-semibold hover:underline text-black">РОМАНОВЫ</a>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Hero