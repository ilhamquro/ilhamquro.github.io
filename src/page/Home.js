import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroPage from '../components/HeroPage'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <section className='font-Mulish overflow-hidden w-full'>
      <HeroPage />
      <About />
      <Portfolio />
      <Contact />
      <Footer/>
    </section>
  )
}

export default Home