import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>Hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked={props.onCheckoutCancelled}>CANCEL</Button>
      <Button buttonType="Success" clicked={props.onCheckoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;