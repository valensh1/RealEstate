import React from 'react';
import { AiOutlineSearch, AiOutlineArrowRight } from 'react-icons/ai';

function HeroSearch() {
  const propertyTypes = [
    'Office',
    'Multifamily',
    'Retail',
    'Hotel',
    'Industrial',
    'Other',
  ];

  const searchBtnClick = () => {
    console.log('You clicked me!!!');
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
              {propertyTypes.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          <button onClick={searchBtnClick} id="search-button">
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
