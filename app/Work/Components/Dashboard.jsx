import React from 'react'
import Projectdashboard from './Projectdashboard'

const Dashboard = () => {

  return (
    <div className=' font-Barlow not-italic max-w-[1000px] md:p-10 rounded-3xl'>
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='md:text-3xl xs:text-xl font-semibold'>Projects Dashboard</h1>
                <h1 className='md:text-xl font-semibold'>Jully 2024</h1>
            </div>
            <div className='grid sm:grid-cols-2 gap-16 md:py-14 xs:py-7'>
                <Projectdashboard/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard