import React from 'react';
// import { BiDownArrow } from 'react-icons/bi'; // Other one that Ten-X uses except it's not colored in
import { TbArrowBigDown } from 'react-icons/tb';
import TenXLogo from './TenXLogo';

function Navbar() {
  const navbarLinks = ['Properties', 'Brokers', 'Sellers', 'Buyers'];
  const myProfileLink = ['My Profile'];
  const myProfileSelling = ['Marketing Center'];
  const myProfileBuying = [
    'Buyer Dashboard',
    'Saved Searches',
    'Saved Listings',
  ];
  const myProfileAccount = [
    'Account Information',
    'Communication Settings',
    'Change Password',
  ];
  const logOut = ['Logout'];

  return (
    <nav>
      <TenXLogo />
      <ul>
        {navbarLinks.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
        <div className="navbar-dropdown">
          <li>My Profile</li>
          <TbArrowBigDown />
          <div className="navbar-dropdown-content">
            <div id="navbar-dropdown-selling">
              <p>SELLING</p>
              {myProfileSelling.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="">{link}</a>
                  </li>
                );
              })}
              <hr />
            </div>
            <div id="navbar-drowdown-buying">
              <p>BUYING</p>
              {myProfileBuying.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="">{link}</a>
                  </li>
                );
              })}
              <hr />
            </div>
            <div id="navbar-dropdown-account">
              <p>ACCOUNT</p>
              {myProfileAccount.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="">{link}</a>
                  </li>
                );
              })}
              <hr />
              {
                <li>
                  <a href="">{logOut}</a>
                </li>
              }
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
