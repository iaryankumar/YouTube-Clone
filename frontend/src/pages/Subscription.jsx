import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'

const Subscription = () => {
  return (
    <>
    <Navbar />

<div className='flex items-center justify-end relative h-max overflow-x-hidden '>
    <aside className='h-[calc(100vh-65px)] w-[215px] fixed top-[65px] left-0 px-2 overflow-auto kkh md:block hidden'><Sidebar page={'subscription'} /></aside>
    <div className='min-h-[calc(100vh-65px)] max-h-max md:w-[calc(100%-235px)] w-full sm:py-0 py-3'>
        <div className='h-full w-full py-3 grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 sm:gap-x-3 gap-x-1 sm:px-0 px-1 sm:pb-0
        pb-16'>

          {/* card */}
          {
            Array(32).fill(0).map((ele)=>{
              return <div className='flex flex-col items-center justify-center h-[115px] w-full cursor-pointer '>
              <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" className='h-[55px] w-[55px] rounded-full object-cover' />
              <h1 className='truncate w-[60%] text-center text-[14px] font-primary font-semibold' >RevenRoxx12345</h1>
            </div>
            })
          }
          {/* card */}

        </div>
    </div>
</div>

<div className='h-max w-full fixed bottom-0 md:hidden block'>
    <Navigation page={'subscription'} />
</div>
    </>
  )
}

export default Subscription
