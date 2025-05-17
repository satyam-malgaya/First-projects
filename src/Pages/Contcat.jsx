import React from 'react'

function Contcat() {
  return (
    <div className="min-h-screen">
      <div className='w-full h-[40vh] md:h-[60vh] text-[8vw] md:text-[9vw] uppercase font-bold flex justify-start items-center px-4 md:px-10'>
        <h1 className='hover:text-zinc-700 transition-all duration-300'>Contact Me</h1>
      </div>
      <div className='w-full flex flex-col md:flex-row h-auto md:h-[80vh]'>
        <div className='w-full md:w-[30%] h-auto md:h-[70vh] flex flex-col gap-8 md:gap-17 px-4 md:px-10 py-6 md:py-10'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <h1 className='uppercase text-[4vw] md:text-[2vw] underline'>Email</h1>
            <p className='text-[3.5vw] md:text-[1.7vw]'>info@mysite.com</p>
          </div>
          <div className='flex flex-col gap-3 md:gap-5'>
            <h2 className='text-[4vw] md:text-[2vw] underline uppercase'>Phone</h2>
            <p className='text-[3.5vw] md:text-[1.7vw]'>123-456-7890</p>
          </div>
        </div>
        <div className='w-full md:w-[30%] h-auto md:h-[70vh] flex flex-col gap-8 md:gap-10 px-4 md:px-10 py-6 md:py-10'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <h1 className='uppercase text-[4vw] md:text-[2vw] underline'>Studio</h1>
            <p className='text-[3.5vw] md:text-[1.7vw]'>500 Terry Francine St<br />San Francisco, CA 94158</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-[4vw] md:text-[2vw] underline uppercase'>Follow me</h2>
            <p className='text-[3.5vw] md:text-[1.7vw]'>@KAY.V.H</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contcat