import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Main_LOGO</a></div>
        <div className="spacer">
          <p><a href="/">Feed</a></p>
          <p><a href="/">Organization</a></p>
          <p><a href="/">How to Contribute</a></p>
          
          </div>
        
        <div className="toolbar_navigation-items">
        <a href="/">PROFILE PIC</a>
        </div>
    </nav>
  </header>
);

export default toolbar;
