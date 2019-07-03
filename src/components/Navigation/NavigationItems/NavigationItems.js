import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.css';

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem exact link="/">Burger Builder</NavigationItem>

    {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}

    {props.isAuthenticated ?
      <NavigationItem link="/logout">Logout</NavigationItem> :
      <NavigationItem link="/auth">Authentication</NavigationItem>}
  </ul>
);

export default navigationItems;