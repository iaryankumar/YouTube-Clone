import React from 'react'
import Navbar from '../components/Navbar'
import PlayBack from '../components/PlayBack'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

const Video = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-65px)] w-full flex lg:flex-row flex-col sm:px-4 px-1 py-3 gap-2'>
        <div className='h-max lg:w-[65%] w-full sm:px-4 px-0'>
          <PlayBack />
          <div className='h-max w-full py-2 sm:px-0 px-2'>
            <h1 className='font-bold text-[20px]'>Pawan Singh New Song 2025 | आरा के ओठलाली | Arrah Ke Othlali | Kalpana Patowary | Official Video</h1>
          </div>
          <div className='h-max w-full flex flex-col-reverse sm:gap-0 gap-5 items-center sm:mt-0 mt-3 sm:px-0 px-2'>
            <div className='h-full lg:w-[390px] w-full flex items-center gap-2'>
              <div className='h-[40px] w-[40px] rounded-full bg-blue-600'>
              </div>
              <div className='flex flex-col gap-0 font-primary'>
                <h1 className='font-semibold text-gray-900  text-[17px] tracking-[-0.5px]'>Wamindia Movies</h1>
                <p className='text-[12px] text-gray-600 m-0 p-0'>1.2M Subscribers</p>
              </div>
              <div className='px-5 py-1.5 rounded-full bg-black border text-white flex items-center justify-center text-[13px] font-primary cursor-pointer'>
                <h1>Subscribe</h1>
              </div>
            </div>
            <div className='h-full lg:w-[calc(100%-390px)] w-full flex items-center justify-start pe-3 gap-5'>
              <div className='h-[35px] w-max  flex items-center bg-gray-100 py-2 px-4 rounded-full'>

                <div className='h-full w-max flex items-center gap-1 border-r border-gray-300 pe-6 cursor-pointer'>
                  <AiOutlineLike className='text-xl' />
                  <h1 className='text-[14px] font-semibold text-gray-700'>500K </h1>
                </div>
                <div className='h-full w-max flex items-center ml-3 cursor-pointer'>
                  <AiOutlineDislike className='text-xl' />
                </div>

              </div>
              <div className='h-[35px] w-max px-3 rounded-full bg-gray-100 flex items-center justify-center gap-1 cursor-pointer'>
                <MdOutlineWatchLater />
                <h1 className='text-[14px] font-semibold text-gray-700'>Save </h1>
              </div>
            </div>

          </div>

          <div className='h-max w-full bg-gray-200 mt-9 rounded-3xl px-6 py-5 font-primary text-[15px]'>
            <h1 className='font-bold'><span>150M views</span> <span>12 years ago</span> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus quas at in provident a doloremque laboriosam praesentium animi quasi obcaecati voluptatibus, nulla rem nobis quos nam aut corporis debitis, nostrum amet eos. Nobis possimus quisquam harum, dignissimos perferendis dicta debitis eos.</p>
          </div>

        </div>
        <div className='min-h-[90vh] max-h-max lg:w-[35%] w-full px-3 py-4'>
          <h1 className='text-xl font-semibold text-gray-500'>Suggested</h1>
          <div className='flex flex-col h-max w-full mt-3 gap-3 '>
            {
              Array(8).fill(0).map((ele, i) => {
                return <div key={i} className='min-h-[100px] max-h-max w-full  flex items-center'>
                  <div className='h-[110px] w-[170px] rounded-xl'>
                    <img src="https://i.ytimg.com/vi/FoBU55F50Ek/maxresdefault.jpg" className='h-full w-[170px] rounded-xl object-cover' />
                  </div>
                  <div className='h-full w-[calc(100%-170px)] flex flex-col font-primary px-3'>
                    <h1 className='font-semibold'>New Song by Honey Singh - 2022 || T-Series 2022</h1>
                    <p className='text-[14px] text-gray-500'>T-Series</p>
                    <p className='text-[13px] text-gray-500'>124M views</p>

                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Video
