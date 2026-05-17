import dynasty1 from "../assets/dynasty1.svg";
import dynasty2 from "../assets/dynasty2.svg";

function AboutOldenburgskie() {
    return (
    <div className="mt-[249px] mb-[219px]">
        <div className="flex items-start mb-[95px]">
        <img src={dynasty1} alt="" className="ml-[130px]"/>
            <div className="ml-[77px]">
                <h2 className="text-[64px] font-bold mb-[19px] self-start leading-none">ДИНАСТИЯ <br /> ОЛЬДЕНБУРГСКИХ</h2>
                <p className="text-[24px] font-Inter ml-[11px] font-light h-[197px] max-w-[598px]"> 
                — одна из самых влиятельных правящих <br />фамилий Европы. <br />
                На протяжении более шести веков её <br /> представители определяли судьбы государств от <br /> 
                Балтийского моря до Чёрного.</p>
            </div>
            </div>
            <div className="flex">
                <p className="text-[24px] font-normal font-Inter ml-[133px] max-w-[579px] mr-[33px]"><br /> Их корни — в Северной Германии, а наследие <br /> 
                — общеевропейское. Ольденбургские дали <br />
                России императоров (Романовы по мужской <br />
                линии — ветвь Ольденбургского дома), правили <br />
                в Дании, Норвегии, Швеции. Это династия <br />
                реформаторов, просветителей и <br />
                военачальников, чьи решения меняли карту <br /> 
                континента.</p>
                <img src={dynasty2} alt="" />
            </div>
    </div>
    );
}

export default AboutOldenburgskie