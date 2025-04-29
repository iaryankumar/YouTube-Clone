import React from 'react'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoIosAdd, IoMdHome } from 'react-icons/io'
import { MdOutlineSubscriptions, MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Navigation = ({ page }) => {
    return (
        <>

            <nav className='h-[65px] w-full bg-white border-t border-gray-300 flex items-center justify-evenly gap-3 text-2xl'>
                {
                    page === 'home' ? <GoHomeFill />:<Link to={'/'}><GoHome /></Link> 
                }
                {
                    page === 'shorts' ? <SiYoutubeshorts /> : <Link to={'/shorts'}><SiYoutubeshorts /></Link>
                }
                {
                    <Link to={'/upload'} className={`h-[30px] w-[30px] rounded-full flex items-center justify-center text-gray-500 ${page!=='upload'? 'bg-primaryFonts ':'bg-red-600 text-white'}`}><IoIosAdd /></Link>
                }
                {
                    page === 'subscription' ? <MdSubscriptions /> : <Link to={'/subscribes'}><MdOutlineSubscriptions /></Link> 
                }
                {
                    <Link to={'/Phoneprofile'} className='h-[30px] w-[30px] rounded-full bg-black flex items-center justify-center'>
                        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  className='h-[30px] w-[30px] rounded-full object-cover' />
                    </Link>
                }

            </nav>

        </>
    )
}

export default Navigation
