import React from 'react'
import {TestiTool, TestiTool_1, TestiTool_2} from './TestiTool'

const Testimonial = () => {
  return (
    <div className='w-full min-h-[60vh] py-20 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7 text-white bg-[#0D1320]'>
      {Test_Data.map((items, index) => {
        return (
          <div className={`justify-center items-center py-7 px-16 rounded-[40px] border-2 border-gray-500 flex flex-col ${index === 2? "sm:mx-auto lg:col-auto sm:col-span-2 sm:mt-10 lg:mt-0" : ""}`}>
            <img className='w-[100px] transition-all duration-300 hover:rotate-[360deg]' src={items.img} alt="" />
            {index === 0 ? <TestiTool/>: ''}
            {index === 1 ? <TestiTool_1/>: ''}
            {index === 2 ? <TestiTool_2/>: ''}
            <h1 className='text-2xl font-semibold'>{items.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Testimonial


let Test_Data = [
  {
    img: "/img/Strength/Testi/award-1.svg",
    name: "Happy Clients",
  },
  {
    img: "/img/Strength/Testi/award-2.svg",
    name: "Happy Clients",
  },
  {
    img: "/img/Strength/Testi/award-3.svg",
    name: "Happy Clients",
  },
]