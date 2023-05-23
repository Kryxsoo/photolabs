import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => { 
    return  <PhotoListItem
    id={ photo.id }
    toggleFavorite={ props.toggleFavorite }
    favorites={ props.favorites }
    key={ photo.id }
    profile={photo.user.profile}
    username={ photo.user.username }
    imageSource={ photo.urls.regular }
    handleFavoriteClick={ props.handleFavoriteClick}
    setShowModal={ props.setShowModal }
    city={ photo.location.city }
    showModal={ props.showModal }
    />
  })
    return (
        <div className="photo-list">
        { mappedPhotos }
        </div>
    )
}

export default PhotoList