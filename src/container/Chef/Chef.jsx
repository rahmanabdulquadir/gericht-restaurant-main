import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title={"Chef's Word"}></SubHeading>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et suscipit reprehenderit architecto. Modi, aliquam earum?</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta amet iusto nobis quisquam unde nulla ipsum magni quas perferendis.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
