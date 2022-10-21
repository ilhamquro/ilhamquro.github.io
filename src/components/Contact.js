import React, { useRef, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import loadingGif from "../assets/gif/loading.gif"
const Contact = () => {
  const form = useRef();
  const [loading,setLoading] = useState(false)

  const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
  })

  

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm('service_q16is2e', 'template_p0283mw', form.current, 'oujGPAPDrZpi4mlVm')
      .then((result) => {
        setLoading(false)
        Toast.fire({
        icon: "success",
          title: "Send Success",
        text:"Thank for send me email"
        })
        e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact' className='w-full bg-secondary py-20 px-6 md:px-[70px] lg:px-[100px]'>
      <div className="flex items-center gap-2">
          <span className="h-[3px] w-[10px] bg-text"></span>
          <h1 className="text-text">Contact</h1>
      </div>

      <div className='w-full lg:flex'>
        <div className='lg:w-1/2'>
          <h1 className='text-white text-3xl font-bold mt-5'>Get a project? <br /> Let's Talk.</h1>
          <p className='text-text text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div
            className="flex items-center gap-2 mt-4 md:mt-4 lg:mt-6">
            <a href="mailto:muhammadilhamq4@gmail.com" className="text-icon text-sm font-bold">muhammadilhamq4@gmail.com</a>
            <BsArrowRightShort className="text-icon mt-1"/>
              </div>
        </div>

        <div className='mt-8 lg:mt-0 md:w-[400px] lg:w-1/2'>
          <h1 className='text-white text-3xl font-bold'>Estimate your project? <br /> Let me know here.</h1>

          <form action="" className='flex-col flex mt-5' ref={form} onSubmit={sendEmail}>
            <label htmlFor="" className='text-white font-semibold'>What's your name?</label>
            <input type="text" name="user_name" className='outline-none bg-transparent border-b border-b-text text-white px-3' />
            
            <label htmlFor="" className='text-white font-semibold mt-4'>What's your fancy email?</label>
            <input type="email" name="user_email" className='outline-none bg-transparent border-b border-b-text text-white px-3' />
            
            <label htmlFor="" className='text-white font-semibold mt-4'>Tell me about your project</label>
            <textarea name="message" id="" cols="30" rows="10" className='resize-none outline-none bg-transparent border border-text text-white mt-2 h-[150px]'></textarea>

            <div className='flex text-icon w-full mt-3 justify-center'>
              {loading ? (
                <img src={loadingGif} alt="" className='w-[15px] lg:w-[20px]'/>
              ): (
                  <>
                  <input type="submit" value="Send" className='cursor-pointer underline'/>
                  <BsArrowRightShort className='mt-1'/>
                  </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact