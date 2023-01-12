import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // importing svg's to use from react-icons dependency

function ListingCards(props) {
  // Destructuring of props
  const { listings } = props;
  console.log(listings);

  // Function which takes an amount and formats its with a dollar symbol, commas and decimals for cents if you want it.
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
    <>
      {listings.map((card) => {
        return (
          <div
            className="featured-properties-single-listing-card listing-cards show"
            key={card?.id}
            name={card?.id}
          >
            <div className="featured-properties-listing-card-headings">
              <h5>{`Online ${card?.saleType}`}</h5>
              <h5>{card?.auctionDates}</h5>
              <h5 className="property-type">{card?.propertyType}</h5>
            </div>
            {card?.favorite ? (
              <AiFillStar className="star-icon" id={card?.id} />
            ) : (
              <AiOutlineStar className="star-icon" id={card?.id} />
            )}
            <div className="listing-card-banners-container">
              {card?.banners?.map((banner) => {
                return (
                  <div className="listing-card-banner" id="listing-card-banner">
                    <span className="banner" id="banner">
                      {banner}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="listing-card-img-container">
              <a href="">
                <img src={card?.img?.[0]} alt="property photo" />
              </a>
            </div>
            <div className="listing-card-bid-price">
              <span>Starting Bid</span>
              <span>{currencyFormatter(card?.startingBid)}</span>
            </div>
            <div className="listing-card-name-address">
              <div className="featured-properties-listing-card-name listing-name">
                <span id="property-name">{card?.name}</span>
              </div>
              <div className="featured-properties-listing-address listing-address">
                <span>{`${card?.street},`}</span>
                <span>{`${card?.city}, ${card?.state} ${card?.zipCode}`}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListingCards;
