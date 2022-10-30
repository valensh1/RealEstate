import React from 'react';
import { AiOutlineSearch, AiOutlineArrowRight } from 'react-icons/ai';

function HeroSearch() {
  const btnClick = () => {
    console.log('You clicked me IDIOT!!!');
  };

  return (
    <div id="hero-search">
      <div id="hero-search-content">
        <svg className="react-icon" id="search-icon">
          <AiOutlineSearch />
        </svg>
        <input type="text" placeholder="Search City, State, Zip, or Address" />
        <div id="hero-search-menu-btn">
          <div id="dropdown">
            <select name="property-types" id="property-types">
              <option>ALL PROPERTY TYPES</option>
              <option value="Office">Office</option>
              <option value="Multifamily">Multifamily</option>
              <option value="Retail">Retail</option>
              <option value="Hotel">Hotel</option>
              <option value="Industrial">Industrial</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button onClick={btnClick} id="search-button">
            SEARCH
            <svg className="react-icon" id="right-arrow">
              <AiOutlineArrowRight />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
