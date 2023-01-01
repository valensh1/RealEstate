import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import React from 'react';
import { UserContext } from '../App';

function Hamburger() {
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

  // Passing of Context from Parent Component (e.g. App.js) to be used by Child Component (e.g. Hamburger.js); Each time context is passed it forces re-render for Child Component
  const hamburger = React.useContext(UserContext).hamburgerMenu;
  console.log(hamburger);

  return (
    <div id="hamburger-container">
      <div id="hamburger-icon">
        <svg className="svg-icons" id="hidden-svg">
          <AiOutlineClose name="close-icon" />
        </svg>
        <svg className="svg-icons" id="hamburger-svg">
          <GiHamburgerMenu name="hamburger-icon" />
        </svg>
        <div id="hamburger-hidden-container">
          <ul
            id="hamburger-hidden"
            style={{
              display: hamburger ? 'block' : 'none',
            }}
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
