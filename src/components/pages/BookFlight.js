import React from 'react';
import '../../App.css';
import Bookings from '../Bookings';

function BookFlight() {
  return (
    <>
    <h1 className="book-flight">BOOK FLIGHT</h1>
    <div className='section'>
      <h1>search. book. travel.</h1>
      <div className="container">
        <div className="wrapper">
        <Bookings />
        </div>
      </div>
    </div>
    </>
  );
}

export default BookFlight;