import React from 'react';
import './PlanCard.css';

const PlanCard = ({ title, price, features }) => {
  return (
    <div className="plan-card">
      <h2>{title}</h2>
      <h3>R${price}/mês e ou dia</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
