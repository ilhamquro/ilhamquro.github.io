import React, { useEffect, useRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import box from "../assets/img/about/box.png"
import { motion, useAnimation, useInView } from "framer-motion";
import monitor from "../assets/img/about/monitor.png"
import pen from "../assets/img/about/pen-tool.png"
const About = () => {
  const emailRef = useRef(null)
  const cardRef = useRef(null)
  const expRef = useRef(null)
  const isInView = useInView(emailRef)
  const isCardView = useInView(cardRef)
  const isExpView = useInView(expRef)
  const animation = useAnimation()
  const animateCard = useAnimation()
  const animateExp = useAnimation()
  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: [0, 1],
        y:[50,0]
      })
    }
    if (!isInView) {
      animation.start({
        opacity: [1, 0],
        y: [0, 50]
      })
    }
  }, [isInView])
  
  useEffect(() => {
    if (isExpView) {
      animateExp.start({
        opacity: [0, 1],
        y:[50,0]
      })
    }
    if (!isExpView) {
      animateExp.start({
        opacity: [1, 0],
        y: [0, 50]
      })
    }
  }, [isExpView])

  useEffect(() => {
    if (isCardView) {
      animateCard.start({
        opacity: [0, 1],
        y:[50,0]
      })
    }
    if (!isCardView) {
      animateCard.start({
        opacity: [1, 0],
        y: [0, 50]
      })
    }
  },[isCardView])
  return (
    <div id="about" className="h-[638px] w-full bg-secondary relative">
      <div className="w-full h-full pt-[50px] px-6 lg:px-[100px]">
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-[10px] bg-text"></span>
            <h1 className="text-text">About me</h1>
        </div>
        <div className="w-full mt-3 md:mt-0 md:flex md:h-[400px] md:py-10">
          <div className="md:w-1/2 md:h-full md:flex md:flex-col">
            <h1 className="text-white font-bold text-3xl">Freelancer ,Designer.</h1>
            <p className="text-text mt-3 text-sm md:text-base md:w-[300px]">
            You can discuss anything related to my services, and you can also contact me via email below.
            </p>
            <motion.div
              ref={emailRef}
              animate={animation}
              transition={{
                delay:0.1
              }}
              className="flex items-center gap-2 mt-4 md:mt-auto">
              <a href="mailto:muhammadilhamq4@gmail.com" className="text-icon text-sm font-bold">muhammadilhamq4@gmail.com</a>
              <BsArrowRightShort className="text-icon mt-1"/>
            </motion.div>
            
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2 md:h-full md:flex md:flex-col">
            <h1 className="text-white font-bold text-2xl">"You can't use up creativity, the more you use, more you have in your signifant mind."</h1>
            <p className="text-text text-sm md:text-base mt-3">Good designers rarely make good advertising, because they see things in terms of the beauty of the image - and forget about the thing to sell.</p>

            <div ref={expRef} className="w-full h-[60px] items-center flex mt-8 justify-evenly md:mt-auto md:items-end">
              <motion.div
                animate={animateExp}
              transition={{
                delay:0.2
              }}
                className="flex gap-2 items-end">
                <h1 className="text-icon text-4xl font-bold">2</h1>
                <p className="text-white font-bold">Years of Experient</p>
              </motion.div>

              <motion.div
                animate={animateExp}
              transition={{
                delay:0.3
              }}
                className="flex gap-2 items-end">
                <h1 className="text-icon text-4xl font-bold">3+</h1>
                <p className="text-white font-bold">Clients</p>
              </motion.div>
            </div>
          </div>
        </div>
          
      </div>

      <div  className="h-[230px] w-full absolute -bottom-[115px] items-center flex px-[20px] justify-between lg:px-[170px]">
        
        <motion.div
          ref={cardRef}
          animate={animateCard}
          transition={{
            delay:0.2
          }}
          className="w-[114px] h-[130px] md:w-[200px] lg:h-[200px] bg-icon flex items-center justify-evenly">
          <div className="flex items-center justify-center">
            <img src={box} alt="" className="w-[25px]"/>
          </div>
          <div className="text-start">
            <h1 className="text-xs text-white font-semibold">Product <br /> designer</h1>
            <p className="text-xs text-white">3+ Project</p>
          </div>
        </motion.div>

        <motion.div
          animate={animateCard}
          transition={{
            delay:0.3
          }}
          className="w-[114px] h-[130px] md:w-[200px] lg:h-[200px] bg-slate-500 flex items-center justify-evenly">
          <div className="flex items-center justify-center">
            <img src={pen} alt="" className="w-[25px]"/>
          </div>
          <div className="text-start">
            <h1 className="text-xs text-white font-semibold">Logo <br /> designer</h1>
            <p className="text-xs text-white">3+ Project</p>
          </div>
        </motion.div>

        <motion.div
          animate={animateCard}
          transition={{
            delay:0.4
          }}
          className="w-[114px] h-[130px] md:w-[200px] lg:h-[200px] bg-slate-500 flex items-center justify-evenly">
          <div className="flex items-center justify-center">
            <img src={monitor} alt="" className="w-[25px]"/>
          </div>
          <div className="text-start">
            <h1 className="text-xs text-white font-semibold">Design <br /> Experient</h1>
            <p className="text-xs text-white">2+ Years</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
