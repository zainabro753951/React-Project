let ExpCardData = [
    {
        id: '01',
        name: 'Junior UI/UX Designer',
        name1: '- Amazone',
        serial: '(2014-2015)'
    },
    {
        id: '02',
        name: 'Junior UI/UX Designer',
        name1: '- Amazone',
        serial: '(2014-2015)'
    },
    {
        id: '03',
        name: 'Junior UI/UX Designer',
        name1: '- Amazone',
        serial: '(2014-2015)'
    },
]



import React from 'react'

const ExperienceCard = () => {
   return ExpCardData.map((items) => {
        return (
            <div id='ExpCard' className=' relative w-full not-italic font-Barlow px-2 md:h-[19vh] lg:h-[25vh] xs:py-3 sm:py-5 bg-ExpCard rounded-xl text-white'>
                <div className='relative z-40 flex items-center w-full h-full'>
                <div className='md:text-5xl xs:text-2xl font-medium pr-5'>
                    <h1>{items.id}</h1>
                </div>
                <div className='w-1 h-full mr-7 bg-backLine rounded-[50%]'></div>
                <div className='flex md:text-2xl xs:text-[10px] md:font-semibold'>
                    <h1>{items.name}</h1>
                    <h1 className='text-[#3EAEFF] md:pl-5'>{items.name1}</h1>
                </div>
                <div>
                    <h1 className='lg:pl-28 md:pl-16 xs:pl-5 md:text-2xl xs:text-[10px] '>{items.serial}</h1>
                </div>
                </div>
            </div>
        )
    })
}
export default ExperienceCard