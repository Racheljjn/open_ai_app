import React from 'react';
import people from '../../assets/people.png';
import fintech from '../../assets/fintech.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Fintech is a booming industry that’s on everyone’s mind, especially investors.</h1>
      <p>Fintech companies are financial institutions that provide financial services and products by using technologies to augment, streamline or digitise their offering.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={fintech} alt="fintech" />
    </div>
  </div>
);

export default Header;