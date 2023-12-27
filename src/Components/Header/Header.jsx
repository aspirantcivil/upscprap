import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header-sec'>
      <div className='header-list'>
        <div className='heads'>
            <div>
          <h3><a href="#home">Home</a></h3>
          </div>
          {/* <div>
          <h3><a href="#news">News</a></h3>
          </div> */}
          <div>
          <h3><a href="#notes">Notes</a></h3>
          </div>
          <div>
          <h3><a href="#papers">Papers</a></h3>
        </div>
        </div>
        <div className='underlist'>
          <h3><a href="#contact">Contact</a></h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
