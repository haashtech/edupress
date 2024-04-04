import React from 'react'
import { useOpen } from '../../contextApi/OpenProvider';

function ToggleBar() {
    const {  isToggled, setIsToggled  } = useOpen();
  return (
    <div
    className="md:hidden z-[9999] flex flex-col hover:border rounded-full hover:border-slate-400 items-center w-7 h-7 justify-center cursor-pointer"
    onClick={() => setIsToggled(!isToggled)}
  >
    <span
      className={`${
        isToggled ? " rotate-45 mb-0" : "mb-[0.3rem]"
      } transition-all duration-300 w-[80%] h-[0.05rem] bg-black`}
    ></span>
    <span
      className={`${
        isToggled ? " hidden scale-50 w-0" : " w-[80%] "
      } transition-all duration-300  h-[0.05rem] bg-black`}
    ></span>
    <span
      className={`${
        isToggled ? " -rotate-45 -mt-[0.02rem]" : "mt-[0.3rem]"
      } transition-all duration-300 w-[80%] h-[0.05rem] bg-black`}
    ></span>
  </div>
  )
}

export default ToggleBar