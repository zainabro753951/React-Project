"use client"
export let eCardData = [
    {
        name: "9th Class ",
        year: "2019",
        aria: "- Tando Muhammad Khan",
        discription: "I completed my 9th at one of the best schools in Tando Muhammad Khan, Darul Uloom High School, At that time, the coronavirus pandemic was happening at an international level, so we were promoted to 9th grade without any exams. Up until 9th grade, we only knew the basics of computers, such as the full forms of terms. At this level, we did not have much in-depth knowledge about computers."
    },
    {
        name: "Matric Class",
        year: "2020",
        aria: "- Tando Muhammad Khan",
        discription: "I completed my matriculation at one of the best schools in Tando Muhammad Khan, Darul Uloom High School, where I passed with an A grade. From matriculation itself, I had a strong desire to learn about computers, but I did not have anyone to guide me at that time. As a result, I navigated this journey on my own. It was during this period that I first learned how to install Windows, and then I became familiar with the basics of Linux installation, along with some essential commands."
    },
    {
        name: "First Year",
        year: "2021",
        aria: "- Tando Muhammad Khan",
        discription: "I completed my first year at one of the best government colleges in Tando Muhammad Khan, named Govt. Boys Degree College Mir Ghulam Ali Khan Talpur, with a B grade. I received a B grade because I was marked absent in the practical exams despite being present."
    },
    {
        name: "Intermediate",
        year: "2022",
        aria: "- Tando Muhammad Khan",
        discription: "I completed my Intermediate at one of the best government colleges in Tando Muhammad Khan, named Govt. Boys Degree College Mir Ghulam Ali Khan Talpur, with a A grade."
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