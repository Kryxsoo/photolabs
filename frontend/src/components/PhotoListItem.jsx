import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const isFavorite = props.favorites[props.id]
  const setIsFavorite = () => {
    props.toggleFavorite(props.id)
  }

  const showModal = () => {
    props.setShowModal(true)
    console.log("Ive been called")
  }

// console.log("check: ", props.favorites)
    return (
      <div className = "photo-list--item" onClick={showModal}>
        <div className = "photo-header">
        <PhotoFavButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} handleFavoriteClick={props.handleFavoriteClick} />
          <img className = "photo-list--image" src={ props.imageSource } />
        </div>
        <div className='photo-list--user-details'>
          <img src={props.profile} className='photo-list--user-profile' />
        </div>
        <div>
          <h4>{props.username}</h4>
          <h5>{props.city}</h5>
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