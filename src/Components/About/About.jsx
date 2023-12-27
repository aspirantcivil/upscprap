import React from 'react'
import img from "../Image/study.png";
import "./About.css";
import "../../Notes/Notes";
const About = () => {
  return (
      <div className='About-Sec' id="About">
          <div className='main'>
            <div className='note'>
                <div className='head'>
                    <h1>Welcome to Civil Exam Prep</h1>          
                     <h1> Your Gateway to Success!</h1>
                </div>
                <div className='para'>
                    <p>Embark on a journey of excellence with Civil Exam Prep,</p>
                    <p>your trusted companion in conquering the challenges of civil service examinations.</p> 
                    <p>We are dedicated to providing a tailored platform to streamline
                     your preparation and boost your chances of success.</p>
                </div>
                <div className='last'>
                   <h3><a href="#notes">Learn More</a></h3>
                </div>
            </div>
            <div className='image'>
                <img src={img} alt='study'/>
            </div>
          </div>
      </div>
  )
}

export default About