import React, { useState } from 'react'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Aboutme from './Aboutme';

const Home = () => {

    const [handleContact,setHandleContact]=useState(false);

    const handleContactw =() =>{
        setHandleContact(true)
    };

    return (

        <main className='h-screen max-w-sreen bg-mywhite flex gap-2 scroll-smooth'>

            <section className='w-scren p-2 flex flex-col gap-3 items-center justify-center sticky '>

                <div className='h-[200px] aspect-square rounded-full overflow-hidden'>
                    <img src="/profile_picture.jpg" />
                </div>

                <div className=' w-[200px] h-2/3 flex flex-col gap-3 items-center p-2 font-Inter'>

                    <ul className='flex flex-col gap-2 h-1/2 text-myblue '>

                        <li > <a href="#Home" className='flex justify-start items-center gap-2'> <div className='h-[30px] aspect-square'> <img src="/icons/home.svg"/></div> <span> Home </span></a> </li>
                        <li > <a href="#Portfolio" className='flex justify-start items-center gap-2'> <div className='h-[30px] aspect-square'> <img src="/icons/portfolio.svg"/></div> <span> Portfolio </span> </a> </li>
                        <li > <a href="#Aboutme" className='flex justify-start items-center gap-2'> <div className='h-[30px] aspect-square'> <img src="/icons/aboutme.svg"/></div> <span> Aboute Me </span> </a> </li>
                        <li className='flex justify-start items-center gap-2 cursor-pointer' onClick={()=>handleContactw()}> <div className='h-[30px] aspect-square'> <img src="/icons/contact2.svg"/></div> <span> Contact me </span> </li>
                    </ul>

                    <ul className='h-1/4 flex flex-row gap-5 items-center'>
                        <li className=' '> <div className='h-[30px] aspect-square'> <a href="https://www.linkedin.com/in/christian-orlando-silva-forero-1793a922b/" target='blank'> <img src="/icons/linkedin.svg"/> </a> </div>  </li>
                        <li className=''> <div className='h-[35px] aspect-square'> <a href="https://github.com/christianosilvaf" target='blank'> <img src="/icons/github.svg"/></a> </div>   </li>
                    </ul>

                    <ul className='flex flex-row justify-evenly h-1/4 gap-5'>
                        <li className='flex justify-start items-center'> <button className='h-[30px] aspect-square'> <img src="/icons/darkmode.svg"/></button> </li>
                        <li className='flex justify-start items-center'> <button className='h-[37px] aspect-square'> <img src="/icons/language.svg"/></button> </li>
                    </ul>

                </div>

            </section>

            <section id="Home" className=' flex flex-col items-center relative'>
                <div className='font-Syne font-bold my-auto text-[30px]  h-[2500px]
                                text-center flex flex-col gap-2 items-center p-3'>
                    <p> Hi, my name is Christian Silva and I'll be pleased to assist you as a Web Full-Stack Developer! </p>
                    
                    <div>
                        <ul className='flex gap-5 p-5'>
                            <li className='h-[50px] aspect-square'> <img src="/icons/htmllogo.png" /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/jslogo.png"  /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/csslogo.png.png"  /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/Reactlogo.png"  /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/python.png"  /></li>
                        </ul>
                    </div>

                    <div className='flex flex-row items-center gap-2'>
                        <button className='text-myblue'>More Info </button>
                        <div className='h-[30px] aspect-square animate-bounce divide-slate-300 text-sea'> <img src="/icons/downarrow.svg"/></div>
                    </div>

                </div>

                <Portfolio/>

                <Contact handleContact={handleContact} setHandleContact={setHandleContact}/>

                <Aboutme/>
                
            </section>

            

        </main>

    )
}

export default Home