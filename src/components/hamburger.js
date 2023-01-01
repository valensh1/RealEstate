import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { UserContext } from '../App';

function Hamburger() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const hamburgerMenuItems = [
    'Properties',
    'Brokers',
    'Sellers',
    'Buyers',
    'Ten-X Dashboard',
    'Careers',
    'About Us',
    'Help Center',
  ];

  const clicksOutsideHamburger = React.useContext(UserContext);
  console.log(clicksOutsideHamburger);

  // Sets the opening and closing of the hamburger menu
  const hamburgerClick = (event) => {
    if (!isHamburgerMenuOpen) {
      console.log('This is the if block');
      clicksOutsideHamburger.checkHamburgerOpen(true);
    } else {
      console.log('This is the else block');
      clicksOutsideHamburger.checkHamburgerOpen(false);
    }
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <div id="hamburger-container">
      <div id="hamburger-icon" onClick={hamburgerClick}>
        <svg className="svg-icons" id="hidden-svg">
          <AiOutlineClose name="close-icon" />
        </svg>
        <svg className="svg-icons" id="hamburger-svg">
          <GiHamburgerMenu name="hamburger-icon" />
        </svg>
        <div id="hamburger-hidden-container">
          <ul
            id="hamburger-hidden"
            style={{ display: isHamburgerMenuOpen ? 'block' : 'none' }}
          >
            {hamburgerMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href="">{item}</a>
                </li>
              );
            })}

            <li>
              <a href="">
                Contact
                <br />
                888 770-7332
                <br />
                Mon-Fri 9am-8pm ET
              </a>
            </li>
            <li>
              {' '}
              <span>© 2022 CoStar Group</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
