import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';
import img7 from '../images/img-7.jpg';
import img8 from '../images/img-8.jpg';
import img9 from '../images/img-9.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text='explore the hidden waterfall deep inside the amazon jungle'
              label='adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='travel through the islands of Bali in a Private Cruise'
              label='luxury'
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text='explore the hidden waterfall deep inside the amazon jungle'
              label='adventure'
              path='/services'
            />
            <CardItem
              src={img4}
              text='travel through the islands of Bali in a Private Cruise'
              label='luxury'
              path='/services'
            />
            <CardItem
              src={img5}
              text='travel through the islands of Bali in a Private Cruise'
              label='luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;