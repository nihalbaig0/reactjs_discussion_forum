import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    
            <div className="tabs">
                    <p>ISSUES</p>

                    <p>PULL REQUEST</p>
                    
                    <p>DISCUSSION FORUM</p>
                
            </div>
        
    </nav>
  );
};

export default sideDrawer;
