import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Gameinputform from "../components/game/Gameinputform";
import Match from "../components/game/match/Match";
export default function game() {
  return (
    <>
      <title>Game</title>
      <Carousel
        showIndicators={false}
        selectedItem={1}
        showStatus={false}
        className="items-center h-screen my-auto overflow-auto text-center bg-gray-100"
      >
        <Gameinputform />
        <Match />
      </Carousel>
    </>
  );
}
