
import React from 'react';
import { useState } from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

//userName string
//imageSource url
//id id
//hide userName

const PhotoListItem = (props) => {
  const [isFavorite, setIsFavorite] = useState (false)


    return (
      <div className = "photo-list--item">
        <div className = "photo-header">
        <PhotoFavButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
          <img className = "photo-list--image" src={ props.imageSource } />
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