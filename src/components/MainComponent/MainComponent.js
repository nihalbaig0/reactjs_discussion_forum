import React from 'react';

import './MainComponent.css';

const maincomponent = props => (
    <div class="grid-container">
        <div className="sidedrawer">
            <div className="tabs">
                    <p>ISSUES</p>
                    <p>PULL REQUEST</p>
                    <p>DISCUSSION FORUM</p>
            </div>
        </div>
        
    <div className="discussion">
        <div className="discussion_title">
            <h1>Discussion Forum</h1>
            <p>Get help and discuss with the community</p>
        </div>
    </div>
        
    <div className="description">
       <div className="box">
            <h2>Description</h2>
            <p>Welcome to the discussion forums! Ask questions, debate ideas, and find mates who share your goal</p>
        </div>
    </div>
    <div className="forumguide">
        <h2>Forum Guidelines          > </h2>
    </div>
    <div className="adsection">
        <div className="box">
            <h1>AD SECTION</h1>
        </div>
    </div>
    <div className="sortby">
        <div className="sort_title">
            <p><strong>Sort by: </strong>Latest ></p>
            <div className="button">New Thread</div>
        </div>
    </div>
  </div>
);

export default maincomponent;