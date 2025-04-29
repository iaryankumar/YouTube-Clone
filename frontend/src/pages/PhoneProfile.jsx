import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { GoHistory, GoVideo } from 'react-icons/go'
import { MdOutlineWatchLater } from 'react-icons/md'
import { RiPlayListAddFill, RiVerifiedBadgeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

const PhoneProfile = (props) => {
    return (
        <>

            <div className='px-2'>
                {/* this is about profile part */}
                <Link to={'/profile'} className='h-max w-full  flex items-center gap-5  px-3 pt-12 pb-6'>
                    <img src="https://yt3.googleusercontent.com/SGRHXZunb4SZHmczh3MDjbM718jP0hRgn1ZFvPtHCCyWavA-kvx-iupWVgR5P5mrkrX7FeOygw=s160-c-k-c0x00ffffff-no-rj" className='h-[105] w-[105px]  rounded-full object-cover' />
                    <div className='h-full  w-full py-5'>
                        <h1 className='sm:text-4xl text-2xl font-bold font-primary flex items-center justify-center gap-3 w-max'>Geet MP3 <RiVerifiedBadgeFill className='text-[13px]' /> </h1>
                        <div className='flex sm:flex-row flex-col sm:gap-3 gap-0.5 text-[13px] font-primary text-gray-600 sm:mt-2'>
                            <span className='flex items-center gap-1
                                    ' ><div className='h-[4px] w-[4px] rounded-full bg-gray-400'></div><p>200M Subscribers</p></span>
                            <span className='flex items-center gap-1
                                    ' ><div className='h-[4px] w-[4px] rounded-full bg-gray-400'></div><p>1 videos</p></span>
                        </div>

                    </div>
                </Link>

                <hr className='mt-3 text-gray-200' />
                {/* this is about profile part */}

                <div className='flex flex-col items-center justify-center w-full ps-2 mt-4'>
                <Link to={'/history'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer hover:bg-primaryFontsHover`}>
                    <GoHistory className='text-[20px]' />
                    <p className={`text-[13px] `}>History</p>
                </Link>
                

                <Link to={'/watch-later'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer   hover:bg-primaryFontsHover`}>
                    <MdOutlineWatchLater className='text-[20px]' />
                    <p className={`text-[13px] `}>Watch Later</p>
                </Link>
                
                <Link to={'/liked'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer hover:bg-primaryFontsHover`}>
                    <AiOutlineLike className='text-[20px]' />
                    <p className={`text-[13px]'}`}>Liked videos</p>
                </Link>
                </div>
            </div>
            <div className='h-max w-full fixed bottom-0 md:hidden block'>
                <Navigation page={'profile'} />
            </div>

        </>
    )
}

export default PhoneProfile
