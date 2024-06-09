let serviceCardData = [
    {
        img: "/img/Strength/Services/card1.svg",
        name: "Website Design",
        discription: "Embarrassing hidden in the middle of text. All the Ipsum generate on the are Internettend."
    },
    {
        img: "/img/Strength/Services/card2.svg",
        name: "Website Design",
        discription: "Embarrassing hidden in the middle of text. All the Ipsum generate on the are Internettend."
    },
    {
        img: "/img/Strength/Services/card3.svg",
        name: "Website Design",
        discription: "Embarrassing hidden in the middle of text. All the Ipsum generate on the are Internettend."
    },
    {
        img: "/img/Strength/Services/card4.svg",
        name: "Website Design",
        discription: "Embarrassing hidden in the middle of text. All the Ipsum generate on the are Internettend."
    },
]

import React from 'react'

const ServicesCard = () => {
  return serviceCardData.map((items) => {
    return (
        <div id='EduCard' className=' bg-ServiceCard relative rounded-xl  py-5 xs:px-3 sm:px-16 '>
            <div className='flex justify-center relative z-40 text-center items-center flex-col'>
            <img className='w-[100px]' src={items.img}/>
            <h1 className='md:text-2xl py-2 font-semibold'>{items.name}</h1>
            <p className='font-light'>{items.discription}</p>
            </div>
        </div>
        
    )
  })
}

export default ServicesCard