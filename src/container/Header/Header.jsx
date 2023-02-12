import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css'
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper-info">
        <SubHeading title="Chase the new flavour"></SubHeading>
        <h1 className='app__header-h1'>The Key to Find Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi ipsum modi quisquam fuga nulla, dolor officiis consectetur possimus accusamus nihil suscipit magni asperiores ratione? </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper-img">
        <img src={images.welcome} alt="header image"/>
      </div>
    </div>
  );
};

export default Header;
