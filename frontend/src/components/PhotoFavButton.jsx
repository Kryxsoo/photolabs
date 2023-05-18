import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const { isFavorite, setIsFavorite } = props
  return (
    <div onClick={() => setIsFavorite(!isFavorite)} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        {isFavorite ? <FavBadge /> : <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;