import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from './Burger.module.css';

const burger = (props) => {
  let insideBurger = [];
  let key = 0;

  Object.keys(props.ingredients)
    .map(ingredient => {
      for (let j = 0; j < props.ingredients[ingredient]; j++) {
        insideBurger.push(<BurgerIngredient key={key} type={ingredient} />);
        key++;
      }
      return true;
    });

  insideBurger = insideBurger.length ? insideBurger : (<p>Please start adding ingredients!</p>);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {insideBurger}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;