import { useState } from 'react'
import { useEffect } from 'react';
import Sun from '../assets/Sun.svg'
import Moon from '../assets/Moon.svg'

function ThemeSwitch() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <>
      <div className='flex'>
        <button className='ml-auto mr-10 mt-[19px] mb-[4px] cursor-pointer' onClick={toggleTheme}>
          <img src={Sun} alt="" className='hidden dark:block'/>
          <img src={Moon} alt="" className='block dark:hidden' />
        </button>
      </div>
    </>
  )
}

export default ThemeSwitch
