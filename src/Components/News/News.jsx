import React, { useState, useEffect, useRef } from 'react';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState(5);
  const apiKey = 'cbc2956d46c847b4a24c6b5a6bddba81';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=UPSC&apiKey=${apiKey}`);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]);
      }
    };

    fetchNews();
  }, [apiKey]);

  const loadMoreNews = () => {
    setDisplayedNews(prevDisplayedNews => prevDisplayedNews + 10);
  };

  const loadLessNews = () => {
    setDisplayedNews(prevDisplayedNews => Math.max(prevDisplayedNews - 10, 5));
  };

  const newsRef = useRef(null);

  return (
    <section className="news-sec" ref={newsRef} id="news">
    <div className='new'>
      <div className='sec1'>
        <h2>Latest News:</h2>
      </div>
      <div className='sec2'>
            <ul>
                {news.slice(0, displayedNews).map((article, index) => (
                <li key={index}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                    </a>
                </li>
                ))}
            </ul>
            {displayedNews < news.length && (
                <div className='but'>
                <button onClick={loadMoreNews}>Read More</button>
                {displayedNews > 5 && (
                    <button className="read-less-button" onClick={loadLessNews}>
                    Read Less
                    </button>
                )}
                </div>
            )}
       </div>
      </div>
    </section>
  );
};

export default News;
