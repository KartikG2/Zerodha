import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landingPage/home/Hero';


// Test suite
describe('Hero Component',()=>{
    test('Render Hero Image',()=>{
        render(<Hero/>);
        const HeroImage = screen.getByAltText('hero Image');
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute('src','media/images/homeHero.png');
    });
});