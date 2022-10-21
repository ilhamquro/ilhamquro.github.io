import { useAnimation, useInView,motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axa from "../assets/img/portfolio/axa.jpg"
import bumper from "../assets/img/portfolio/bumiper.jpg"
import runner from "../assets/img/portfolio/runner.jpg"

const Portfolio = () => {
  const imgRef = useRef(null)
  const animate = useAnimation()
  const isInView = useInView(imgRef)
  useEffect(() => {
    if (isInView) {
      animate.start({
        opacity: [0, 1],
        y:[50,0]
      })
    }
    if (!isInView) {
      animate.start({
        opacity: [1, 0],
        y: [0, 50]
      })
    }
  },[isInView])
  return (
    <div id='portfolio' className='bg-primary h-auto w-full px-6 overflow-hidden'>
      <div className='pt-[100px] lg:pt-[130px] lg:px-[100px]'>
        <div className="flex items-center gap-2">
          <span className="h-[3px] w-[10px] bg-text"></span>
          <h1 className="text-text">Portfolio</h1>
        </div>
        <div className='mt-5'>
          <h1 className='text-white text-2xl font-bold'>All Creative Works,<br /> Sellected Projects</h1>
          <p className='text-text text-sm mt-3'>These are some of the projects I have completed, want to know more?</p>
          <div className='mt-5 flex text-icon items-center'>
            <Link to="/portfolio-detail" className='underline'>See more</Link>
            <BsArrowRightShort className='mt-1'/>
          </div>
        </div>
      </div>

      <motion.div
        animate={animate}
        transition={{
          type:"spring",
          delay:0.2
        }}
        ref={imgRef} className='w-full flex flex-col gap-7 mt-6 md:px-[70px] lg:px-[100px] lg:flex-row lg:justify-center pb-20'>
        <img
          src={axa}
          alt="sf"
          className='w-[250px] grayscale hover:grayscale-0 transition-all ease-in-out duration-200 shadow-sm shadow-white ml-auto md:w-[300px] lg:w-[200px] lg:ml-0' />
        <img src={bumper} alt="dfd" className='w-[250px] grayscale hover:grayscale-0 shadow-sm shadow-white transition-all ease-in-out duration-200 md:w-[300px] lg:w-[200px] lg:ml-0'/>
        <img src={runner} alt="dfd" className='w-[250px] grayscale hover:grayscale-0 shadow-sm shadow-white transition-all ease-in-out duration-200 ml-auto md:w-[300px] lg:w-[200px] lg:ml-0'/>
      </motion.div>
    </div>
  )
}

export default Portfolio