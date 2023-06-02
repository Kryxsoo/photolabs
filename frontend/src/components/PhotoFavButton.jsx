import React  from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

// Favorite Button
function PhotoFavButton(props) {
  const { isFavorite, setIsFavorite } = props
  return (
    <div onClick={() => {setIsFavorite(!isFavorite); }} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
      <FavIcon
          width={20}
          height={17}
          outlineWidth={1}
          fill={isFavorite ? '#C80000' : '#EEEEEE'}
          stroke={isFavorite ? '#FFFFFF' : '#C80000'}
        /> 
      </div>
    </div>
  );
}

export default PhotoFavButton;