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

        <main className='h-screen flex gap-0 scroll-smooth bg-darkgreen'>

            <section className='h-screen  p-2 flex flex-col gap-3 items-center justify-center fixed top-0 max-[400px]:w-[100px] max-[400px]:h-screen max-[400px]:fixed text-palegreen'>

                <div className='h-[200px] aspect-square rounded-full overflow-hidden max-[400px]:h-[45px]'>
                    <img src="/profile_picture.jpg" />
                </div>

                <div className=' w-[200px] h-3/4 flex flex-col gap-3 items-center p-2 font-Inter max-[400px]:w-[100px]'>

                    <ul className='flex flex-col gap-4 h-1/2 text-myblue max-[400px]:gap-5  justify-center  '>

                        <li > <a href="#Home" className='flex justify-start items-center gap-2 hover:shadow-inner p-1 rounded-md'> <div className='h-[30px] aspect-square'> <img src="/icons/home.svg"/></div> <span className='max-[400px]:hidden'> Home </span></a> </li>
                        <li > <a href="#Portfolio" className='flex justify-start items-center gap-2 hover:shadow-inner p-1 rounded-md'> <div className='h-[30px] aspect-square'> <img src="/icons/portfolio.svg"/></div> <span className='max-[400px]:hidden'> Portfolio </span> </a> </li>
                        <li > <a href="#Aboutme" className='flex justify-start items-center gap-2 hover:shadow-inner p-1 rounded-md'> <div className='h-[30px] aspect-square'> <img src="/icons/aboutme.svg"/></div> <span className='max-[400px]:hidden'> Aboute Me </span> </a> </li>
                        <li className='flex justify-start items-center gap-2 cursor-pointer hover:shadow-inner p-1 rounded-md' onClick={()=>handleContactw()}> <div className='h-[30px] aspect-square'> <img src="/icons/contact2.svg"/></div> <span className='max-[400px]:hidden'> Contact me </span> </li>
                    </ul>

                    <ul className='h-1/4 flex flex-row gap-5 items-center max-[400px]:flex-col max-[400px]:mt-10'>
                        <li className=' '> <div className='h-[30px] aspect-square'> <a href="https://www.linkedin.com/in/christian-orlando-silva-forero-1793a922b/" target='blank'> <img src="/icons/linkedin.svg"/> </a> </div>  </li>
                        <li className=''> <div className='h-[35px] aspect-square'> <a href="https://github.com/christianosilvaf" target='blank'> <img src="/icons/github.svg"/></a> </div>   </li>
                    </ul>

                    <ul className='flex flex-row justify-evenly h-1/4 gap-5 max-[400px]:flex-col max-[400px]:my-10'>
                        <li className='flex justify-start items-center'> <button className='h-[30px] aspect-square'> <img src="/icons/darkmode.svg"/></button> </li>
                        <li className='flex justify-start items-center'> <button className='h-[37px] max-[400px]:h-[27px] aspect-square mx-autok'> <img src="/icons/language.svg"/></button> </li>
                    </ul>

                </div>

            </section>
            
            <article className='flex flex-col gap-5 ml-[250px] mt-[200px] max-[400px]:w-screen max-[400px]:ml-[100px] max-[400px]:min-w-[200px]'>
                

                <section id="Home" className=' flex flex-col items-center gap-10 scroll-pe-*'>
                <div className='font-Syne font-bold p-10 text-[40px] mx-10 h-[600px]
                                text-center flex flex-col gap-2 items-center justify-between'>
                    <p className='text-palegreen'> Hi, my name is Christian Silva and I'll be pleased to be your Web Full-Stack Developer! </p>
                    
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
                        <button className='text-palegreen text-[30px]'>Check Out Below </button>
                        <div className='h-[30px] aspect-square animate-bounce divide-slate-300 text-sea'> <img src="/icons/downarrow.svg"/></div>
                    </div>

                </div>
                
                </section>

                <Portfolio/>

                <Contact handleContact={handleContact} setHandleContact={setHandleContact}/>

                <Aboutme/>

            </article>

        </main>

    )
}

export default Home