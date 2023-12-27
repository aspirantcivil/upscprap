import React from 'react'
import Header from "../Header/Header";
import About from "../About/About";
import News from "../News/News";
import Handwritten from "../../Notes/Handwritten";
import Notes from "../../Notes/Notes";
import Paper from "../Papers/Paper";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
      <div className='component' id="home">
          <div className='header' id ="header-sec">
              <Header />
          </div>
          <div className='About' id="About-sec">
              <About />
          </div>
          <div className='News' id="News">
            <News />
          </div>
          <div className='notes'>
            <Notes />
            <Handwritten />
          </div>
          <div className='paper'>
            <Paper />
          </div>
          <div className='Footer'>
            <Footer />
          </div>
      </div>
  )
}

export default Home