
import React from 'react';
import '../styles/PhotoListItem.scss';

//userName string
//imageSource url
//id id
//hide userName

const PhotoListItem = (props) => {
  return (
    <div className = "photo-list-item">
      <div className = "photo-header">
        <h2>{ props.username }</h2>
        <img src={ props.imageSource }></img>
      </div>
    </div>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem