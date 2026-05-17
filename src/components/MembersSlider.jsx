import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useRef } from "react";

import EkaterinaPavlovna from "../assets/EkaterinaPavlovna.png";
import PetrOldenburgskiy from "../assets/PetrOldenburgskiy.png";
import GeorgiyOldenburgskiy from "../assets/GeorgiyOldenburgskiy.png";
import AlexandrOldenburgskiy from "../assets/AlexandrOldenburgskiy.png";
import PetrAOldenburgskiy from "../assets/PetrAOldenburgskiy.png";

import MemberCard from "../components/MemberCard";
import SlideRight from "../assets/SlideRight.svg";
import SlideRightLight from "../assets/SlideRightLight.svg";

import "swiper/css";
import "swiper/css/navigation";

function MembersSlider() {
  const nextRef = useRef(null);
  return(
    <div className="mt-[36px] ml-[63px] flex">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={3}
        spaceBetween={32}
        navigation={{
        nextEl: ".custom-next",
        }}
      >

      <SwiperSlide>
        <MemberCard
          img={PetrOldenburgskiy}
          text={
            <>
              Петр Георгиевич Ольденбургский <br />
              (1812 — 1881)
            </>
        }
        />
      </SwiperSlide>

      <SwiperSlide>
        <MemberCard
          img={EkaterinaPavlovna}
          text={
            <>
              княгиня Екатерина Павловна <br />
              (1788 - 1819)
            </>
          }
        />
      </SwiperSlide>

      <SwiperSlide>
        <MemberCard
          img={GeorgiyOldenburgskiy}
          text={
            <>
              принц Георгий Ольденбургский <br />
              (1784 - 1812)
            </>
          }
        />
      </SwiperSlide>

      <SwiperSlide>
        <MemberCard
          img={AlexandrOldenburgskiy}
          text={
            <>
              Александр Петрович Ольдебургский <br />
              (1844-1932) 
            </>
          }
        />
      </SwiperSlide>

      <SwiperSlide>
        <MemberCard
          img={PetrAOldenburgskiy}
          text={
            <>
              Петр Александрович Ольденбургский <br />
              (1868-1924)
            </>
          }
        />
      </SwiperSlide>

    </Swiper>
    <button className="ml-[28px] mr-[16px] shrink-0" ref={nextRef}>
      <img src={SlideRightLight} alt="" className="cursor-pointer custom-next block dark:hidden" />
      <img src={SlideRight} alt="" className="cursor-pointer custom-next hidden dark:block" />
    </button>
  </div>
  );
}

export default MembersSlider
