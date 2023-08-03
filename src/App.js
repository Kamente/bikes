import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGraduationCap, faShield } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      {/* Main Content */}
      <main>
        {/* Section: How to Roll or Use Our E-Vehicles */}
        <section>
          <h1>How to roll OR use our e-vehicles</h1>
          <div className="bike-images">
            <img src="https://i.pinimg.com/564x/19/0c/74/190c7408b47b1a2628d0946f63c20630.jpg" alt="Bike 1" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <img src="https://i.pinimg.com/564x/3c/b4/15/3cb4154fe9165ca8908eae3bab75af48.jpg" alt="Bike 2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
            <img src="https://i.pinimg.com/564x/b6/b2/4e/b6b24e1bcf6415c5bf50119bee5b7b9b.jpg" alt="Bike 3" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
          </div>
        </section>

        {/* Section: Middle Section with Safety, Parking, and Training */}
        <section>
          <div className='middle'>
            {/* Sub-section: Safety */}
            <div className='safety'>
              <FontAwesomeIcon icon={faShield} />
              <h2>Safety first</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
              <img src="https://i.pinimg.com/564x/e3/96/1d/e3961dfc9b4f1d3a72f0a07d1e13a070.jpg" alt="Safety Image" />
            </div>
            {/* Sub-section: Parking */}
            <div className='parking'>
              <img src="https://i.pinimg.com/564x/1e/42/ae/1e42ae9142d3352a3745f7833502bc22.jpg" alt="Parking Image" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
              <h3>Parking</h3>
              <FontAwesomeIcon icon={faCar} />
            </div>
            {/* Sub-section: Training */}
            <div className='training'>
              <FontAwesomeIcon icon={faGraduationCap} />
              <h7>Training Mode</h7>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
              <img src="https://i.pinimg.com/564x/d4/ef/c4/d4efc4adc984d1838df62dc5beefd340.jpg" alt="Training Image" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy;Copyright Roll Motion 2023. Rental Agreement. Terms of service. Privacy policy.</p>
      </footer>
    </div>
  );
}

export default App;
