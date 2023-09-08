import React from 'react'

const Aboutme = () => {
  return (
    <section id="Aboutme" className='w-1/1 my-[100px] scroll-pe-*'>
        <h2 className='font-Syne text-[30px] font-bold text-palegreen'> More About Me: </h2>
        
        <div className='flex gap-5 items-baseline justify-between max-[400px]:flex-col'> 
          
          <div className='w-1/3 font-Inter ' >
            <h3 className='font-semibold my-2 text-left text-[20px] text-palegreen'>Studies:</h3>
            <ul className='flex flex-col gap-1 list-disc text-[15px] p-2 text-gray'>

              <li> 
                <span className='flex items-center gap-1 '>
                  <div className='flex items-center gap-1 justify-between'>
                    Degree in Physics 
                    <div className='w-[15px]'><img src="/icons/linkarrow.svg" alt="" />
                    </div>
                  </div> 
                </span> 
                <span className='text-[10px]'>
                  At Universidad Distrital Francisco José de Caldas 
                </span> 
              </li>

              <li> 
                <span className='flex items-center gap-1'>
                  Magister in Physics
                  <div className='w-[15px]'><img src="/icons/linkarrow.svg" alt="" />
                  </div> 
                </span> 
                <span className='text-[10px]'>
                  At Universidad de los Andes 
                </span> 
              </li>

              <li> 
                <span className='flex items-center gap-1 '>
                  <div className='flex items-center gap-1'>
                    Python for Data Science, AI & Development
                    <div className='w-[15px]'><img src="/icons/linkarrow.svg" alt="" />
                    </div> 
                  </div>
                </span> 
                <span className='text-[10px]'>
                  At Coursera 
                </span> 
              </li>

              <li> 
                <span className='flex items-center gap-1'>
                  Data Analysis with Python 
                  <div className='w-[15px]'><img src="/icons/linkarrow.svg" alt="" />
                  </div> 
                </span> 
                <span className=' text-[10px]'>
                  At Coursera 
                </span> 
              </li>

              <li> 
                <span className='flex items-center gap-1'>
                  Fundamentals of Web Developing 
                  <div className='w-[15px]'><img src="/icons/linkarrow.svg" alt="" />
                  </div> 
                </span> 
                <span className='text-[10px]'>
                  At Academlo 
                </span> 
              </li>
              
              <li> 
                <span className='flex items-center gap-1'>
                  App Developing with React 
                  <div className='w-[15px]'><img src="/icons/linkarrow.svg" alt="" />
                  </div> 
                </span> 
                <span className='text-[10px]'>
                  At Academlo 
                </span> 
              </li>

            </ul>
          </div>

          <div className='w-1/3 font-Inter'>
            <h3 className='font-semibold my-2 text-left text-[20px] text-palegreen'>Soft skills:</h3>
            <ul className='flex flex-col gap-1 list-disc p-2 text-gray'>
              <li>Professionalism</li>
              <li>Transparency </li>
              <li>Problem-solving</li>
              <li>Curiosity </li>
              <li>Growth Mindset</li>
              <li>Emotional intelligence</li>
            </ul>
          </div>

          <div className='w-1/3 font-Inter'>
            <h3 className='font-semibold my-2 text-left text-[20px] text-palegreen'>Other Interest:</h3>
            <ul className='flex flex-col gap-1 list-disc p-2 text-gray'>
              <li>Data Science</li>
              <li>Algorithms</li>
            </ul>
          </div>

        </div>

    </section>
  )
}

export default Aboutme