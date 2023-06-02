import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

// maps through topics
const TopicList = (props) => {

  const mappedTopics = props.topics.map((topic) => {
    return <TopicListItem
    key={ topic.id }
    label={ topic.title }
    link={ topic.slug }
    onClick={ () => props.onTopicClick(topic) }
    />
  })

  return (
  <div className="top-nav-bar--topic-list">
    { mappedTopics }
  </div>
  )
}

export default TopicList