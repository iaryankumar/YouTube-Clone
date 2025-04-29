import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const MyProfile = () => {
    const [viewSection, setViewSection] = useState('home')
    return (
        <>
            <Navbar />

            <div className='flex items-center justify-end relative h-max overflow-x-hidden sm:pb-0 pb-18'>
                <aside className='h-[calc(100vh-65px)] w-[215px] fixed top-[65px] left-0 px-2 overflow-auto kkh md:block hidden'><Sidebar page={'myProfile'} /></aside>
                <div className='min-h-[calc(100vh-65px)] max-h-max md:w-[calc(100%-235px)] w-full sm:py-0 py-3 '>

                    {/* this is banner part */}
                    <div className='h-[160px] w-[99%]  rounded-xl'>
                        <img src="https://yt3.googleusercontent.com/wDg_ymz9LjVqmyL53TnBVpTef5L38TV5j6d40trQL9ntpN7LA4W9KgXEKNHp2vu0wM912tVK=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" className='h-[160px] w-full  rounded-xl object-cover' />
                    </div>
                    {/* this is banner part */}

                    {/* this is about profile part */}
                    <div className='h-max w-full  flex items-center sm:px-2.5 ps-5 sm:mt-4'>
                        <img src="https://yt3.googleusercontent.com/SGRHXZunb4SZHmczh3MDjbM718jP0hRgn1ZFvPtHCCyWavA-kvx-iupWVgR5P5mrkrX7FeOygw=s160-c-k-c0x00ffffff-no-rj" className='sm:h-[155px] h-[105px] w-[105px] sm:w-[155px] rounded-full object-cover' />
                        <div className='h-full  w-full ps-4 py-5'>
                            <h1 className='sm:text-4xl text-2xl font-bold font-primary flex items-center justify-center gap-3 w-max'>Geet MP3 <RiVerifiedBadgeFill className='text-[13px]' /> </h1>
                            <div className='flex sm:flex-row flex-col sm:gap-3 gap-0.5 text-[13px] font-primary text-gray-600 sm:mt-2'>
                                <span className='text-black'>@GeetMP3</span>
                                <span className='flex items-center gap-1
                                ' ><div className='h-[4px] w-[4px] rounded-full bg-gray-400'></div><p>200M Subscribers</p></span>
                                <span className='flex items-center gap-1
                                ' ><div className='h-[4px] w-[4px] rounded-full bg-gray-400'></div><p>1 videos</p></span>
                            </div>
                            <p className='text-[12px] font-light font-primary text-gray-600 w-[60%] mt-1'>This is the official chanel of GeetMP3...  </p>
                            <button className='bg-black text-white px-7  rounded-full py-1 text-[14px] font-primary mt-3 cursor-pointer'>Subscribe</button>
                        </div>
                    </div>
                    {/* this is about profile part */}

                    {/* this is home tag part */}
                    <div className='h-max w-full mt-5 px-3 py-2'>
                        <ul className='flex gap-5 text-[15px] font-semibold'>
                            <li className={`h-full border-b-3 pb-2 cursor-pointer ${viewSection !== 'home' ? 'text-gray-600 hover:border-b-3' : 'text-black'}`}>Home</li>
                            {/* <li className={`h-full  pb-2 cursor-pointer ${viewSection !== 'shorts' ? 'text-gray-600 hover:border-b-3' : 'text-black'}`}>Shorts</li>
                            <li className={`h-full  pb-2 cursor-pointer ${viewSection !== 'about' ? 'text-gray-600 hover:border-b-3' : 'text-black'}`}>About</li> */}

                        </ul>

                        <hr className='text-gray-300' />

                    </div>
                    {/* this is home tag part */}

                    {/* this is the body part */}
                    <div className='h-max w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>
                        {
                            Array(20).fill(0).map((ele,i)=>{
                                return <div key={i} className='h-max py-2 rounded hover:bg-gray-50 cursor-pointer w-full px-0.5'>
                                <img src="https://i.ytimg.com/vi/PeyAmpwGkGg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB8Foie6m8FBY8YQJ6BjQpN4ypH8w" className='md:h-[110px] h-full w-full object-cover rounded-[8px]' />
                                <h1 className='overflow-hidden text-ellipsis font-semibold text-[13px]' style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                }}>Pawan Singh New Song 2025 | आरा के ओठलाली | Arrah Ke Othlali | Kalpana Patowary | Official Video</h1>
                                <p className='text-[12px] text-gray-600'>50.9M views</p>
                            </div>
                            })
                        }
                    </div>
                    {/* this is the body part */}

                </div>
            </div>

            <div className='h-max w-full fixed bottom-0 md:hidden block'>
                <Navigation page={'profile'} />
            </div>
        </>
    )
}

export default MyProfile
