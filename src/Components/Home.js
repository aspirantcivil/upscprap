import React, { useState, useEffect, useRef } from 'react';
import PreparationImage from '../image/Preparation.png';
import './Home.css';
import Note from '../Notes/Notes';
import Handwritten from '../Notes/Handwritten';

const Home = () => {
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState(5);
  const [loading, setLoading] = useState(true);
  const apiKey = 'cbc2956d46c847b4a24c6b5a6bddba81';

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=UPSC&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setNews([]);
        setLoading(false);
      });
  }, [apiKey]);

  const loadMoreNews = () => {
    setDisplayedNews(displayedNews + 10);
  };

  const loadLessNews = () => {
    setDisplayedNews(displayedNews - 10);
  };

  const newsRef = useRef(null);
  const notesRef = useRef(null);
  const papersRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Component">
      <div>
        {/* Header section */}
        <header className="header-sec">
          <div>
            <img src={PreparationImage} alt="Preparation" className="img" />
          </div>
          <div>
            <h1>Civil Exam Prep</h1>
          </div>
        </header>

        {/* Navigation section */}
        <nav className="nav-sec">
          <ul>
            <li onClick={() => scrollToSection(newsRef)}>News</li>
            <li onClick={() => scrollToSection(notesRef)}>Notes</li>
            <li onClick={() => scrollToSection(papersRef)}>Papers</li>
          </ul>
        </nav>

        {/* Quote section */}
        <section className="main-sec">
          <div className="quote">
            <p>"Stay determined, study hard, and let your UPSC journey be the road to your dreams."</p>
          </div>
        </section>

        {/* News section */}
        <section className="news-sec" ref={newsRef}>
          <h2>Latest News:</h2>
          {loading ? (
            <p>Loading news...</p>
          ) : (
            <ul>
              {news.slice(0, displayedNews).map((article, index) => (
                <li key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {displayedNews < news.length ? (
            <div>
              <button onClick={loadMoreNews}>Read More</button>
              {displayedNews > 5 && (
                <button className="read-less-button" onClick={loadLessNews}>
                  Read Less
                </button>
              )}
            </div>
          ) : null}
        </section>
        <section className="notes" ref={notesRef}>
          <Note />
          <Handwritten />
        </section>
        <section className="sec" ref={papersRef}>
          <div class="practice-info">
            <h2>Welcome to Our Practice Zone</h2>
            <p>Enhance your skills and assess your knowledge with our extensive collection of previous UPSC question papers.</p>
            <p>To access and download question papers covering various topics from the UPSC site, simply click the button below:</p>
            <a href="https://upsc.gov.in/examinations/previous-question-papers" class="btn">Access Question Papers</a>
          </div>
        </section>
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
    </div>
  );
};

export default Home;
