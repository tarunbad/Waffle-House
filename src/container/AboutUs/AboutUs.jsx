import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='w letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img'/>
        <p className='p__opensans'>At Waffle House, we are passionate about bringing joy and deliciousness to breakfast tables around the world. With a legacy spanning over 2 years, we have perfected the art of crafting mouthwatering waffles that awaken your taste buds and leave you craving for more.</p>
        	<button type='button' className="custom__button">Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt=""/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img'/>
        <p className='p__opensans'>What sets Waffle House apart is our unwavering commitment to quality and innovation. We strive to push the boundaries of traditional waffle-making, creating a truly unique experience for our customers. Here are a few aspects that make us stand out: <li>Signature Recipes</li><li>Artisanal Ingredients</li><li>Customization</li><li>Limited-Time Specials</li><li>Warm and Welcoming Atmosphere</li></p>
        	<button type='button' className="custom__button">Know more</button>
      </div>
    </div>

  </div>
);

export default AboutUs;

