import React from 'react'
import '../styles/TopicListItem.scss'

// Displays topic items
const TopicListItem = (props) => {

  return (
  <div onClick={props.onClick} className="topic-list--item">
    <span href={props.link}>{props.label}</span>
  </div>
  );
};

export default TopicListItem