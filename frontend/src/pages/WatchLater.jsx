import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { MdOutlineDelete, MdOutlineDeleteForever } from 'react-icons/md'

const WatchLater = () => {
  return (
    <>
    <Navbar />

<div className='flex items-center justify-end relative h-max overflow-x-hidden sm:pb-0 pb-18'>
    <aside className='h-[calc(100vh-65px)] w-[215px] fixed top-[65px] left-0 px-2 overflow-auto kkh md:block hidden'><Sidebar page={'later'} /></aside>
    <div className='min-h-[calc(100vh-65px)] max-h-max md:w-[calc(100%-235px)] w-full sm:py-0 py-3 flex sm:flex-row flex-col'>
        <div className='h-max md:w-[60%] w-full px-2 pt-7 '>
            <h1 className='text-4xl font-primary font-semibold'>Watch Later</h1>
            <div className='flex flex-col h-max w-full mt-10 gap-3 pb-5'>
                {
                    Array(12).fill(0).map((ele, i) => {
                        return <div key={i} className='min-h-[100px] max-h-max w-[100%] flex items-center relative cursor-pointer hover:bg-primaryFonts rounded-xl'>
                            <div className='h-[110px] w-[220px] rounded-xl'>
                                <img src="https://i.ytimg.com/vi/FoBU55F50Ek/maxresdefault.jpg" className='h-full w-[220px] rounded-xl object-cover' />
                            </div>
                            <div className='h-full w-[calc(100%-170px)] flex flex-col font-primary px-3'>
                                <h1 className=''>New Song by Honey Singh - 2022 || T-Series 2022</h1>
                                <p className='text-[14px] text-gray-500'>T-Series</p>
                                <p className='text-[13px] text-gray-500'>124M views</p>

                            </div>
                            <MdOutlineDelete className='absolute text-[17px] text-red-600 right-3 bottom-2 cursor-pointer' />
                        </div>
                    })
                }
            </div>

        </div>
        <div className='md:w-[40%] w-full '>
            <div className='h-[65px] fixed sm:top-[300px] bottom-0 right-0 w-[380px] flex items-center justify-center'>
                <button className='bg-primaryFonts px-5 sm:py-2 py-3 rounded-full text-[14px] flex items-center gap-2 cursor-pointer'> <MdOutlineDeleteForever className='text-xl' /> Clear All Watch Later List</button>
            </div>
        </div>

    </div>
</div>
    </>
  )
}

export default WatchLater
