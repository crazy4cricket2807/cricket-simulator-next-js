import axios from 'axios';
import React, { useState } from 'react';
import { getTeams } from '../teams/IPL';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Gameinputform from '../components/game/Gameinputform';
import Match from '../components/game/match/Match';
export default function game() {

    return (
        <>
            <title>Game</title>
            <Carousel showIndicators={false} selectedItem={1} showStatus={false} className='bg-gray-100 h-screen text-center items-center my-auto overflow-auto'>
                <Gameinputform />
                <Match />
            </Carousel>
        </>
    );
}
