import React from 'react';
import html from '../assets/HTML5-logo.png'
import css from '../assets/css-logo.png'
import js from '../assets/js-logo.png'
import reactimg from '../assets/react-logo.png'
import github from '../assets/Github-Logo.png'
import nodejs from '../assets/nodejs-logo.png'
import mongo from '../assets/logo-mongodb.png'
import aws from '../assets/aws-logo.png'
function Skills(){
    return(
        <div name='skills' className='w-full md:h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  text-gray-300'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
                    <p className='pb-4 pt-8'>These are the technologies I've worked with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt="html icon"/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="html icon"/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={js} alt="html icon"/>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactimg} alt="html icon"/>
                        <p className='my-4'>ReactJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="html icon"/>
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nodejs} alt="html icon"/>
                        <p className='my-4'>NodeJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongo} alt="html icon"/>
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={aws} alt="html icon"/>
                        <p className='my-4'>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;