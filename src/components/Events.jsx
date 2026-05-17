import ExhibEvent1 from "../assets/ExhibEvent1.svg"
import ExhibEvent2 from "../assets/ExhibEvent2.svg"
import ExhibEvent3 from "../assets/ExhibEvent3.svg"
import ExhibEvent4 from "../assets/ExhibEvent4.svg"
import MuseumEvent1 from "../assets/MuseumEvent1.svg"
import MuseumEvent2 from "../assets/MuseumEvent2.svg"
import MuseumEvent3 from "../assets/MuseumEvent3.svg"
import MuseumEvent4 from "../assets/MuseumEvent4.svg"
import ClubEvent1 from "../assets/ClubEvent1.svg"
import ClubEvent2 from "../assets/ClubEvent2.svg"
import ClubEvent3 from "../assets/ClubEvent3.svg"
import ClubEvent4 from "../assets/ClubEvent4.svg"
import EventCard from "./EventCard";

function Events() {
    return (
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-[64px] font-bold ml-[566px] mt-[108px] mb-[46px]">КЛУБ</h2>
          <div className="flex gap-[25px] ml-[75px]">
            <EventCard img={ClubEvent1} text="ХIII Рамонские чтения" date="24.05.2017"/>
            <EventCard img={ClubEvent2} text="Первая конференция 
                                            Олденбургского наследия" date="21.11.2018"/>
            <EventCard img={ClubEvent3} text="Мосинские чтения" date="18.04.2019"/>
            <EventCard img={ClubEvent4} text="15-летие клуба" date="12.01.2020"/>
          </div>
        </div>
        <div>
          <h2 className="text-[64px] font-bold ml-[566px] mt-[58px] mb-[94px]">МУЗЕЙ</h2>
          <div className="flex gap-[25px] ml-[75px]">
            <EventCard img={MuseumEvent1} text="В музее побывала Эмма 
                                            Александровна Анненкова" date="10.06.2016"/>
            <EventCard img={MuseumEvent2} text="135-летие великой 
                                          княгини Ольги 
                                          Александровны" date="13.06.2017"/>
            <EventCard img={MuseumEvent3} text="Сказки бабушки 
                                          Куприянихи" date="17.08.2018"/>
            <EventCard img={MuseumEvent4} text="Вишневая вечеринка" date="29.11.2019"/>
          </div>
        </div>
          <div>
          <h2 className="text-[64px] font-bold ml-[465px] mt-[38px] mb-[103px]">ВЫСТАВКИ</h2>
          <div className="flex gap-[25px] ml-[75px]">
            <EventCard img={ExhibEvent1} text="100 фотографий к 
                                          100-летию начала 
                                          Первой мировой 
                                          войны" date="24.03.2014"/>
            <EventCard img={ExhibEvent2} text="«Незабытые 
                                                традиции: куколка 
                                                моя»" date="02.04.2014"/>
            <EventCard img={ExhibEvent3} text="Дамские штучки" date="21.03.2017"/>
            <EventCard img={MuseumEvent4} text="Выставка «Умелые 
                                              руки, волшебные 
                                              нити»" date="05.07.2019"/>
          </div>
        </div>
        <button className="mt-[48px] ml-[477px] rounded-[15px] px-[80px] py-[15px] cursor-pointer
                           text-[20px] font-bold dark:bg-white dark:text-black
                           bg-black text-white">БОЛЬШЕ СОБЫТИЙ</button>
      </div>
    );
}

export default Events