import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaSkyatlas } from 'react-icons/fa'
import { GoHistory, GoVideo } from 'react-icons/go'
import { ImNewspaper } from 'react-icons/im'
import { IoMdHome } from 'react-icons/io'
import { IoHelpCircleOutline, IoMusicalNotesOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineSubscriptions, MdOutlineWatchLater } from 'react-icons/md'
import { PiFilmSlateDuotone } from 'react-icons/pi'
import { RiPlayListAddFill } from 'react-icons/ri'
import { SiYoutubeshorts } from 'react-icons/si'
import { TbCloudNetwork } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <>
    <nav className=' w-full flex flex-col gap-1'>
        <Link to={'/'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='home'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <IoMdHome className='text-[23px]' />
        <p className={`text-[13px] ${props.page==='home'? 'font-[500]':'font-[400]'}` }>Home</p>
        </Link>
        <Link to={'/shorts'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='shorts'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <SiYoutubeshorts className='text-[23px]' />
        <p className={`text-[13px] ${props.page==='shorts'? 'font-[500]':'font-[400]'}` }>Shorts</p>
        </Link>
        <Link to={'/subscribes'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='subscription'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <MdOutlineSubscriptions className='text-[23px]' />
        <p className={`text-[13px] ${props.page==='subscription'? 'font-[500]':'font-[400]'}` }>Subscriptions</p>
        </Link>

        <hr className='text-gray-100 my-2' />

        <Link to={'/history'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='history'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <GoHistory className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='history'? 'font-[500]':'font-[400]'}` }>History</p>
        </Link>
        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='playlists'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <RiPlayListAddFill className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='playlists'? 'font-[500]':'font-[400]'}` }>Playlists</p>
        </button>
        <Link to={'/profile'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='myProfile'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <GoVideo className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='myVideos'? 'font-[500]':'font-[400]'}` }>My Profile</p>
        </Link>
        <Link to={'/watch-later'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='later'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <MdOutlineWatchLater className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='later'? 'font-[500]':'font-[400]'}` }>Watch Later</p>
        </Link>
        <Link to={'/liked'} className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='liked'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <AiOutlineLike className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='liked'? 'font-[500]':'font-[400]'}` }>Liked videos</p>
        </Link>

        <hr className='text-gray-100 my-2' />

        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='music'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <IoMusicalNotesOutline className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='music'? 'font-[500]':'font-[400]'}` }>Music</p>
        </button>
        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='films'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <PiFilmSlateDuotone className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='films'? 'font-[500]':'font-[400]'}` }>Films</p>
        </button>
        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='news'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <ImNewspaper className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='news'? 'font-[500]':'font-[400]'}` }>News</p>
        </button>
        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='fashion'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <FaSkyatlas className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='fashion'? 'font-[500]':'font-[400]'}` }>Fashion & beauty</p>
        </button>
        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='cloud'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <TbCloudNetwork className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='cloud'? 'font-[500]':'font-[400]'}` }>Cloud</p>
        </button>

        <hr className='text-gray-100 my-2' />

        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='setting'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <IoSettingsOutline className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='setting'? 'font-[500]':'font-[400]'}` }>Settings</p>
        </button>
        <button className={`flex gap-3 items-center px-3 w-full h-[44px] rounded-xl cursor-pointer ${props.page==='help'&& 'bg-primaryFonts'}  hover:bg-primaryFontsHover`}>
        <IoHelpCircleOutline className='text-[20px]' />
        <p className={`text-[13px] ${props.page==='help'? 'font-[500]':'font-[400]'}` }>Help</p>
        </button>

        <hr className='text-gray-100 my-2' />

        <p className='px-1 text-[13px] text-gray-700'>
        "By streaming/uploading content, you accept our usage terms, privacy policy, and copyright rules.""
        </p>

        <p className='px-1 text-[13px] text-gray-400 mt-4 font-light'>
        © 2025 Youtube. All rights reserved.
        </p>

    </nav>
    </>
  )
}

export default Sidebar
