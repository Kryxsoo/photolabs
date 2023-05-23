import React from 'react'
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {

  return (
  <div className="topic-list--item" key={props.key}>
    <span href={props.link}>{props.label}</span>
  </div>
  );
};

export default TopicListItem