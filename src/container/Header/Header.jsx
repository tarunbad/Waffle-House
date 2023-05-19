import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Header.css';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Indulge In The Exquisite Taste Adventure!'/>
      <h1 className='app__header-h1'>The key to find Feast</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>A burning passion for quality, consistency, novelty and adding value in the QSR space is the reason that our food franchis.</p>
      <button type='button' className="custom__button">Explre Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.headerimg} alt="header img"/>
    </div>
  </div>
);

export default Header;
