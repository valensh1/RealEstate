import React from 'react';
import Navbar from '../components/navbar';
import HeroSearch from '../components/heroSearch';

function home() {
  const mainLine1 = 'THE SMARTER, FASTER, BETTER way';
  const mainLine2 = 'to transact commercial real estate';

  return (
    <div id="home-container">
      <div className="background-photo">
        <Navbar />
        <HeroSearch />
      </div>
      <div className="main-line-container">
        <h1 className="main-line" id="line1">
          {mainLine1}
        </h1>
        <h1 className="main-line" id="line2">
          {mainLine2}
        </h1>
      </div>
    </div>
  );
}

export default home;
