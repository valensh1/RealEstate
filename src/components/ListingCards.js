import React from 'react';
import { AiOutlineArrowRight, AiFillStar, AiOutlineStar } from 'react-icons/ai';

function ListingCards(props) {
  // Destructuring of props
  const { listings } = props;
  console.log(listings);

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

  return (
    <div className="featured-properties-single-listing-card listing-cards">
      <div className="featured-properties-listing-card-headings">
        <h5>{`Online ${listings?.[0]?.saleType}`}</h5>
        <h5>{listings?.[0]?.auctionDates}</h5>
        <h5 className="property-type">{listings?.[0]?.propertyType}</h5>
      </div>
      {listings?.[0]?.favorite ? (
        <AiFillStar className="star-icon" id={listings?.[0]?.id} />
      ) : (
        <AiOutlineStar className="star-icon" id={listings?.[0]?.id} />
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
        <span>{currencyFormatter(listings?.[0]?.startingBid)}</span>
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
  );
}

export default ListingCards;
