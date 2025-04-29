import React, { useState } from 'react'
import { TfiEmail } from 'react-icons/tfi'
import Navigation from '../components/Navigation'

const Upload = () => {
    const [file, setfile] = useState("")
    const handleFile = (e) => {
        const files = e.target.files[0];
        setfile(files)
    }
    console.log(file)
    return (
        <>

            <div className='min-h-max py-8 max-h-max w-full flex items-center justify-center flex-col'>

                {!file&&<div className='h-max sm:w-[40%] w-full px-2'>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            </div>
                            <input onChange={handleFile} id="file" accept='video/*' type="file" className="hidden" />
                        </label>
                    </div>
                </div>}

                {file && <div className='md:h-[550px] h-max w-full  flex md:flex-row flex-col items-center px-3'>
                    <div className='h-[60%] md:w-[50%] w-full'>
                        <video src={URL.createObjectURL(file)} controls className='h-full w-max border border-gray-200 rounded-2xl'></video>
                    </div>
                    <form className='h-full md:w-[50%] w-full md::px-24 px-3 font-primary sm:py-28 py-6'>

                        <div className='h-[43px] border border-gray-200 rounded flex items-center px-4 gap-3'>
                            <input type="text" placeholder='Enter Video Title' className='text-[14px] font-normal font-primary flex-1  outline-none' required />
                        </div>
                        <div className='min-h-[43px] max-h-max border border-gray-200 rounded flex items-center px-0 gap-3 mt-5'>
                            <textarea placeholder='Enter Video Description' className='text-[14px] font-normal font-primary flex-1  outline-none  px-4 py-2' required></textarea>
                        </div>
                        <div title='use , for sepration' className='h-[43px] border border-gray-200 rounded flex items-center px-4 gap-3 mt-5'>
                            <input type="text" placeholder='Enter Video Tags' className='text-[14px] font-normal font-primary flex-1  outline-none' required />
                        </div>
                        <div title='use , for sepration' className='sm:h-[43px] h-[60px] border border-gray-200 rounded flex items-center px-4 gap-3 mt-5'>
                            <input id='tc' type="checkbox" />
                            <label htmlFor='tc' className='text-[15px]'>Im aware of all the video upload policies.</label>
                        </div>
                        <div title='use , for sepration' className='h-[43px] border border-gray-200 rounded flex items-center mt-5'>
                            <button className='w-full bg-red-600 h-full rounded cursor-pointer hover:bg-red-800 text-[14px] text-white'>Upload</button>
                        </div>

                    </form>
                </div>}

            </div>

            <div className='h-max w-full fixed bottom-0 md:hidden block'>
                <Navigation page={'upload'} />
            </div>

        </>
    )
}

export default Upload
