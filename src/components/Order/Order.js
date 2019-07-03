import React from 'react';
import styles from './Order.module.css';

const order = (props) => {
  let ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    });
  }

  const ingOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}>
        {ig.name} ({ig.amount})
      </span>)
  });

  return (
    <div className={styles.Order}>
      <p>Name: <strong>{props.name}</strong></p>
      <p>Ingredients: {ingOutput}</p>
      <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
    </div>
  );
}

export default order;