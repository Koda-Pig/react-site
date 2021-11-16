import React from 'react';
import '../../App.css';
import './About.css';
import { Link } from 'react-router-dom';
import Lightbox from '../Lightbox';

function About() {
  return (
    <>
    <h1 className="about">ABOUT</h1>
    <div className='section'>
      <h1>who is COSM anyway?</h1>
      <div className="container">
        <div className="wrapper">
        <Lightbox />
          <p>
            COSM (Cosmic Organisation of Superficial Matriarchs) was first founded in 2142, at the center for Profit & Manipulation on Mars. Based on the premise that all intelligent beings with a will to do so, should be able to travel the galaxy in our immediate vicinity (within 10<sup>6</sup> lightyears) at a cost that is not inhibitive.
          </p>
          <p>
            Our marvellous team of 8 Annelids includes Janice, Lucy, Maria, Suzanne, Sikelelwa, Charlotte, Louise, and Merjem. We love coffee, are very energetic and occasionally take part in vices that are forbidden on our home world of Takwella.
          </p>
          <p>
            We take pride in offering affordable travel solutions to any being capable of paying the fee (regardless of species, origin, race, gender or creed). It is our belief that you should not be limited to your birth planet. Each being has unlimited potential (as first posed by Dr. Ergot Ricefield), and prohibiting them from engaging with the rest of the known galaxy would be a crime against them, as well as all who dwell here - be the prohibitation by law or by cost.
          </p>
          <p>
            We strive to bring you to whichever pocket of space and time you desire! So don't delay, <Link to='/book-flight'>grab your ticket</Link> today and follow your dreams, wherever they may take you..
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;