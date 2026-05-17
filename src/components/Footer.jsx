import FooterLine from "../assets/FooterLine.svg"

function Footer() {
    return (
        <>
        <div className="max-w-7xl mx-auto">
        <h2 className="mt-[82px] text-[64px] font-bold ml-[335px] mb-[37px]">СВЯЖИТЕСЬ С НАМИ!</h2>
        <div className="flex mb-[53px]">
          <div className="shrink-0">
            <p className="text-[44px] font-bold ml-[144px]">Руководитель клуба:</p>
            <p className="text-[28px] font-bold text-center ml-[144px] inline-block">
              <span className="underline"> Образцова Людмила Алексеевна</span>
              <br />Тел.: +7 905 6566065</p>
          </div>
          <img src={FooterLine} alt="" className="ml-[183px] mr-[44px] invert dark:invert-0"/>
          <div>
            <p className="text-[40px] font-bold text-center">Районный центр культуры и досуга</p>
            <p className="text-[28px] font-bold text-center">396020, Воронежская область, п. Рамонь, ул. Мосина, д. 9
                                                 <br />Тел.: (47340) 2-16-67, 5-31-42</p>
          </div>
        </div>
        <p className="text-[25px] font-bold text-center opacity-[76%] ml-[88px]">Все публикации на сайте является частной интеллектуальной собственностью и охраня ются в соответствии с<br />
          Федеральным Законом о защите авторских и смежных прав. При использовании материалов ссылка (в интернете —<br />
          активная индексируемая гиперссылка) на источник обязательна.</p>
      </div>
      <div className="h-[132px] w-full dark:bg-white bg-black"></div>
      </>
    )
}

export default Footer