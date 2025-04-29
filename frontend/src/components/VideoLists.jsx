import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const VideoLists = () => {
  return (
    <>
      <div className='h-max w-full grid xlg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-2 sm:px-1 px-2'>
        {
          Array(30).fill(0).map((ele,i)=>{
            return <Link to={'/video'} key={i} className='h-max w-full flex flex-col items-center cursor-pointer hover:bg-gray-50 py-2 px-0.5 rounded-2xl'>
            <img src="https://i.ytimg.com/vi/6RMENMtk3q4/maxresdefault.jpg" className='h-[180px] w-full rounded-xl' />
            <div className='h-full w-full flex pt-2 px-1'>
              <div className='h-[40px] w-[40px] bg-blue-600 rounded-full'>
                <img src="https://images.indianexpress.com/2020/05/t-series-759.jpg" className='h-[40px] w-[40px] rounded-full object-cover' />
              </div>
              <div className='h-full w-[calc(100%-40px)] ps-4 flex flex-col gap-0.5'>
                <h1 className='overflow-hidden text-ellipsis font-semibold text-[15px]' style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}>Pawan Singh New Song 2025 | आरा के ओठलाली | Arrah Ke Othlali | Kalpana Patowary | Official Video</h1>
                <p className='text-[13px] text-gray-600 flex items-center gap-1'><span>T-Sreies Bhojpuri</span> <span><RiVerifiedBadgeFill className='text-[11px] mt-0.5' /></span></p>
                <p className='text-[13px] text-gray-600'>50.9M views</p>
              </div>
            </div>
          </Link>
          })
        }
      </div>
    </>
  )
}

export default VideoLists