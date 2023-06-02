import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

// Displays PhotoList, onClick that props modals
const PhotoListItem = (props) => {
  const isFavorite = props.favorites.includes(props.id)
  const setIsFavorite = () => {
    props.toggleFavorite(props.id)
  }
    return (
      <div className = "photo-list--item" >
        <div className = "photo-header">
        <PhotoFavButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} handleFavoriteClick={props.handleFavoriteClick} />
          <img className = "photo-list--image" src={ props.imageSource } onClick={() => props.showModal(props.id)}/>
        </div>
        <hr></hr>

        <div className='photo-list--user-details'>
        <img src={props.profile} className='photo-list--user-profile' />
          <div>
            <div className='photo-list--user-info'>{props.username}</div>
            <div className='photo-list--user-location'>{props.city}</div>
          </div>
        </div>
      </div>
    )
}

export default PhotoListItem