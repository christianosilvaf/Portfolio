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

        <main className='h-screen flex gap-0 scroll-smooth'>

            <section className='h-screen min-h-[400px] w-[300px] p-2 flex flex-col gap-3 items-center justify-center  sticky top-0 max-[320px]:w-[50px]'>

                <div className='h-[200px] aspect-square rounded-full overflow-hidden max-[320px]:h-[50px]'>
                    <img src="/profile_picture.jpg" />
                </div>

                <div className=' w-[200px] h-3/4 flex flex-col gap-3 items-center p-2 font-Inter max-[320px]:w-[50px]'>

                    <ul className='flex flex-col gap-4 h-1/2 text-myblue max-[320px]:gap-5  justify-center  '>

                        <li > <a href="#Home" className='flex justify-start items-center gap-2'> <div className='h-[30px] aspect-square'> <img src="/icons/home.svg"/></div> <span className='max-[320px]:hidden'> Home </span></a> </li>
                        <li > <a href="#Portfolio" className='flex justify-start items-center gap-2'> <div className='h-[30px] aspect-square'> <img src="/icons/portfolio.svg"/></div> <span className='max-[320px]:hidden'> Portfolio </span> </a> </li>
                        <li > <a href="#Aboutme" className='flex justify-start items-center gap-2'> <div className='h-[30px] aspect-square'> <img src="/icons/aboutme.svg"/></div> <span className='max-[320px]:hidden'> Aboute Me </span> </a> </li>
                        <li className='flex justify-start items-center gap-2 cursor-pointer' onClick={()=>handleContactw()}> <div className='h-[30px] aspect-square'> <img src="/icons/contact2.svg"/></div> <span className='max-[320px]:hidden'> Contact me </span> </li>
                    </ul>

                    <ul className='h-1/4 flex flex-row gap-5 items-center max-[320px]:flex-col'>
                        <li className=' '> <div className='h-[30px] aspect-square'> <a href="https://www.linkedin.com/in/christian-orlando-silva-forero-1793a922b/" target='blank'> <img src="/icons/linkedin.svg"/> </a> </div>  </li>
                        <li className=''> <div className='h-[35px] aspect-square'> <a href="https://github.com/christianosilvaf" target='blank'> <img src="/icons/github.svg"/></a> </div>   </li>
                    </ul>

                    <ul className='flex flex-row justify-evenly h-1/4 gap-5 max-[320px]:flex-col max-[320px]:my-10'>
                        <li className='flex justify-start items-center'> <button className='h-[30px] aspect-square'> <img src="/icons/darkmode.svg"/></button> </li>
                        <li className='flex justify-start items-center'> <button className='h-[37px] max-[320px]:h-[27px] aspect-square mx-autok'> <img src="/icons/language.svg"/></button> </li>
                    </ul>

                </div>

            </section>

            <section id="Home" className=' flex flex-col items-center gap-10 scroll-pe-*'>
                <div className='font-Syne font-bold p-10 text-[40px] mx-10 h-[600px]
                                text-center flex flex-col gap-2 items-center'>
                    <p> Hi, my name is Christian Silva and I'll be pleased to be your Web Full-Stack Developer! </p>
                    
                    <div>
                        <ul className='flex gap-5 p-5'>
                            <li className='h-[50px] aspect-square'> <img src="/icons/htmllogo.png" /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/jslogo.png"  /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/csslogo.png.png"  /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/Reactlogo.png"  /></li>
                            <li className='h-[50px] aspect-square'> <img src="/icons/python.png"  /></li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <button className='text-myblue text-[30px]'>Check Out Below </button>
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