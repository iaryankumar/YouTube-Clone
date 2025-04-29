import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { MdOutlineDelete, MdOutlineDeleteForever } from 'react-icons/md'

const Likes = () => {
    return (
        <>
            <Navbar />

            <div className='flex items-center justify-end relative h-max overflow-x-hidden sm:pb-0 pb-18'>
                <aside className='h-[calc(100vh-65px)] w-[215px] fixed top-[65px] left-0 px-2 overflow-auto kkh md:block hidden'><Sidebar page={'liked'} /></aside>
                <div className='min-h-[calc(100vh-65px)] max-h-max md:w-[calc(100%-235px)] w-full sm:py-0 py-3 flex lg:flex-row flex-col relative'>

                    {/* this is the left fixed part */}
                    <div className='lg:h-[calc(100vh-70px)] h-[420px] lg:w-[40%] w-full relative flex'>
                        <div className='lg:h-[540px] h-full lg:w-[350px] md:w-[calc(100vw-245px)] w-full lg:fixed absolute top-0 lg:top-[85px] lg:left-[265px] rounded-xl'>
                            <div className='h-full w-full absolute bg-[rgb(0,0,0,0.6)] rounded-xl px-3'></div>
                            <img src="https://images.unsplash.com/photo-1614851099511-773084f6911d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" className='h-full rounded-2xl w-full absolute -z-10' />
                            <div className='p-3'>
                                <img src="https://i.ytimg.com/vi/FoBU55F50Ek/maxresdefault.jpg" className='sm:h-[198px] h-[150px] lg:w-[90%] w-max rounded-xl m-auto mt-16 relative sm:z-20' />
                                <div className='h-full w-full'>
                                    <div className='h-[40px] w-[90%] m-auto mt-5 text-white hover:bg-white hover:text-black hover:font-normal transition-all ease-initial border border-gray-400  rounded-full flex items-center justify-center  font-primary font-light text-[14px] cursor-pointer relative z-20'>
                                        <h1>Play video</h1>
                                    </div>
                                    <div className='h-[40px] w-[90%] m-auto mt-5 text-white hover:bg-red-700 hover:border-none hover:font-normal transition-all ease-initial border border-gray-400  rounded-full flex items-center justify-center  font-primary font-light text-[14px] cursor-pointer relative z-20'>
                                        <h1>Remove All Videos</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* this is the left fixed part */}

                    {/* this is the right part */}
                    <div className='min-h-[calc(100vh-70px)] lg:w-[60%] w-full  md:px-8 px-0'>
                        <div className='flex flex-col h-max w-full mt-10 gap-5 pb-5'>
                            {
                                Array(12).fill(0).map((ele, i) => {
                                    return <div key={i} className='min-h-[100px] max-h-max w-[100%] flex items-center relative hover:bg-gray-100 md:px-8 px-1 cursor-pointer rounded-[10px] py-1'>
                                        <div className='h-[110px] sm:w-[220px] w-[180px] rounded-xl'>
                                            <img src="https://i.ytimg.com/vi/FoBU55F50Ek/maxresdefault.jpg" className='h-full sm:w-[220px] w-[180px] rounded-xl object-cover' />
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


                    {/* this is the right part */}

                </div>
            </div>
        </>
    )
}

export default Likes
