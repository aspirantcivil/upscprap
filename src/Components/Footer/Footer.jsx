import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div id="contact">
        <footer className='footer'>
            <div className="footer-content">
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
                <p>Email: civilaspirant1428@gmail.com</p>
                <p>Phone: 8218177749</p>
            </div>
            <div className="social-links">
                <h3>Follow Us</h3>
                <p>Stay connected with us on social media for updates and announcements.</p>
                <a href="https://www.facebook.com/profile.php?id=61552646167412" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/upscnotes28/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            </div>
            <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Civil Exam Prep</p>
            </div>
     </footer>
    </div>
  )
}

export default Footer