function EventCard({text, date, img}) {
    return (
         <div className="bg-white rounded-[19px] max-w-[259px] h-[349px] px-[23px] pt-[19px] pb-[20px] 
              cursor-pointer border border-black">
            <a href="">
                <img src={img} alt="" />
                <p className="text-black text-[24px] font-bold mt-[7px] h-[68px] leading-none">{text}</p>
                <p className="text-black text-[25px] font-bold h-[30px] text-end">{date}</p>
            </a>
        </div>
    );
}

export default EventCard