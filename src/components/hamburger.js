import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

function Hamburger() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const hiddenHamburgerContent = document.getElementById('hamburger-hidden');
  const hamburgerIcon = document.getElementById('hamburger-svg');
  const closeIcon = document.getElementById('hidden-svg');

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

  const clicks = useContext(UserContext);

  // if (clicks.bodyClick && isHamburgerMenuOpen) {
  //   hiddenHamburgerContent.style.display = 'none';
  //   closeIcon.style.display = 'none';
  //   hamburgerIcon.style.display = 'block';
  // } else if (clicks.bodyClick !== isHamburgerMenuOpen) {
  //   hiddenHamburgerContent.style.display = 'block';
  //   closeIcon.style.display = 'block';
  //   hamburgerIcon.style.display = 'none';
  // }

  const hamburgerClick = (event) => {
    if (!isHamburgerMenuOpen) {
      // clicks.setBodyClick(false);
      hiddenHamburgerContent.style.display = 'block';
      closeIcon.style.display = 'block';
      hamburgerIcon.style.display = 'none';
    } else {
      hiddenHamburgerContent.style.display = 'none';
      closeIcon.style.display = 'none';
      hamburgerIcon.style.display = 'block';
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
          <ul id="hamburger-hidden">
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
