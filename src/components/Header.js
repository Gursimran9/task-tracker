import React from 'react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <button className='btn-add'>Add</button>
    </div>
  );
};

export default Header;
