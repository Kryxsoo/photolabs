import React from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss'

// Props the Modal, containing photos and similiar photos
const PhotoDetailsModal = (props) => {

  const isFavorite = props.favorites.includes(props.selectedPhoto.id)
  const setIsFavorite = () => {
    props.toggleFavorite(props.selectedPhoto.id)
  }
  const showModal = () => {
    props.showModal()
  }
  return (
    
    <>
    {(<div className='photo-details-modal'>
    <button onClick={showModal} className='photo-details-modal--close-button'>
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_428_287">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <div className="photo-details-modal--images">
      <PhotoFavButton
          isFavorite={ isFavorite }
          setIsFavorite={ setIsFavorite } />
      <img src={ props.selectedPhoto.urls.regular} 
      className='photo-details-modal--image' />
    </div>
    <hr></hr>

    <div className='photo-details-modal--header'>Similiar Photos</div>
      <PhotoList className ='photo-details-modal--images' photos={props.photos} toggleFavorite={props.toggleFavorite} favorites={props.favorites} handleFavoriteClick={props.handleFavoriteClick} setShowModal={props.setShowModal}/>
  </div>)}
  </>
  )
}

export default PhotoDetailsModal;