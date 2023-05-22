import React from 'react';
import { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute.jsx';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from "./mocks/photos.json"

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorites, setFavorites] = useState({})

  const [topFavorite, setTopFavorite] = useState(false)

  const handleFavoriteClick = () => {
    console.log("I've been clicked")
    // iterates through key of favorites, If one of the favorite key is liked. setTopFavorite to true
    let isFound = false;
    for ( let key in favorites ) {
      if (favorites[key]) {
        isFound = true
        setTopFavorite(true)
      }
    }
    // if any favorite key is not liked. setTopFavorite to false
    if (!isFound) {
      setTopFavorite(false)
    }
  }

const toggleFavorite = (id) => {
  if (favorites[id] === undefined) {
    setFavorites({...favorites, [id]: true})
  } else {
    setFavorites({...favorites, [id]: !favorites[id]})
  }
}

const [ showModal, setShowModal ] = useState(false)
console.log("show model", showModal);

return (
  <div className="App">
    <HomeRoute photos={photos} topFavorite={topFavorite}  toggleFavorite={toggleFavorite} favorites={favorites} handleFavoriteClick={handleFavoriteClick} setShowModal={setShowModal}/>
   {showModal && <PhotoDetailsModal photos={photos} topFavorite={topFavorite}  toggleFavorite={toggleFavorite} favorites={favorites} handleFavoriteClick={handleFavoriteClick} setShowModal={setShowModal}/>}
  </div>
)
}

export default App

