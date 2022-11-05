import { useState } from 'react';
import { AiOutlineArrowRight, AiFillStar, AiOutlineStar } from 'react-icons/ai'; // importing svg's to use from react-icons dependency
import { featuredPropertiesModel } from '../Model/FeaturedProperties_Model';
import ListingCards from './ListingCards';

function FeaturedProperties() {
  const [favorites, setFavorites] = useState(featuredPropertiesModel);

  // Click event which finds the property that was clicked and changes the favorite key/value pair from the featuredProperties object to the opposite
  const starClick = (event) => {
    for (let property of favorites) {
      if (
        property.id === +event.target.id || // Or statement required because for some reason when inserting the SVG after the first click on favorites star icon it doesn't recognize the click event at the svg level but recognizes it down at the svg path child level and so the id is not located there but on the svg level and so the event.target only picks up id at the svg level and it needs to be picked up on either parent or child level to get the id. Seems like a glitch
        property.id === +event.target.parentElement.id
      ) {
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
        <ListingCards listings={favorites} />
      </div>
    </div>
  );
}

export default FeaturedProperties;
