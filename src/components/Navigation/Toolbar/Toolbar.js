import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './Toolbar.module.css';

const toolBar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolBar;