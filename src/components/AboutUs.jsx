import CastleDark from "../assets/CastleDark.svg";

function AboutUs() {
    return(
        <div className="relative h-[820px] bg-[#0B0B0B] overflow-hidden text-[#0B0B0B] dark:bg-white">
                <div className="max-w-7xl mx-auto text-white dark:text-black">
                  <h2 className="text-[64px] font-bold mt-[136px] ml-[140px]">КТО МЫ?</h2>
                  <p className="ml-[140px] max-w-[811px] text-[24px] font-light font-Inter">Клуб «Друзья Дома Ольденбургских» основан в 2005 году в Рамони 
                    (Воронежская область) для изучения истории княжеской династии, 
                    их вклада в культуру и благотворительность. Проводятся чтения, 
                    лекции, музыкальные вечера.</p>
                  <img src={CastleDark} alt="" className="absolute bottom-[40.5px] right-0 invert dark:invert-0"/>
                  <div className="group max-w-[211px]">
                    <button className="w-[132px] h-[33px] rounded-[15px] border border-white cursor-pointer
                        dark:border-black ml-[140px] mt-[42px] font-bold text-[20px] group-hover:hidden
                        text-white bg-black dark:text-black dark:bg-white">Подробнее</button>
                    <button className="w-[211px] h-[33px] rounded-[12px] border dark:border-white cursor-pointer
                        dark:bg-black dark:text-white text-[20px] font-bold hidden group-hover:block ml-[140px] mt-[42px]
                        bg-white text-black ">Нажми на меня</button>
                  </div>
                  <h2 className="mt-[201px] text-[64px] font-medium ml-[147px]">ДОБРО ПОЖАЛОВАТЬ!</h2>
                </div>    
              </div>
    );
}

export default AboutUs