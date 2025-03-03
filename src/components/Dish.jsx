// components/Dish.jsx
import React from 'react';

const Dish = ({ img, title, price }) => {
  return (
    <div>
      <img src={img} alt={title} height="200" width="200" />
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Dish;
