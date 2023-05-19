import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.gift} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Gift Box" />
      <h1 className="headtext__cormorant">Good things comes with waffle's</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Looking for the perfect gift for the waffle lover in your life?.</p>
        </div>
        <p className="p__opensans"> Look no further than our specially curated Waffle House Gift Box. Packed with delightful treats and waffle-themed goodies, our gift box is designed to bring joy and satisfy cravings. </p>
      </div>

      <div className="app__chef-sign">
        <p>Unwrap Joy</p>
        <p className="p__opensans">The Perfect Gift for Waffle Enthusiasts!</p>
        <img src={images.main} />
      </div>
    </div>
  </div>
);

export default Chef;