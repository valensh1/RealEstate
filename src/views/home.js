import React from 'react';
import Navbar from '../components/Navbar';
import HeroSearch from '../components/HeroSearch';
import Hamburger from '../components/Hamburger';
import FeaturedProperties from '../components/FeaturedProperties';

function Home() {
  const mainLine1 = 'THE SMARTER, FASTER, BETTER way';
  const mainLine2 = 'to transact commercial real estate';

  return (
    <div id="home-container">
      <div className="background-photo">
        <Navbar />
        <Hamburger />
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
      <FeaturedProperties />
    </div>
  );
}

export default Home;
