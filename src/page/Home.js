import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import DownloadCV from '../components/DownloadCV'
import Footer from '../components/Footer'
import HeroPage from '../components/HeroPage'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <section className='font-Mulish overflow-hidden w-full relative'>
      <HeroPage />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <DownloadCV/>
    </section>
  )
}

export default Home