import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function Hamburger() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const hamburgerClick = (event) => {
    console.log('You clicked on the hamburger menu');
    const hiddenHamburgerContent = document.getElementById('hamburger-hidden');
    const hamburgerIcon = document.getElementById('hamburger-svg');
    const closeIcon = document.getElementById('hidden-svg');

    if (!isHamburgerMenuOpen) {
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
