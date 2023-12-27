import React from 'react';
import './Handwritten.css'
import c1 from '../Pdf/Handwritten/CSAT-1.pdf';
import c2 from '../Pdf/Handwritten/CSAT-2.pdf';
import c3 from '../Pdf/Handwritten/CSAT-3.pdf';
import g1 from '../Pdf/Handwritten/GS1-P1.pdf';
import g2 from '../Pdf/Handwritten/GS1-P2.pdf';
import g3 from '../Pdf/Handwritten/GS1-P3.pdf';
import g4 from '../Pdf/Handwritten/GS1-P4.pdf';
import g21 from '../Pdf/Handwritten/GS2-P1.pdf';
import g22 from '../Pdf/Handwritten/GS2-P2.pdf';
import g23 from '../Pdf/Handwritten/GS2-P3.pdf';
import g31 from '../Pdf/Handwritten/GS3-P1.pdf';
import eassy from '../Pdf/Handwritten/Essay-Samples.pdf';

const Handwritten = () => {
  return (
    <div className='container'>
       <h3>Handwritten notes are available here</h3> 
       <div className='handwritten'>
       <div>
            <ul>
                <li>
                    <h4>CSAT I</h4>
                    <a href ={c1} download>Download PDF</a>
                </li>
                <li>
                    <h4>CSAT II</h4>
                    <a href ={c2} download>Download PDF</a>
                </li>
            </ul>
      </div>
      <div>
            <ul>
                <li>
                    <h4>CSAT III</h4>
                    <a href ={c3} download>Download PDF</a>
                </li>
                <li>
                    <h4>GS1 I</h4>
                    <a href ={g1} download>Download PDF</a>
                </li>
            </ul>
      </div>
      <div>
            <ul>
                <li>
                    <h4>GS1 II</h4>
                    <a href ={g2} download>Download PDF</a>
                </li>
                <li>
                    <h4>GS1 III</h4>
                    <a href ={g3} download>Download PDF</a>
                </li>
            </ul>
        </div>
        <div>
         <ul>
            <li>
                <h4>GS1 IV</h4>
                <a href ={g4} download>Download PDF</a>
            </li>
            <li>
                <h4>GS2 I</h4>
                <a href ={g21} download>Download PDF</a>
            </li>
         </ul>
         </div>
         <div>
            <ul>
                <li>
                    <h4>GS2 II</h4>
                    <a href ={g22} download>Download PDF</a>
                </li>
                <li>
                    <h4>GS2 III</h4>
                    <a href ={g23} download>Download PDF</a>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <h4>GS3 I</h4>
                    <a href ={g31} download>Download PDF</a>
                </li>
                <li>
                    <h4>Essay Samples</h4>
                    <a href ={eassy} download>Download PDF</a>
                </li>
        </ul>
       </div>
       </div>
    </div>
  )
}

export default Handwritten