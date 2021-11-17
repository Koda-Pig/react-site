import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className="fab fa-jedi-order"></i> COSM
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu }>
                home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu }>
                about
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/map' className='nav-links' onClick={closeMobileMenu }>
                map
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/book-flight' className='nav-links-mobile' onClick={closeMobileMenu }>
                book flight
              </Link>
            </li>
          </ul>
          {button && <Button linkTo='/book-flight' buttonStyle='btn--outline'>Book Flight</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;