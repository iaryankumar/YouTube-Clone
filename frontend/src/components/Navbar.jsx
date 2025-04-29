import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import { ImYoutube2 } from 'react-icons/im'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='h-[65px]  w-full flex items-center justify-between md:px-7 px-4 sticky top-[-2px] z-50 bg-white sm:border-b-0 border-b border-gray-200'>

                <div className='h-full flex items-center md:gap-3 gap-2'>
                    <div className='h-[38px] w-[38px] hover:bg-gray-100 rounded-full md:flex hidden items-center justify-center cursor-pointer text-[19px] text-gray-600'>
                        <RxHamburgerMenu />
                    </div>
                    <FaYoutube className='sm:text-4xl text-4xl text-red-600 cursor-pointer' />
                </div>

                <div className='md:hidden flex items-center justify-center gap-3'>
                    <div className='h-[35px] w-[35px] flex items-center justify-center relative'>
                        <IoIosNotificationsOutline className='text-[23px]' />
                        <div className='h-[11px] w-[20px] bg-red-700 absolute right-[-2px] rounded-xl top-[6px] flex items-center text-[10px] text-white'>
                            <h1 className='ml-[3px] flex items-center mb-0.5'>9 <span className='absolute left-2'>+</span></h1>
                        </div>
                    </div>
                    <FiSearch className=' text-gray-800' />
                </div>

                <div className='h-full flex-1 md:flex hidden items-center justify-end'>

                    <div className='h-full w-full flex items-center justify-end py-2.5 lg:px-12 nd:px-3 px-2 '>

                        <form className='h-full w-max flex items-center gap-2 border rounded-full border-gray-100 ps-4 shadow'>
                            <input type="text" placeholder='Search' className='w-[450px] h-full outline-none text-[14px] mb-0.5' />
                            <div className='h-full w-[65px] rounded-r-full bg-primaryFonts flex items-center justify-center hover:bg-primaryFontsHover cursor-pointer'>
                                <FiSearch className=' text-gray-600' />
                            </div>
                        </form>

                    </div>

                    <div className='h-full flex items-center lg:gap-8 gap-3'>
                        <Link to={'/upload'} className='h-[35px] w-[100px] rounded-full bg-primaryFonts flex items-center gap-1.5 justify-center cursor-pointer hover:bg-primaryFontsHover'>
                            <GoPlus />
                            <p className='text-[14px] mb-0.5'>Create</p>
                        </Link>
                        <ul className='h-full flex items-center gap-4'>
                            <li>
                                <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-primaryFontsHover cursor-pointer relative'>
                                    <IoIosNotificationsOutline className='text-[23px]' />
                                    <div className='h-[15px] w-[22px] bg-red-700 absolute right-[-2px] rounded-xl top-[6px] flex items-center text-[12px] text-white'>
                                        <h1 className='ml-[3px] flex items-center mb-0.5'>9 <span className='absolute left-2'>+</span></h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='h-[35px] w-[35px] rounded-full bg-green-600 cursor-pointer'>
                                    <Link to={'/profile'}>
                                        <img src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/2a9500aa-74f9-11ee-8902-02420a000165/gooey.ai%20-%20A%20beautiful%20anime%20drawing%20of%20a%20smilin...ibli%20ponyo%20anime%20excited%20anime%20saturated%20colorsn.png" className='h-[35px] w-[35px] rounded-full object-cover' />
                                    </Link>

                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
