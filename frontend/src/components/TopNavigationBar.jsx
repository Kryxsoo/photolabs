import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <span className="top-nav-bar--topics">
      <TopicList />
      <FavBadge />
      </span>
    </div>
  )
}

export default TopNavigation;