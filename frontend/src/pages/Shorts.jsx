import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ShortsView from '../components/ShortsView'
import Navigation from '../components/Navigation'

const Shorts = () => {
    return (
        <>
            <div className='sm:block hidden'>
            <Navbar />
            </div>
            <div className='flex items-center justify-end relative h-max overflow-x-hidden  '>
                <aside className='h-[calc(100vh-65px)] min-h-[100vh] w-[215px] fixed top-[65px] left-0 px-2 overflow-auto kkh md:block hidden'><Sidebar page={'shorts'} /></aside>
                <div className='h-max md:w-[calc(100%-235px)] w-full'>
                    <ShortsView/>
                </div>
            </div>
            <div className='sticky bottom-0 md:hidden block'>
            <Navigation page={'shorts'}/>
            </div>
        </>
    )
}

export default Shorts
