import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => { 
    return  <PhotoListItem
    id ={photo.id}
    toggleFavorite = { props.toggleFavorite }
    favorites = { props.favorites }
    key= { photo.id }
    profile={photo.urls.thumb}
    username={ photo.username }
    imageSource={ photo.urls.regular }
    handleFavoriteClick={ props.handleFavoriteClick}
    setShowModal={ props.setShowModal }
    city={photo.location.city}
    />
  })
    return (
        <div className="photo-list">
        { mappedPhotos }
        </div>
    )
}

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList