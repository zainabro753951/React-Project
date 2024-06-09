export let eCardData = [
    {
        name: "Diploma In UI/UX Design",
        year: "2004",
        aria: "- New York",
        discription: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internettend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you. Amet minim mollit."
    },
    {
        name: "Diploma In UI/UX Design",
        year: "2006",
        aria: "- New York",
        discription: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internettend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you. Amet minim mollit."
    },
    {
        name: "Diploma In UI/UX Design",
        year: "2008",
        aria: "- New York",
        discription: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internettend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you. Amet minim mollit."
    },
    {
        name: "Diploma In UI/UX Design",
        year: "2009",
        aria: "- New York",
        discription: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internettend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you. Amet minim mollit."
    }
] 


import React from 'react'

const EduCard = () => {
  return (
    <div className='grid md:grid-cols-2'>
        {eCardData.map((items, index) => {
            return (
                <div id='EduCard' className={`transition-all duration-500 relative p-5 ${index === 0 ? "md:border-b xs:border-t md:border-t-0 md:border-r" : ''} ${index === 1 ? " md:border-b xs:border-t md:border-t-0" : ''} ${index === 2 ? "md:border-r xs:border-t" : ''} ${index === 3 ? "border-t" : ''} border-gray-400`}>
                    <div className="relative">
                    <h1 className='md:text-3xl xs:text-xl font-semibold'>{items.name}</h1>
                    <h1 className='md:text-5xl sm:text-4xl xs:text-3xl font-bold text-gray-700 py-1 '>{items.year}</h1>
                    <h1 className='pb-1 text-[#3EAEFF] md:text-md xs:text-sm'>{items.aria}</h1>
                    <h1 className='font-light md:text-md xs:text-sm tracking-wider'>{items.discription}</h1>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default EduCard