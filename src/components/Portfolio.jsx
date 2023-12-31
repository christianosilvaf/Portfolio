import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {

  const [n, setn] = useState(0);
  const [nr, setnr] = useState(1);
  const [nl, setnl] = useState(5);

  const info_projects=[    
    ["https://ecommercebychristiansilva.netlify.app/",
                "/imagesport/e0.png",
                "E-commerce",
                "https://github.com/christianosilvaf/proyectofinalecommerce",
                "GitHub Repository", 
                "React Router (Library)",
                "React Redux (Library)",
                "Controled Inputs",
                "Conditional Rendering",
                "API Consuming",
                "Js Algorithms Implementation"                
              ],
    ["https://entregable1christiansilva.netlify.app/",
              "/imagesport/e1.png",
              "Random Space Quotes",
              "https://github.com/christianosilvaf/entregable2",
              "GitHub Repository", 
              "React Components",
              "React Hook:useState",
              "Controled Inputs",
              "Props usage",
              "Js Algorithms Implementation",
              ""                
            ],

    ["https://entregable2christiansilva.netlify.app/",
            "/imagesport/e2.png",
            "Weather Info",
            "https://github.com/christianosilvaf/entregable2",
            "GitHub Repository", 
            "React Components",
            "React Hook:useState and useEffect",
            "Props usage",
            "API Consuming",
            "Js Algorithms Implementation",
            ""                
          ],

    ["https://entregable3christiansilva.netlify.app/",
            "/imagesport/e3.png",
            "Rick and Morty's API Info",
            "https://github.com/christianosilvaf/entregable3",
            "GitHub Repository", 
            "React Components",
            "React Hook:useState and useEffect",
            "Props usage",
            "API Consuming",
            "Js Algorithms Implementation",
            ""                
          ],

    ["https://entregable4christiansilva.netlify.app/",
            "/imagesport/e4.png",
            "Users Management",
            "https://github.com/christianosilvaf/entregable4.5",
            "GitHub Repository", 
            "CRUD and HTTP Methods",
            "React Hook Form (Library)",
            "Controled Inputs",
            "Conditional Rendering",
            "API Consuming",
            "Js Algorithms Implementation"                
          ],

    ["https://entregable5christiansilva.netlify.app/",
            "/imagesport/e5.png",
            "Pokedex",
            "https://github.com/christianosilvaf/entregable5",
            "GitHub Repository", 
            "React Router (Library)",
            "React Redux (Library)",
            "Controled Inputs",
            "Conditional Rendering",
            "API Consuming",
            "Js Algorithms Implementation"                
          ],
        ];


  const moving_project_management_left = () =>{
    setn((prevState)=> {
      if(prevState-1>=0){ return (prevState-1)%6}
      return 6-(-(prevState-1)%6)
    })
    setnl((prevState)=> {
      if(prevState-1>=0){ return (prevState-1)%6}
      return 6-(-(prevState-1)%6)
    })
    setnr((prevState)=> {
      if(prevState-1>=0){ return (prevState-1)%6}
      return 6-(-(prevState-1)%6)
    })
  };

  const moving_project_management_right=()=>{
    setn((prevState)=> (prevState+1)%6)
    setnl((prevState)=>((prevState+1)%6))
    setnr((prevState)=>((prevState+1)%6))
  };


  return (
    <section id="Portfolio" className='font-Inter  flex flex-col gap-4 mb-[100px] '>
      <h2 className='font-Syne text-[30px] font-bold p-2 text-palegreen'>These are my products: </h2>

      <div className='flex items-center gap-5 w-1/1'>
          <button onClick={moving_project_management_left} className='w-[6.5%] aspect-square animate-bounce'>
            <img src="/icons/larrow.svg" alt="" />
          </button>

          <div className='w-[87%] flex gap-3 items-start max-[800px]:justify-center'>

          <div className='w-1/3 h-[250px] rounded-2xl backdrop-blur-sm overflow-hidden hover:overflow-visible 
                            hover:scale-[115%] transition-transform duration-300 hover:h-[150%]
                            max-[800px]:hidden p-1 hover:border-[5px] hover:border-bluemarin shadow-[inset_0_35px_60px_-15px_rgba(19,45,70,1)]'>
              <a href={`${info_projects[nl][0]}`} target="blank"><img className='p-1 overflow-hidden rounded-xl' src={`${info_projects[nl][1]}`} alt="" /></a>
              
              <div className='p-3'>
                <h2 className='font-semibold text-palegreen'> {`${info_projects[nl][2]}`} </h2>
                <a href={`${info_projects[nl][3]}`} target="blank"
                  className='text-[10px] p-1 text-gray'>GitHub Repository.</a>
              </div>
              
              <div className='flex flex-col text-gray'>
                <h2>Project's aims:</h2>
                <ul className='text-[10px] list-disc px-5 '>
                  <li>{`${info_projects[nl][4]}`}</li>
                  <li>{`${info_projects[nl][5]}`}</li>
                  <li>{`${info_projects[nl][6]}`}</li>
                  <li>{`${info_projects[nl][7]}`}</li>
                  <li>{`${info_projects[nl][8]}`}</li>
                  <li>{`${info_projects[nl][9]}`}</li>
                </ul>
              </div>
            </div>

            <div className='w-1/3 h-[250px] rounded-2xl backdrop-blur-sm overflow-hidden hover:overflow-visible 
                            hover:scale-[115%] transition-transform duration-300 hover:h-[150%]
                            max-[800px]:w-[90%] p-1 hover:border-[5px] hover:border-bluemarin shadow-[inset_0_35px_60px_-15px_rgba(19,45,70,1)] '>
              <a href={`${info_projects[n][0]}`} target="blank"><img className='p-1 overflow-hidden rounded-xl ' src={`${info_projects[n][1]}`} alt="" /></a>
              
              <div className='p-3'>
                <h2 className='font-semibold text-palegreen'> {`${info_projects[n][2]}`} </h2>
                <a href={`${info_projects[n][3]}`} target="blank"
                  className='text-[10px] p-1 text-gray'>GitHub Repository.</a>
              </div>
              
              <div className='flex flex-col  text-gray'>
                <h2>Project's aims:</h2>
                <ul className='text-[10px] list-disc px-5 '>
                  <li>{`${info_projects[n][4]}`}</li>
                  <li>{`${info_projects[n][5]}`}</li>
                  <li>{`${info_projects[n][6]}`}</li>
                  <li>{`${info_projects[n][7]}`}</li>
                  <li>{`${info_projects[n][8]}`}</li>
                  <li>{`${info_projects[n][9]}`}</li>
                </ul>
              </div>
            </div>

            <div className='w-1/3 h-[250px] rounded-2xl backdrop-blur-sm overflow-hidden hover:overflow-visible 
                            hover:scale-[115%] transition-transform duration-300 hover:h-[150%]
                            max-[800px]:hidden p-1 hover:border-[5px] hover:border-bluemarin shadow-[inset_0_35px_60px_-15px_rgba(19,45,70,1)]' >
              <a href={`${info_projects[nr][0]}`} target="blank"><img className='p-1 overflow-hidden rounded-xl' src={`${info_projects[nr][1]}`} alt="" /></a>
              
              <div className='p-3'>
                <h2 className='font-semibold text-palegreen '> {`${info_projects[nr][2]}`} </h2>
                <a href={`${info_projects[nr][3]}`} target="blank"
                  className='text-[10px] p-1 text-gray'>GitHub Repository.</a>
              </div>
              
              <div className='flex flex-col text-gray'>
                <h2>Project's aims:</h2>
                <ul className='text-[10px] list-disc px-5 '>
                  <li>{`${info_projects[nr][4]}`}</li>
                  <li>{`${info_projects[nr][5]}`}</li>
                  <li>{`${info_projects[nr][6]}`}</li>
                  <li>{`${info_projects[nr][7]}`}</li>
                  <li>{`${info_projects[nr][8]}`}</li>
                  <li>{`${info_projects[nr][9]}`}</li>
                </ul>
              </div>
            </div>

            

            
          </div>

          <button onClick={moving_project_management_right} className='w-[6.5%] aspect-square animate-bounce '>
            <img src="/icons/rarrow.svg" alt="" />
          </button>

      </div>

    </section>
  )
}

export default Portfolio