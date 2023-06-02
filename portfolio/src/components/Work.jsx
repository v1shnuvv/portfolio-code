
import React from 'react'
import noteApp from '../assets/note-bg.jpg'
function Work(){
    return(
        <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div pb-4>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600'>Work</p>
                    <p className='py-8'>Checkout my recent work</p>
                </div>
                {/* container */}
                {/* <div  
                className='grid md:grid-cols-2 sm:grid-cols-2 gap-4'> */}
                <div className='grid-container'>
                    {/* grid-items */}
                    <div 
                    style={{backgroundImage: `url(${noteApp})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div'>
                        
                        {/* hover effect */}
                        {/* <div className='opacity-0 group-hover:opacity-100'> */}
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React-Note-App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://v1shnuvv.github.io/notes/'>
                                    <button className='text-center rounded-lg px-3 py-3 mr-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/v1shnuvv/react-note-app/tree/main/notes14/src'>
                                    <button className='text-center rounded-lg px-3 py-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div> 

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Work;