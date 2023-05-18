
import React from 'react';
import { useState } from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

//userName string
//imageSource url
//id id
//hide userName

const PhotoListItem = (props) => {
  const photos = ['one', 'two', 'three']
  const [isFavorite, setIsFavorite] = useState (false)


  return photos.map(photo => {

    return (
      <div className = "photo-list--item" key={photo}>
        <div className = "photo-header">
        <PhotoFavButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
          <img className = "photo-list--image" src={ props.imageSource }></img>
        </div>
      </div>
    )
  })
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem