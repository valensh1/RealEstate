import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'; // importing svg's to use from react-icons dependency
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { featuredPropertiesModel } from '../Model/FeaturedProperties_Model';
import ListingCards from './ListingCards';

function FeaturedProperties() {
  const [favorites, setFavorites] = useState(featuredPropertiesModel);
  const [featuredPropertiesToDisplay, setFeaturedPropertiesToDisplay] =
    useState(featuredPropertiesModel.slice(0, 4));
  const [
    indexOfFeaturedPropertiesDisplayed,
    setIndexOfFeaturedPropertiesDisplayed,
  ] = useState({ minimum: 0, maximum: 3 });

  const totalFeaturedPropertiesDisplayed = 4;

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

  const featuredPropertiesRightArrowClick = () => {
    let maxIndexNumber = featuredPropertiesModel.length - 1;
    let minimumIncrementer = ++indexOfFeaturedPropertiesDisplayed.minimum;
    let maximumIncrementer = ++indexOfFeaturedPropertiesDisplayed.maximum;
    setIndexOfFeaturedPropertiesDisplayed({
      minimum: minimumIncrementer,
      maximum: maximumIncrementer,
    });
    // setFeaturedPropertiesToDisplay(
    //   featuredPropertiesModel.slice(minimumIncrementer, maximumIncrementer)
    // );
    const images = document.querySelectorAll('.show');
    images[0].style.transition = '.75s';
    images[0].style.transform = 'translateX(-125px)';
    // images[0].style.width = '0px';
    // images[0].style.height = '0px';
    images[0].style.opacity = '0';
    images[1].style.transition = '.75s';
    images[1].style.transform = 'translateX(-125px)';
    images[2].style.transition = '.75s';
    images[2].style.transform = 'translateX(-125px)';
    images[3].style.transition = '.75s';
    images[3].style.transform = 'translateX(-125px)';
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
        <ListingCards listings={featuredPropertiesToDisplay} />
        <BsFillArrowLeftCircleFill
          id="left-carousel-arrow"
          className="carousel-arrows"
        />
        <BsFillArrowRightCircleFill
          id="right-carousel-arrow"
          className="carousel-arrows"
          onClick={featuredPropertiesRightArrowClick}
        />
      </div>
    </div>
  );
}

export default FeaturedProperties;
