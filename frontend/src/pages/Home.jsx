import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SuggestionActions from '../components/SuggestionActions'
import VideoLists from '../components/VideoLists'
import Navigation from '../components/Navigation'

const Home = () => {
    return (
        <>
            <Navbar />

            <div className='flex items-center justify-end relative h-max overflow-x-hidden sm:pb-0 pb-18'>
                <aside className='h-[calc(100vh-65px)] w-[215px] fixed top-[65px] left-0 px-2 overflow-auto kkh md:block hidden'><Sidebar page={'home'} /></aside>
                <div className='min-h-[calc(100vh-65px)] max-h-max md:w-[calc(100%-235px)] w-full sm:py-0 py-3'>
                    <SuggestionActions page={'home'} />
                    <VideoLists />
                </div>
            </div>

            <div className='h-max w-full fixed bottom-0 md:hidden block'>
                <Navigation page={'home'} />
            </div>
        </>
    )
}

export default Home
