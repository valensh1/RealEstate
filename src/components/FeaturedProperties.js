import { useState } from 'react';
import { AiOutlineArrowRight, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { featuredPropertiesModel } from '../Model/FeaturedProperties_Model';
// import { v4 as uuidv4 } from 'uuid';
// import { createRoot } from 'react-dom/client';
// import { ReactSVG } from 'react-svg';

function FeaturedProperties() {
  const [favorites, setFavorites] = useState(featuredPropertiesModel);
  console.log(favorites);
  const [isStarClicked, setIsStarClicked] = useState(false);

  const currencyFormatter = (amount) => {
    let numberOptions = {
      style: 'currency', // Shows dollar signs. Other options here are 'decimal', 'percent' and 'unit'.
      currency: 'USD', // Could use 'EUR' for the euro or 'CNY' here for Chinese RMB; If style above is currency then CURRENCY MUST BE PROVIDED AS OPTION HERE!
      currencySign: 'standard', // Could also use 'accounting' as an option here but didn't see a difference in formatting when tried.
      // unit: 'mile-per-hour', // Use with style: unit
      maximumFractionDigits: '0', // SHOWS NO CENTS; UNCOMMENT THIS OUT IF YOU WANT TO SHOW CENTS.
    };
    console.log(Intl.NumberFormat('en-US', numberOptions).format(amount));
    return Intl.NumberFormat('en-US', numberOptions).format(amount);
  };

  const starClick = (event) => {
    // setIsStarClicked(!isStarClicked);
    const idOfStarClicked = event.target.parentElement.id;
    console.log(idOfStarClicked);
    if (
      event.target.parentElement.getAttribute('is_checked') === 'not_checked'
    ) {
      document
        .getElementById(idOfStarClicked)
        .setAttribute('is_checked', 'checked');
      event.target.remove();
      return (
        <h3>
          <AiFillStar />
        </h3>
      );
      //   const container = document.getElementById(idOfStarClicked);
      //   const root = createRoot(container);
      //   root.render(<AiFillStar />);
    } else {
      document
        .getElementById(idOfStarClicked)
        .setAttribute('is_checked', 'not_checked');

      //   const container = document.getElementById(idOfStarClicked);
      //   const root = createRoot(container);
      //   root.render(<AiOutlineStar />);
    }
  };

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
        onClick={starClick}
      >
        <div className="featured-properties-single-listing-card listing-cards">
          <div className="featured-properties-listing-card-headings">
            <h5>{`Online ${featuredPropertiesModel[0].saleType}`}</h5>
            <h5>{featuredPropertiesModel[0].auctionDates}</h5>
            <h5 className="property-type">
              {featuredPropertiesModel[0].propertyType}
            </h5>
          </div>
          <p
            className="star-icon"
            // onClick={starClick}
            is_checked="not_checked"
            id="1"
          >
            <AiOutlineStar />

            {/* {isStarClicked ? <AiFillStar /> : <AiOutlineStar />} */}
          </p>
          <div className="listing-card-img-container">
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/SoFi_Stadium_2021.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="listing-card-bid-price">
            <span>Starting Bid</span>
            <span>
              {currencyFormatter(featuredPropertiesModel[0].startingBid)}
            </span>
          </div>
          <div className="listing-card-name-address">
            <div className="featured-properties-listing-card-name listing-name">
              <span id="property-name">Industrial/Flex/Office | Brooklyn</span>
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
          <p className="star-icon" onClick={starClick}>
            {isStarClicked ? <AiFillStar /> : <AiOutlineStar />}
          </p>
          <div className="listing-card-img-container">
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
              <span id="property-name">Industrial/Flex/Office | Brooklyn</span>
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
          <p className="star-icon" onClick={starClick}>
            {isStarClicked ? <AiFillStar /> : <AiOutlineStar />}
          </p>
          <div className="listing-card-img-container">
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
              <span id="property-name">Industrial/Flex/Office | Brooklyn</span>
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
          <p className="star-icon" onClick={starClick}>
            {isStarClicked ? <AiFillStar /> : <AiOutlineStar />}
          </p>
          <div className="listing-card-img-container">
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
              <span id="property-name">Industrial/Flex/Office | Brooklyn</span>
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
