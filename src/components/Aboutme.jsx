import React from 'react'

const Aboutme = () => {
  return (
    <section id="Aboutme" className='w-[100%] scroll-pe-*'>
        <h2 className='font-Syne text-[30px] font-bold'> More About Me: </h2>
        
        <div className='flex gap-5 items-center justify-between'> 
          
          <div>
            Studies:
          </div>

          <div >
            <h3 className='font-semibold my-2 text-left'>Soft skills:</h3>
            <ul className='flex flex-col gap-1 list-disc'>
              <li>Professionalism</li>
              <li>Transparency </li>
              <li>Problem-solving</li>
              <li>Curiosity </li>
              <li>Growth Mindset</li>
              <li>Emotional intelligence</li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold my-2 text-left'>Other Interest:</h3>
            <ul className='flex flex-col gap-1 list-disc'>
              <li>Data Science</li>
              <li>Algorithms</li>
            </ul>
          </div>

        </div>

    </section>
  )
}

export default Aboutme