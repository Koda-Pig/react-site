import React from "react";
import { Button } from './Button';
import { Link } from 'react-router-dom'
import './Bookings.css';

function GalaxyMap() {
  return (
    <>
          <form className='booking-form'>
            <div className="flight-type">
                <label for="return">
                  <input type="radio" id="return" name="flight-type" value="return" />
                  &nbsp; return
                </label>
                <label for="one-way">
                  <input type="radio" id="one-way" name="flight-type" value="one-way" />
                  &nbsp; one way
                </label>
            </div>
            <div className="flight-details">
              <div className="where-from">
                <label for="where-from"> where from? </label><br />
                <select name="where-from" id="where-from">
                  <option value="Earth 2.0">Earth 2.0</option>
                  <option value="Venusia">Venusia</option>
                  <option value="Saharia">Saharia</option>
                  <option value="Luna">Luna</option>
                  <option value="Volcax">Volcax</option>
                  <option value="Jupitious">Jupitious</option>
                  <option value="Gasidious">Gasidious</option>
                  <option value="LuIceferinna">Iceferin</option>
                </select>
              </div>
              <div className="where-to">
                <label for="where-to"> where to? </label><br />
                <select name="where-to" id="where-to">
                  <option value="Earth 2.0">Earth 2.0</option>
                  <option value="Venusia">Venusia</option>
                  <option value="Saharia">Saharia</option>
                  <option value="Luna">Luna</option>
                  <option value="Volcax">Volcax</option>
                  <option value="Jupitious">Jupitious</option>
                  <option value="Gasidious">Gasidious</option>
                  <option value="LuIceferinna">Iceferin</option>
                </select>
              </div>
            </div>
            <input type="email" name='email' placeholder='example@mail.com' className="footer-input" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
    </>
  )
}

export default GalaxyMap;