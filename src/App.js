import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGraduationCap, faShield } from '@fortawesome/free-solid-svg-icons';

function App() {
  
  return (
    <div className="App">
      <header>
        <h1>Rolls <span>Motion</span></h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>e-Vehicles</li>
            <li>Sign up</li>
          </ul>
        </nav>
        <section className='specs'>
          <h3>e-vehicles specs</h3>
          <li>80% fuel-friendly</li>
          <li>100% safe ride</li>
          <li>100% Eco-Friendly</li>
          <li>86% Comfortable to use</li>
        </section>
      </header>
      <main>
        <section>
          <h2>LOREM <span>IPSUM</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        
        <section>
         <h4>How to Roll</h4>
         <div className="bike-images">
            <img src="https://i.pinimg.com/564x/19/0c/74/190c7408b47b1a2628d0946f63c20630.jpg" alt="Bike 1" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <img src="https://i.pinimg.com/564x/3c/b4/15/3cb4154fe9165ca8908eae3bab75af48.jpg" alt="Bike 2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
            <img src="https://i.pinimg.com/564x/d5/f9/d3/d5f9d3720bcfbfad8fbba0c13cbfd0ef.jpg" alt="Bike 3" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
          </div>
        </section>
        <section>
          <div className='middle'>
          <div className='safety'>
          <FontAwesomeIcon icon={faShield} />
            <h5>Safety first</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <img src="https://i.pinimg.com/564x/e3/96/1d/e3961dfc9b4f1d3a72f0a07d1e13a070.jpg"/>
          </div>
          <div className='parking'>
          <img src="https://i.pinimg.com/564x/1e/42/ae/1e42ae9142d3352a3745f7833502bc22.jpg"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
            <h6>Parking</h6>
            <FontAwesomeIcon icon={faCar} />
          </div>
          <div className='training'>
          <FontAwesomeIcon icon={faGraduationCap} />
            <h7>Training Mode</h7>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
            <img src="https://i.pinimg.com/564x/d4/ef/c4/d4efc4adc984d1838df62dc5beefd340.jpg"/>
          </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy;Copyright Roll Motion 2023. Rental Agreement. Terms of service. Privacy policy.</p>
      </footer>
    </div>
  );
}

export default App;
