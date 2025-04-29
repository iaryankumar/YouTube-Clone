import React from 'react'
import { GrFormNext } from 'react-icons/gr'

const SuggestionActions = (props) => {
  return (
    <>
    
    <div className='h-[48px] w-max flex items-center gap-4 ps-2  overflow-y-auto'>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='home'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
            All
        </div>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='comedy'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
            Comedy
        </div>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='comedy'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
            Bhojpuri
        </div>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='music'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
            Music
        </div>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='mixes'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
            Mixes
        </div>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='mixes'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
            English Songs
        </div>
        <div className={`h-max py-2 w-max px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='mixes'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
        Bollywood Movies
        </div>
        <div className={`h-max py-2 px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='mixes'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
        South Indian Movies
        </div>
        <div className={`h-max py-2 px-3 flex items-center justify-center rounded-[8px] text-[14px] font-[500] cursor-pointer ${props.page==='mixes'?'bg-black text-white':'bg-primaryFonts hover:bg-primaryFontsHover'}`}>
       The Kapil Sharma Show
        </div>
        <div className='h-[35px] w-[35px] rounded-[8px] bg-primaryFonts hover:bg-primaryFontsHover flex items-center justify-center cursor-pointer'>
        <GrFormNext />
        </div>
    </div>
    
    </>
  )
}

export default SuggestionActions
