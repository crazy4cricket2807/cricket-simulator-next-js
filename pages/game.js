import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Gameinputform from "../components/game/Gameinputform";
import Match from "../components/game/match/Match";
export default function game() {
  const [carouselSteps, setCarouselSteps] = useState(0);
  const incrementSteps = () => setCarouselSteps(carouselSteps + 1);
  return (
    <>
      <title>Game</title>
      <Carousel
        showArrows={false}
        showIndicators={false}
        selectedItem={carouselSteps}
        showStatus={false}
        showThumbs={false}
        className="items-center h-screen my-auto overflow-auto text-center bg-gray-100"
      >
        <Gameinputform incrementSteps={incrementSteps} />
        <Match />
      </Carousel>
    </>
  );
}
