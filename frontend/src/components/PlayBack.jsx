import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdSkipNext } from 'react-icons/md'

const PlayBack = () => {
  return (
    <>

        <div className='h-max w-full md:bg-black sm:rounded-2xl rounded-sm relative'>

            <video src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" controls className='sm:rounded-2xl rounded-sm h-full w-full'></video>

            {/* <div className='h-[65px] w-full bg-[rgb(0,0,0,0.8)] absolute bottom-0 rounded-b-2xl text-white'>
              <div className='h-[20px] w-full  relative px-3'>
                  <input type="range" className='absolute top-[8px] w-[calc(100%-20px)] h-[5px]' />
              </div>
              <div className='h-[40px] w-full rounded-b-2xl flex items-center px-5 gap-3'>
              <FaPlay className='cursor-pointer text-xl' />
              <MdSkipNext className='cursor-pointer text-2xl'/>
              </div>
            </div> */}

        </div>
    
    </>
  )
}

export default PlayBack
