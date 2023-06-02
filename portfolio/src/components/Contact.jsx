import React from 'react'

function Contact(){
    return(
        <div name='contact' className='w-full  bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='post' action='https://getform.io/f/fb4ea4e7-970c-4beb-a7d0-d6df9528c05c' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 inline border-red-600 text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-4'>
                        Submit the form below or shoot me an email - vishnuv4363@gmail.com
                    </p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name="name"/>
                <input className='bg-[#ccd6f6] my-4 p-2'type="email" placeholder='Email' name="email"/>
                <textarea className='bg-[#ccd6f6] p-2' placeholder='Message'  name="message" rows="10"></textarea>
                <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}
export default Contact;