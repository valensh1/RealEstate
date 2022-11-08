import React from 'react';
import Navbar from '../components/Navbar';
import HeroSearch from '../components/HeroSearch';
import Hamburger from '../components/Hamburger';
import FeaturedProperties from '../components/FeaturedProperties';
import Button from '../components/Button';

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
        <div id="power-of-platform-background"></div>
        <h1>The Power of the Platform</h1>
        <div id="power-of-platform-sections-container">
          <div id="buy-and-sell-faster" className="power-of-platform">
            <h2>Buy & sell faster</h2>
            <p id="buy-and-sell-faster-paragraph">
              Ten-X connects buyers and sellers with a more convenient, faster
              transaction & closing process.
            </p>
            <Button buttonText="GET CONNECTED" buttonLink="" />
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
            <Button buttonText="EXPLORE THE TEN-X DASHBOARD" buttonLink="" />
          </div>

          <div id="more-certainty" className="power-of-platform">
            <h2>Get more certainty</h2>
            <p>
              Investors find better opportunities with Ten-X powerful CRE data
              and exciting online bidding experience.
            </p>
            <Button buttonText="START INVESTING" buttonLink="" />
          </div>
        </div>
      </div>
      <div id="background"></div>
      <div id="platform-to-work-container">
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
              <Button buttonText="CLOSE DEALS FASTER" buttonLink="" />
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
              <Button buttonText="FIND YOUR INVESTMENT" buttonLink="" />
            </div>

            <div id="platform-to-work-sellers" className="platform-to-work">
              <h3>For Sellers</h3>
              <h4>Sell your commercial property and maximize value</h4>
              <p>
                Achieve a successful transaction by reaching the largest buying
                pool in the world. Put the Ten-X platform to work for you,
                ensure a successful sale, and let us help your broker facilitate
                a quick close on your terms.
              </p>
              <Button buttonText="LEARN MORE" buttonLink="" />
            </div>
          </div>
        </div>
      </div>
      <div id="join-thousands-brokers-section">
        <div id="background2"></div>
        <h1>Join the thousands of brokers selling twice as fast on Ten-X !</h1>
        <div id="icons-section">
          <img
            src="https://cre-tenbox.imgix.net/homepage%2Fbrokers%2Fcushman.v1.png?auto=format"
            alt="Cushman & Wakfield icon"
          />
          <img
            src="https://cre-tenbox.imgix.net/homepage%2Fbrokers%2Fnewmark.v1.png?auto=format"
            alt="Newmark Knight Frank icon"
          />
          <img
            src="https://cre-tenbox.imgix.net/homepage%2Fbrokers%2Fcolliers.v1.png?auto=format"
            alt="Colliers International icon"
          />
          <img
            src="https://cre-tenbox.imgix.net/homepage%2Fbrokers%2Fjll.v1.png?auto=format"
            alt="JLL icon"
          />
          <img
            src="https://cre-tenbox.imgix.net/homepage%2Fbrokers%2Fcbre.v1.png?auto=format"
            alt="CBRE icon"
          />
          <img
            src="https://cre-tenbox.imgix.net/homepage%2Fbrokers%2Fkeller-williams.v1.png?auto=format"
            alt="Keller Williams icon"
          />
        </div>
      </div>
      <div id="leading-platform-section">
        <div id="leading-platform-background"></div>
        <h1>The leading platform for trading commercial real estate. </h1>
        <p>
          The boundless opportunity of the nation’s best CRE assets paired with
          the simplicity & security of an online transaction.
        </p>
        <div id="leading-platform-stats-section">
          <div id="leading-platform-stats-page-views">
            <h3>3,500</h3>
            <p id="unique-page-views-ptag">
              UNIQUE PAGE VIEWS PER PROPERTY ON AVERAGE
            </p>
          </div>

          <div id="leading-platform-stats-unique-active-visitors">
            <h3>500,000+</h3>
            <p id="unique-active-investors-ptag">UNIQUE ACTIVE INVESTORS</p>
          </div>

          <div id="leading-platform-stats-properties-sold-60">
            <h3>96%</h3>
            <p id="properties-sold-60-ptag">
              OF PROPERTIES SOLD IN 60 DAYS OR LESS
            </p>
          </div>

          <div id="leading-platform-stats-properties-out-of-state">
            <h3>52%</h3>
            <p id="properties-sold-out-of-state-ptag">
              OF PROPERTIES SOLD TO OUT-OF-STATE BUYERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
