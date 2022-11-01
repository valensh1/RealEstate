import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function FeaturedProperties() {
  return (
    <div id="featured-properties">
      <div id="featured-heading-section">
        <h1 id="featured-heading">Featured Properties</h1>

        <div id="view-properties-link">
          <a href="">
            <h1>
              <AiOutlineArrowRight />
            </h1>
            <span>VIEW ALL PROPERTIES</span>
          </a>
        </div>
      </div>
      <div
        id="featured-properties-listing-cards-container"
        className="featured-properties-listing-cards-container"
      >
        <div className="featured-properties-single-listing-card listing-cards">
          <div className="featured-properties-listing-card-headings">
            <h5>Online Auction</h5>
            <h5>Oct 31 - Nov 2, 2022</h5>
            <h5 className="property-type">Industrial</h5>
          </div>
          <div>
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/SoFi_Stadium_2021.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="listing-card-bid-price">
            <span>Starting Bid</span>
            <span>$1,800,000</span>
          </div>
          <div className="listing-card-name-address">
            <div className="featured-properties-listing-card-name listing-name">
              <span>Industrial/Flex/Office | Brooklyn</span>
            </div>
            <div className="featured-properties-listing-address listing-address">
              <span>20 VAN DAM ST,</span>
              <span>BROOKLYN, NY 11222</span>
            </div>
          </div>
        </div>
        <div className="featured-properties-single-listing-card listing-cards">
          <div className="featured-properties-listing-card-headings">
            <h5>Online Auction</h5>
            <h5>Oct 31 - Nov 2, 2022</h5>
            <h5 className="property-type">Industrial</h5>
          </div>
          <div>
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/SoFi_Stadium_2021.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="listing-card-bid-price">
            <span>Starting Bid</span>
            <span>$1,800,000</span>
          </div>
          <div className="listing-card-name-address">
            <div className="featured-properties-listing-card-name listing-name">
              <span>Industrial/Flex/Office | Brooklyn</span>
            </div>
            <div className="featured-properties-listing-address listing-address">
              <span>20 VAN DAM ST,</span>
              <span>BROOKLYN, NY 11222</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
