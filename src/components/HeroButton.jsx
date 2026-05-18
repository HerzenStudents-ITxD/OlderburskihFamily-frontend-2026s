function HeroButton({text, link}) {
    return (
        <a
      href={link}
      className="
        flex items-center justify-center

        w-[201px] h-[108px]

        rounded-[10px]

        text-[30px]
        font-CormorantGaramond font-bold

        dark:text-white dark:bg-[#0B0B0B]
        bg-white text-black

        hover:bg-black hover:text-white
        dark:hover:bg-white dark:hover:text-black

        transition duration-300
        cursor-pointer
      "
    >
      {text}
    </a>
    );
}

export default HeroButton