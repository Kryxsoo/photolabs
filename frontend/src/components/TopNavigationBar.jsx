import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

// Navigation bar that contains logo, topic, and the favorite button
const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <span className="top-nav-bar--topics">
      <TopicList topics={props.topics}/>
      <FavBadge topFavorite={ props.favorites.length }/>
      </span>
    </div>
  )
}

export default TopNavigation;