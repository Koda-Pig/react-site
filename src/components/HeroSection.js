import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/space-video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video
        autoPlay
        loop
        muted
        src={video}
        type='video/mp4'
      >
      </video>
      <h1>THE COSMOS AWAITS</h1>
      <p>What's stopping you?</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='/book-flight'
        >
          BOOK FLIGHT
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;