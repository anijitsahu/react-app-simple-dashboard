// dependencies
import { useState } from "react";

// Components
import Carousel from "./Carousel";

// css
import "../../css/carousel.css";

// images
import "../../images/1.jpg";
import "../../images/2.jpg";

import "../../images/3.jpg";
import "../../images/4.jpg";

import "../../images/5.jpg";

const CarouselComponent = () => {
  const TOTAL_NUMBER_OF_IMAGES = 5;
  // initialize the initial state and its modifier function
  const [carouselData, setCarouselData] = useState({
    active: 1,
    total: TOTAL_NUMBER_OF_IMAGES,
  });

  // update the image when the arrow is clicked
  const updateImage = (e) => {
    let { id } = e.target;
    let { active, total } = carouselData;

    if (id == "left") {
      active = active > 1 ? active - 1 : 1;
    } else if (id == "right") {
      active = active < total ? active + 1 : total;
    }
    setCarouselData({ ...carouselData, active });
  };

  const { active, total } = carouselData;
  return (
    <section className="carousel-container">
      <Carousel srcNumber={active} total={total} updateImage={updateImage} />
    </section>
  );
};

export default CarouselComponent;
