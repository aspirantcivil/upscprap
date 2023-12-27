import React from 'react'
import "./Paper.css";
const Paper = () => {
  return (
    <div>
         <section className="sec"id="papers">
            <div class="practice-info">
                <h2>Welcome to Our Practice Zone</h2>
                <p>Enhance your skills and assess your knowledge with our extensive</p><p>collection of previous UPSC question papers.</p>
                <p>To access and download question papers covering various topics from the UPSC site, simply click the button below:</p>
                <a href="https://upsc.gov.in/examinations/previous-question-papers" class="btn">Access Question Papers</a>
            </div>
        </section>
    </div>
  )
}

export default Paper