function HeroButton({text}) {
    return (
        <div className="flex items-center justify-center">
            <button className="dark:text-white dark:bg-[#0B0B0B] rounded-[10px] w-[201px] h-[108px] 
                text-[30px] font-CormorantGaramond font-bold 
                dark:hover:bg-white duration-300 ease-out dark:hover:text-[#0B0B0B] cursor-pointer
                bg-white hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white"><a href="">{text}</a></button>
        </div>
    );
}

export default HeroButton