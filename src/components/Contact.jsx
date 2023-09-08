import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

const Contact = ({handleContact,setHandleContact}) => {

    const {handleSubmit,register,reset}=useForm();
    
    const submit=(data) =>{
        emailjs.send('personal_gmail', 'portfolio_contact', data,'p8GUNcw3NH1ORU8R4')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                if(response.text==="OK") reset()
            }, function(error) {
                console.log('FAILED...', error);
            });
    };


return (
    <section className={`bg-mywhite w-[500px] h-screen  p-5 shadow-lg rounded-lg font-Inter top-0 right-0 translate-x-0 fixed transition-all
                        ${handleContact ? "translate-x-0" : "translate-x-[500px]"} transition-transform duration-700 max-[400px]:w-[350px] backdrop-blur-3xl 
                        shadow-[inset_0_35px_60px_-15px_rgba(1,195,141,1)] text-palegreen font-Inter`}>
        <button onClick={()=>setHandleContact(false)} className='ml-[420px] p-2 rounded-md bg-black w-[30px] aspect-square] text-center text-mywhite bg-bluemarin border-2 border-white'>
            X
        </button>
        <div className='text-center my-2 p-2 font-Syne font-bold text-[25px] '>Contact me:</div>
        
        <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-between gap-3 items-center w-[400px] mx-auto' action="">
            <label className='flex justify-between gap-2 w-[300px]' htmlFor="">
                Name:
                <input type="text" id="name" {...register("name")} className=' rounded-md shadow-sm shadow-sea bg-gray text-white p-1' required/>
            </label>

            <label htmlFor="" className='flex justify-between gap-2 w-[300px]'>
                Email:
                <input type="email" id="email" {...register("email")} className=' rounded-md shadow-sm shadow-sea bg-gray text-white p-1' required/>
            </label>

            <label htmlFor="" className='flex justify-between gap-2 w-[300px]'>
                Subject:
                <input type="text" id="subject" {...register("subject")}  className=' rounded-md shadow-sm shadow-sea bg-gray text-white p-1' required/>
            </label>

            <label htmlFor="" className='flex  flex-col justify-between gap-2 w-[300px]'>
                Message:
                <input type="text" id="message" {...register("message")} className='h-[300px] w-[350px] rounded-md shadow-sm shadow-sea text-justify bg-gray text-white p-1' required/>
            </label>

            <input type="submit" value="Submit" {...register("Submit")} className='w-[100px] rounded-lg bg-myblue p-2 mx-auto cursor-pointer bg-bluemarin border-2 border-white' />
        </form>

    </section>
    )
}

export default Contact