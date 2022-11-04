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
    for (let property of favorites) {
      if (
        property.id === +event.target.id || // Or statement required because for some reason when inserting the SVG after the first click on favorites star icon it doesn't recognize the click event at the svg level but recognizes it down at the svg path child level and so the id is not located there but on the svg level and so the event.target only picks up id at the svg level and it needs to be picked up on either parent or child level to get the id. Seems like a glitch
        property.id === +event.target.parentElement.id
      ) {
        console.log(`Property favorite ${property.favorite}`);
        console.log(`Typeof: ${typeof property.favorite}`);
        property.favorite = !property.favorite;
        break;
      }
    }
    setFavorites([...favorites]);
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
            <h5>{`Online ${favorites[0].saleType}`}</h5>
            <h5>{favorites[0].auctionDates}</h5>
            <h5 className="property-type">{favorites[0].propertyType}</h5>
          </div>
          {favorites[0].favorite ? (
            <AiFillStar className="star-icon" id={favorites[0].id} />
          ) : (
            <AiOutlineStar className="star-icon" id={favorites[0].id} />
          )}

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
            <span>{currencyFormatter(favorites[0].startingBid)}</span>
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
            <h5>{`Online ${favorites[1].saleType}`}</h5>
            <h5>{favorites[1].auctionDates}</h5>
            <h5 className="property-type">{favorites[1].propertyType}</h5>
          </div>
          {favorites[1].favorite ? (
            <AiFillStar className="star-icon" id={favorites[1].id} />
          ) : (
            <AiOutlineStar className="star-icon" id={favorites[1].id} />
          )}

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
            <span>{currencyFormatter(favorites[1].startingBid)}</span>
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
        {/* <div className="featured-properties-single-listing-card listing-cards">
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
        </div> */}
      </div>
    </div>
  );
}

export default FeaturedProperties;
