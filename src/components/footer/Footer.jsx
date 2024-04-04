import React from 'react'
import ItemContainer from './ItemContainer'

function Footer() {
  return (
    <footer className='w-full bg-[#F5F5F5] '>
        <div className="section-container">
            <ItemContainer/>
        </div>
        <div className="h-[50px] flex flex-wrap justify-center borde border-t-[0.1px] items-center ">
            <span className='text-xs'>Copyright © 2024 LearnPress LMS | Powered by ThimPress</span>
        </div>
    </footer>
  )
}

export default Footer