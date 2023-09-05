import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="Portfolio" className='font-Inter will-change-contents'>
      <h2 className='font-Syne text-[30px] font-bold p-2'>These are my products: </h2>

      <div className='flex w-[700px] h-[300px] items-center overflow-hidden'>
          <div className='w-[50px] aspect-square animate-bounce overflow-clip'>
            <img src="/icons/larrow.svg" alt="" />
          </div>

          <div className=' w-[50px] h-[100px] p-2  rounded-xl overflow-hidden hover:overflow-visible '
                          >
            <a href="https://ecommercebychristiansilva.netlify.app/" target="blank"><img src="/imagesport/e0.png" alt="" /></a>
            <h2 className='font-semibold'>Pokedex.</h2>
            <a href="https://github.com/christianosilvaf/proyectofinalecommerce" target="blank"
                className='text-[10px]'>GitHub Repository.</a>
            
            <div className=''>
              <h2>Project's aims:</h2>
              <ul className='text-[10px] list-disc px-5'>
                <li>React Router (Library)</li>
                <li>React Redux (Library) </li>
                <li>Controled Inputs</li>
                <li>Conditional Rendering</li>
                <li>API Consuming</li>
                <li>Js Algorithms Implementation</li>
              </ul>
            </div>
          </div>

          <div className='  p-2 h-[100px] rounded-xl   overflow-hidden hover:overflow-visible'
                          >
            <a href="https://entregable1christiansilva.netlify.app/" target="blank"><img src="/imagesport/e1.png" alt="" /></a>
            <h2 className='font-semibold'>Random Space Quotes</h2>
            <a href="https://github.com/christianosilvaf/entregable1" target="blank"
                className='text-[10px]'>GitHub Repository.</a>
            
            <div className=' '>
              <h2>Project's aims:</h2>
              <ul className='text-[10px] list-disc px-5'>
                <li>React Components</li>
                <li>React Hook:useState</li>
                <li>Props usage</li>
                <li>Js Algorithms Implementation</li>
              </ul>
            </div>
          </div>

          <div className=' p-2 h-[100px] rounded-xl  overflow-hidden hover:overflow-visible'
                          >
            <a href="https://entregable2christiansilva.netlify.app/" target="blank"><img src="/imagesport/e2.png" alt="" /></a>
            <h2 className='font-semibold'>Weather Info.</h2>
            <a href="https://github.com/christianosilvaf/entregable2" target="blank"
                className='text-[10px]'>GitHub Repository</a>
            
            <div className=' '>
              <h2>Project's aims:</h2>
              <ul className='text-[10px] list-disc px-5'>
                <li>React Components</li>
                <li>React Hook:useState and useEffect</li>
                <li>Props usage</li>
                <li>API Consuming</li>
                <li>Js Algorithms Implementation</li>
              </ul>
            </div>
          </div>

          <div className='p-2 h-[100px] rounded-xl   overflow-hidden hover:overflow-visible'
                          >
            <a href="https://entregable3christiansilva.netlify.app/" target="blank"><img src="/imagesport/e3.png" alt="" /></a>
            <h2 className='font-semibold'>Rick and Morty's API Info.</h2>
            <a href="https://github.com/christianosilvaf/entregable3" target="blank"
                className='text-[10px]'>GitHub Repository.</a>
            
            <div className=' '>
              <h2>Project's aims:</h2>
              <ul className='text-[10px] list-disc px-5'>
                <li>List and Keys</li>
                <li>React Hook:useState and useEffect</li>
                <li>Controled Inputs</li>
                <li>Conditional Rendering</li>
                <li>API Consuming</li>
                <li>Js Algorithms Implementation</li>
              </ul>
            </div>
          </div>

          <div className=' p-2 h-[100px] rounded-xl   overflow-hidden hover:overflow-visible'
                          >
            <a href="https://entregable4christiansilva.netlify.app/" target="blank"><img src="/imagesport/e4.png" alt="" /></a>
            <h2 className='font-semibold'>Users Management.</h2>
            <a href="https://github.com/christianosilvaf/entregable4.5" target="blank"
                className='text-[10px]'>GitHub Repository.</a>
            
            <div className=' '>
              <h2>Project's aims:</h2>
              <ul className='text-[10px] list-disc px-5'>
                <li>CRUD and HTTP Methods</li>
                <li>React Hook Form (Library) </li>
                <li>Controled Inputs</li>
                <li>Conditional Rendering</li>
                <li>API Consuming</li>
                <li>Js Algorithms Implementation</li>
              </ul>
            </div>
          </div>

          <div className='p-2 h-[100px] rounded-xl   overflow-hidden hover:overflow-visible'
                          >
            <a href="https://entregable5christiansilva.netlify.app/" target="blank"><img src="/imagesport/e5.png" alt="" /></a>
            <h2 className='font-semibold'>Pokedex.</h2>
            <a href="https://github.com/christianosilvaf/entregable5" target="blank"
                className='text-[10px]'>GitHub Repository.</a>
            
            <div className=''>
              <h2>Project's aims:</h2>
              <ul className='text-[10px] list-disc px-5'>
                <li>React Router (Library)</li>
                <li>React Redux (Library) </li>
                <li>Controled Inputs</li>
                <li>Conditional Rendering</li>
                <li>API Consuming</li>
                <li>Js Algorithms Implementation</li>
              </ul>
            </div>
          </div>

          <div className='w-[50px] aspect-square animate-bounce'>
            <img src="/icons/rarrow.svg" alt="" />
          </div>
      </div>

    </section>
  )
}

export default Portfolio