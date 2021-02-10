import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Products() {
    return (
        <div id = 'products'>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
        </div>
    );
}

export default Products;