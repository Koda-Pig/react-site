import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name='email' placeholder='example@mail.com' className="footer-input" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>T's & C's</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>T's & C's</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>T's & C's</Link>
          </div>
          <div className="footer-link-items">
            <h2>Trusted by</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>T's & C's</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to='/'>
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRVL © {(new Date().getFullYear())}</small>
          <div className="social-icons">
            <Link
              to='/'
              className="social-icon-link"
              target='_blank'
              aria-label='facebook'
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to='/'
              className="social-icon-link"
              target='_blank'
              aria-label='instagram'
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to='/'
              className="social-icon-link"
              target='_blank'
              aria-label='twitter'
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to='/'
              className="social-icon-link"
              target='_blank'
              aria-label='github'
            >
              <i className="fab fa-github"></i>
            </Link>
            <Link
              to='/'
              className="social-icon-link"
              target='_blank'
              aria-label='youtube'
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;