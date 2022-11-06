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

      <div id="power-of-platform">
        <h1>The Power of the Platform</h1>
        <div id="power-of-platform-sections-container">
          <div id="buy-and-sell-faster" className="power-of-platform">
            <h2>Buy & sell faster</h2>
            <p id="buy-and-sell-faster-paragraph">
              Ten-X connects buyers and sellers with a more convenient, faster
              transaction & closing process.
            </p>
            <button>GET CONNECTED</button>
          </div>

          <div id="global-reach" className="power-of-platform">
            <h2>
              Give your property global <br />
              reach
            </h2>
            <p>
              Brokers enjoy faster transactions with powerful tools, data, and
              global connections, all delivered from the dashboard or mobile
              phone.
            </p>
            <button>EXPLORE THE TEN-X DASHBOARD</button>
          </div>

          <div id="more-certainty" className="power-of-platform">
            <h2>Get more certainty</h2>
            <p>
              Investors find better opportunities with Ten-X powerful CRE data
              and exciting online bidding experience.
            </p>
            <button>START INVESTING</button>
          </div>
        </div>
      </div>
      <div id="platform-to-work">
        <h1>Put the Ten-X platform to work for you.</h1>
        <div id="platform-to-work-section">
          <div id="platform-to-work-brokers" className="platform-to-work">
            <h3>For Brokers</h3>
            <h4>Succeed with built-in broker benefits</h4>
            <p>
              Achieve a quick, lucrative close by tapping <br />
              into full-service transaction resources at no <br />
              cost to you. Leverage Ten-X’s end-to-end <br />
              platform and spend more time building
              <br /> relationships.
            </p>
            <button>CLOSE DEALS FASTER</button>
          </div>

          <div id="platform-to-work-buyers" className="platform-to-work">
            <h3>For Buyers</h3>
            <h4>Find new investment opportunities</h4>
            <p>
              Ten-X takes the hassle, stress and uncertainty out of buying
              commercial real estate. As the leading end-to-end transaction
              platform, Ten-X offers buyers access to new opportunities and a
              simplified transaction.
            </p>
            <button>FIND YOUR INVESTMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
