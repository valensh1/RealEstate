import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

function Hamburger() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerClick = (event) => {
    console.log('You clicked on the hamburger menu');
    const hiddenHamburgerContent = document.getElementById('hamburger-hidden');
    if (isHamburgerOpen === false) {
      hiddenHamburgerContent.style.display = 'block';
    } else {
      hiddenHamburgerContent.style.display = 'none';
    }
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div id="hamburger-container">
      <div id="hamburger-icon" onClick={hamburgerClick}>
        <svg>
          <GiHamburgerMenu />
        </svg>
        <div id="hamburger-hidden-container">
          <ul id="hamburger-hidden">
            <li>
              <a href="">Properties</a>
            </li>
            <li>
              <a href="">Brokers</a>
            </li>
            <li>
              <a href="">Sellers</a>
            </li>
            <li>
              <a href="">Buyers</a>
            </li>
            <li>
              <a href="">Ten-X Dashboard</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
