let addressData = [
    {
        img: "/img/Contact/add-1.svg",
        name: "Phone",
        number_1: "+92 3032150993",
        number_2: "+92 5465486598"
    },
    {
        img: "/img/Contact/add-2.svg",
        name: "Email",
        number_1: "+92 3032150993",
        number_2: "+92 5465486598"
    },
    {
        img: "/img/Contact/add-3.svg",
        name: "Address",
        number_1: "+92 3032150993",
        number_2: "+92 5465486598"
    }
]


import React from 'react'

const Address = () => {
  return (
    <div className='w-full lg:min-h-[50vh] grid border-b border-gray-500 md:grid-cols-2 lg:grid-cols-3 place-content-center md:px-16 gap-5 bg-[#0D1320] text-white'>
        {addressData.map((items, index) => {
            return (
                <div id='EduCard' className={`bg-ServiceCard relative px-4 w-full h-fit flex gap-6 py-7 rounded-xl ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                    <div className='relative z-40'>
                        <img src={items.img} alt="" />
                    </div>
                    <div className='relative z-40'>
                        <h1 className='md:text-2xl font-semibold'>{items.name}</h1>
                        <p className='md:text-md xs:text-sm'>{items.number_1}</p>
                        <p className='md:text-md xs:text-sm'>{items.number_2}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Address