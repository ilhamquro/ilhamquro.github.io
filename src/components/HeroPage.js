import React, { useState } from "react";
import logo from "../assets/img/heroicon.png";
import hero from "../assets/img/hero.png";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
const HeroPage = () => {
  const [dot, setDot] = useState(0);
  const pesan = encodeURIComponent("Halo saya ingin membicarakan desain dengan anda")
  const servisBtn = () => {
    setDot(0);
  };
  const worksBtn = () => {
    setDot(55);
  };
  const blogBtn = () => {
    setDot(120);
  };
  return (
    <div id="intro" className="bg-primary -z-[999]">
      <header className="h-[100px] flex w-full px-5 items-center  lg:px-[100px]">
        <motion.div
          animate={{
            x: [50, 0],
            opacity: [0, 1],
          }}
          className="w-[45px]">
          <img src={logo} alt="" />
        </motion.div>
        <div className="ml-auto relative">
          <ul className="flex gap-3 text-text font-semibold">
            <motion.li
              animate={{
                x: [-50, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.2,
              }}>
              <a href="#intro" className="text-white" onClick={servisBtn}>
                Intro
              </a>
            </motion.li>
            <motion.li
              animate={{
                x: [-50, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.1,
              }}>
              <a
                href="#about"
                className="hover:text-white focus:text-white"
                onClick={worksBtn}>
                About
              </a>
            </motion.li>
            <motion.li
              animate={{
                x: [-50, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0,
              }}>
              <a
                href="#contact"
                className="hover:text-white focus:text-white"
                onClick={blogBtn}>
                Contact
              </a>
            </motion.li>
          </ul>
          <motion.span
            animate={{
              x: [-50, 0],
              opacity: [0, 1],
              translateX: dot,
              transition: {
                delay: 0,
              },
            }}
            className="absolute block h-[5px] w-[5px] bg-icon rounded-full ml-4"></motion.span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row relative h-auto w-full lg:px-[100px]">
        <div className="px-5 text-white font-bold text-5xl lg:text-6xl w-full flex justify-center h-[400px] flex-col z-30">
          <motion.h1
            animate={{
              x: [50, 0],
              opacity: [0, 1],
            }}
            className="w-[300px] uppercase mt-[100px] lg:w-full">
            Muhammad ilham qa
          </motion.h1>
          <motion.span
            animate={{
              x: [50, 0],
              opacity: [0, 1],
            }}
            className="bg-icon h-1 w-8 mt-1 ml-[3px]"></motion.span>
          <div className="w-full flex h-[100px] items-center gap-3 mt-auto">
            <motion.a
              animate={{
                x: [70, 0],
                opacity: [0, 1],
              }}
              target="_blank"
              href="https://www.instagram.com/m.ilham.quro/?hl=id"
              className="text-white hover:text-icon transition-all ease-in-out duration-200">
              <svg
                role="img"
                width={"20px"}
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </motion.a>
            <motion.a
              animate={{
                x: [70, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.2,
                },
              }}
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-ilham-qurro-5021a1254/"
              className="text-white hover:text-icon transition-all ease-in-out duration-200">
              <svg
                role="img"
                className="fill-current"
                width={"20px"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              animate={{
                x: [70, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.3,
                },
              }}
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=6285214992248&text=${pesan}`}
              className="text-white hover:text-icon transition-all ease-in-out duration-200">
              <svg
                role="img"
                width={"20px"}
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.a>
          </div>
        </div>

        <div>
          <motion.img
            animate={{
              opacity: [0, 1],
              y: [60, 0],
            }}
            src={hero}
            alt=""
            className="absolute top-0 z-20 w-[230px] left-1/4 lg:w-[280px] lg:left-1/4  md:left-[100px]"
          />
          <motion.span
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
              transition: {
                delay: 0.3,
              },
            }}
            className="absolute top-0 z-10 w-[300px] left-1/4 md:left-[100px] lg:left-1/4  lg:w-[340px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFC256"
                d="M37.4,-45.6C50.6,-41.9,64.9,-33.8,65.5,-23.3C66.1,-12.8,53.1,0.1,47.1,14.4C41.2,28.7,42.4,44.3,35.7,54.2C29.1,64.1,14.5,68.3,3.1,64.1C-8.4,59.9,-16.8,47.3,-28.4,39C-40,30.7,-54.7,26.6,-66.1,15.8C-77.4,5,-85.3,-12.7,-83.3,-29.7C-81.4,-46.7,-69.5,-63,-54,-65.9C-38.4,-68.7,-19.2,-58.1,-3.5,-53.2C12.1,-48.3,24.2,-49.2,37.4,-45.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>
        </div>

        <div className="h-[300px] px-5 flex w-full items-start flex-col overflow-x-hidden md:justify-end">
          <motion.div
            animate={{
              x: [100, 0],
              opacity: [0, 1],
              transition: {
                delay: 0,
              },
            }}
            className="flex items-center gap-3 text-text">
            <span className="h-[3px] w-[15px] bg-text"></span>
            <h1>Introduction</h1>
          </motion.div>
          <div className="mt-3">
            <motion.h1
              animate={{
                x: [100, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.1,
                },
              }}
              className="text-white text-3xl font-bold w-[300px] md:w-full lg:text-4xl">
              Logo designer and mock up, Stay in Bali
            </motion.h1>
            <motion.p
              animate={{
                x: [100, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.2,
                },
              }}
              className="text-text text-sm mt-4">
              About me I am Muhammad Ilham Q.A. A 19 year old teenager, I have
              an interest in the creative field. I have basic skills in vector
              design, etc., I also have basic cooking skills.
            </motion.p>
            <motion.div
              animate={{
                x: [100, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.3,
                },
              }}
              className="flex items-center text-icon h-[50px] w-full gap-4">
              <a
                href="#portfolio"
                className="underline underline-offset-[3px] decoration-[2px]">
                My Portfolio
              </a>
              <BsArrowRightShort className="mt-1" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
