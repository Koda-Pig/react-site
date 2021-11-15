import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import space1 from '../images/space-1.jpg'; 
import space2 from '../images/space-2.jpg'; 
import space3 from '../images/space-3.jpg'; 
import space4 from '../images/space-4.jpg'; 
import space5 from '../images/space-5.jpg'; 


function Cards() {
  return (
    <div className='cards'>
      <h1>travel to the treasures of our galaxy:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={space1}
              text='do your best to send the magnificent pink one in the corner'
              label='sport'
              path='/map'
            />
            <CardItem
              src={space4}
              text='travel 4 million years into the future to witness the implosion of our very own star'
              label='time travel'
              path='/map'
            />
            <CardItem
              src={space3}
              text='a trip down memory lane to prance around on our moon (the uncolonized side)'
              label='retro'
              path='/map'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={space2}
              text="visit Taniquetil: the highest peak known to all beings (that we have conversed with thus far)"
              label='adventure'
              path='/services'
            />
            <CardItem
              src={space5}
              text='use the ancient doorway to travel to distant and unusual pockets of the multiverse'
              label='multiverse'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;