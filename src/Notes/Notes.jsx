import React from 'react';
import './Notes.css';

import s1 from '../Pdf/Ncert/old/The_Story_of_Civilization_I.pdf';
import s2 from '../Pdf/Ncert/old/The_Story_of_Civilization_II.pdf';
import w from '../Pdf/Ncert/old/world-history.pdf';
import a1 from '../Pdf/Ncert/old/Ancient_India_(Makkhan_Lal).pdf';
import a2 from '../Pdf/Ncert/old/Ancient-India-RS-Sharma.pdf';
import g1 from '../Pdf/Ncert/old/Geography-of-India.pdf'; // Corrected the file name
import m1 from '../Pdf/Ncert/old/History-Modern.pdf';
import m2 from '../Pdf/Ncert/old/Modern-india.pdf';
import art1 from '../Pdf/Ncert/new/Art-and-culture/Art1.pdf';
import art2 from '../Pdf/Ncert/new/Art-and-culture/11th-Art2.pdf'; // Corrected the file name
import art3 from '../Pdf/Ncert/new/Art-and-culture/Art3.pdf';
import so1 from '../Pdf/Ncert/new/Sociology/Sociology1-P1.pdf'; // Corrected the file name
import so2 from '../Pdf/Ncert/new/Sociology/Sociology1-P2.pdf';
import so3 from '../Pdf/Ncert/new/Sociology/Sociology2-P1.pdf'; // Corrected the file name
import so4 from '../Pdf/Ncert/new/Sociology/Sociology2-P2.pdf';
import sci1 from '../Pdf/Ncert/new/Science/Science6.pdf'; // Corrected the file name
import sci2 from '../Pdf/Ncert/new/Science/Science7.pdf'; // Corrected the file name
import sci3 from '../Pdf/Ncert/new/Science/Science8.pdf'; // Corrected the file name
import sci4 from '../Pdf/Ncert/new/Science/Science9.pdf';
import sci5 from '../Pdf/Ncert/new/Science/Science10.pdf';
import p1 from '../Pdf/Ncert/new/Polity/6th-Polity.pdf';
import p2 from '../Pdf/Ncert/new/Polity/7th-Polity.pdf';
import p3 from '../Pdf/Ncert/new/Polity/8th-Polity.pdf';
import p4 from '../Pdf/Ncert/new/Polity/9th-Polity.pdf';
import p5 from '../Pdf/Ncert/new/Polity/10th-Polity.pdf';
import p6 from '../Pdf/Ncert/new/Polity/11th-Polity.pdf';
import p8 from '../Pdf/Ncert/new/Polity/12th-Polity.pdf';
import p7 from '../Pdf/Ncert/new/Polity/11th-Polity-P1.pdf';
import p9 from '../Pdf/Ncert/new/Polity/12th-Polity-P1.pdf';
import E1 from '../Pdf/Ncert/new/Economics/Economics9.pdf';
import E2 from '../Pdf/Ncert/new/Economics/Economics10.pdf';
import E3 from '../Pdf/Ncert/new/Economics/Economics11.pdf';
import E4 from '../Pdf/Ncert/new/Economics/Economics12-P1.pdf';
import E5 from '../Pdf/Ncert/new/Economics/Economics12-P2.pdf';

const Notes = () => {
    return (
    <section className='notes' id="notes">
          <div>
            <p> You can download study materials, practice papers, and more from here. Explore our resources to enhance your preparation and excel in your exams!</p>
              <div className='english-sec'>
                <div className='Ncert-sec'>
                <h4 className='heading'>NCERT OLD BOOKS:</h4>
                    <div className='e-book-old'>
                     <div>
                      <ul className='list'>
                          <li><h4 className='head5'>The Story of Civilization I</h4>
                          <a href={s1} download>Download PDF</a>
                          </li>
                          <li>
                          <h4 className='head5'>The Story of Civilization II</h4>
                          <a href={s2} download>Download PDF</a>
                          </li>
                          <li>
                          <h4 className='head5'>World History</h4>
                          <a href={w} download>Download PDF</a>
                          </li>
                          <li>
                          <h4 className='head5'>Economic Commercial Geography of India</h4>
                          <a href={g1} download>Download PDF</a>
                          </li>
                       </ul>
                       </div>
                       <div>
                        <ul className='list'>
                          <li>
                          <h4 className='head5'>History of Modern India (Bipin Chandra)</h4>
                          <a href={m1} download>Download PDF</a>
                          </li>
                          <li>
                          <h4 className='head5'>Modern India (Bipin Chandra)</h4>
                          <a href={m2} download>Download PDF</a>
                          </li>
                          <li>
                          <h4 className='head5'>Ancient India (Makkhan Lal)</h4>
                          <a href={a1} download>Download PDF</a>
                          </li>
                          <li>
                          <h4 className='head5'>Ancient India (RS Sharma)</h4> 
                          <a href={a2} download>Download PDF</a>
                          </li>
                      </ul>
                      </div>
                    </div>


                    <div className='e-book'>
                      <h3 className='heading'>NCERT NEW BOOKS:</h3>
                      <div className='e-book-new'>
                       <div className='new-book'>
                          <h4 className='category'> Art and Culture</h4>
                            <ul>
                               <li>
                                <h4>Art and Culture</h4>
                                <a href={art1} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>11th Art and Culture</h4>
                                <a href={art2} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>12th Art and Culture</h4>
                                <a href={art3} download>Download PDF</a>
                               </li>
                            </ul>
                       </div>
                       <div className='new-book'>
                       <h4 className='category'>Economics</h4>
                            <ul>
                               <li>
                                <h4>9th Economics</h4>
                                <a href={E1} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>10th Economics</h4>
                                <a href={E2} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>11th Economics</h4>
                                <a href={E3} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>12th Economics I</h4>
                                <a href={E4} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>12th Economics II</h4>
                                <a href={E5} download>Download PDF</a>
                               </li>
                            </ul>
                            
                       </div>
                       <div className='new-book'>
                       <h4 className='category'>Polity</h4>
                       <ul>
                               <li>
                                <h4>6th Polity</h4>
                                <a href={p1} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>7th Polity</h4>
                                <a href={p2} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>8th Polity</h4>
                                <a href={p3} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>9th Polity</h4>
                                <a href={p4} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>10th Polity</h4>
                                <a href={p5} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>11th Polity I</h4>
                                <a href={p6} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>11th Polity II</h4>
                                <a href={p7} download>Download PDF</a>
                               </li> <li>
                                <h4>12th Polity</h4>
                                <a href={p8} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>12th Polity II</h4>
                                <a href={p9} download>Download PDF</a>
                               </li>
                            </ul>
                       </div>
                       <div className='new-book'>
                       <h4 className='category'> Science</h4>
                       <ul>
                               <li>
                                <h4>6th Science</h4>
                                <a href={sci1} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>7th Science</h4>
                                <a href={sci2} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>8th Science</h4>
                                <a href={sci3} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>9th Science</h4>
                                <a href={sci4} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>10th Science</h4>
                                <a href={sci5} download>Download PDF</a>
                               </li>
                            </ul>
                       </div>
                       <div className='new-book'>
                       <h4 className='category'> Sociology</h4>
                       <ul>
                               <li>
                                <h4>11th Sociology I</h4>
                                <a href={so1} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>11th Sociology II</h4>
                                <a href={so2} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>12th Sociology I</h4>
                                <a href={so3} download>Download PDF</a>
                               </li>
                               <li>
                                <h4>12th Sociology II</h4>
                                <a href={so4} download>Download PDF</a>
                               </li>
                            </ul>
                       </div>
                    </div>
                    </div>
                </div>
              </div>
              
          </div>
        </section>
  )
}

export default Notes;
