function MemberCard({text, img}) {
    return (
        <div className="dark:bg-white bg-black w-[347px] rounded-[20px] overflow-hidden">
                    <img src={img} alt="" className="mx-auto mt-[10px]" />
                    <p className="font-bold text-[20px] dark:text-black text-white text-center py-[20px]">{text}</p>
        </div>
    );
}

export default MemberCard