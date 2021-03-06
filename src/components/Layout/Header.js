import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
