// src/components/IconItem.js
import React from 'react';
import './IconItem.css';

const IconItem = ({ icon, text }) => {
  return (
    <div className="icon-item">
      <img src={icon} alt={text} className="icon-image" />
      <p>{text}</p>
    </div>
  );
};

export default IconItem;