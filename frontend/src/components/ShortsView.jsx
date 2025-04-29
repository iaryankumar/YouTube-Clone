import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

const ShortsView = () => {
    const [isPaused, setIsPaused] = useState(false)
    const arr = ['https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4', 'https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4']
    return (
        <>

            <div className='h-[calc(100vh-65px)] w-full  flex items-center justify-center sm:py-6 py-0 relative'>

                {<div className='h-full sm:w-[350px] w-full border border-gray-100  rounded p-0.5 relative'>
                    <video src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" className='h-full w-full outline-none' controls autoPlay muted></video>
                </div>}

                <div className='h-[50px] w-[50px] rounded-full bg-gray-200 absolute bottom-10 right-24 cursor-pointer sm:flex hidden items-center justify-center '>
                <FaArrowDown />
                </div>

            </div>

        </>
    )
}

export default ShortsView
