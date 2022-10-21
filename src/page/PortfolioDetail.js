import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axa from "../assets/img/portfolio/axa.jpg"
import axa2 from "../assets/img/portfolio/axa2.jpg"
import bumper from "../assets/img/portfolio/bumiper.jpg"
import runner from "../assets/img/portfolio/runner.jpg"
import clown2 from "../assets/img/portfolio/clown2.jpg"
import clown3 from "../assets/img/portfolio/clown3.jpg"
import clown4 from "../assets/img/portfolio/clown4.jpg"
import clown5 from "../assets/img/portfolio/clown5.jpg"
import bj from "../assets/img/portfolio/bj.jpg"
import tnd from "../assets/img/portfolio/tnd.jpg"
import nasi from "../assets/img/portfolio/nasi.jpg"
import spal from "../assets/img/portfolio/spal.png"
import { motion } from 'framer-motion'

const PortfolioDetail = () => {
  return (
    <section className='w-full h-auto lg:h-screen bg-secondary overflow-x-hidden'>
      <motion.div
        animate={{
          x:[-50,0]
        }}
        className='w-full h-[40px] flex items-center px-4 lg:pt-9'>
          <Link to="/"><BsArrowLeftShort className='text-icon text-3xl'/></Link>
      </motion.div>
      <motion.div
        animate={{
          x:[50,0]
        }}
        className='w-full py-4'>
        <h1 className='text-center text-icon text-xl font-bold capitalize'>These are all sata's favorite projects</h1>
      </motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition:{
            duration: 0.5,
            delay:0.4
          }
        }}
        className='w-full px-3 mt-2 flex flex-wrap gap-2 justify-center bg-secondary pb-10'>
        <div className='w-[150px] lg:w-[200px] overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={axa} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={axa2} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={bumper} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={runner} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={bj} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={tnd} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={clown2} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={clown3} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={clown4} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={clown5} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={nasi} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
        <div className='w-[150px] lg:w-[200px]  overflow-hidden hover:scale-95 transition-all ease-in-out duration-200 rounded-md group'>
          <img src={spal} alt="" className='group-hover:scale-125 transition-all ease-in-out duration-200 h-full'/>
        </div>
      </motion.div>
      <footer className='w-full h-[30px] bg-primary py-10 flex items-center text-center text-white font-semibold capitalize justify-center'>
        <h1>💛Thank's for see my portfolio💛</h1>
      </footer>
    </section>
  )
}

export default PortfolioDetail