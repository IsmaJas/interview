import React from 'react';
import './index.css';

const Card = ({ list }) => {
  return (
    <div className="card-design">
      <li className="name-design">{list.name}</li>
      <img className="img-design" src={list.backgroundImageURL} alt="map" />
    </div>
  );
};

export default Card;
