import React from 'react';
import { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute.jsx';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from "./mocks/photos.json"
import useApplicationData from './hooks/useApplicationData';
 


// Note: Rendering a single component to build components in isolation
const App = () => {  
  const {
    state,
    toggleFavorite,
    setPhotoSelected,
    setShowModalState
  } = useApplicationData();

  const {favorites} = state

  // const [topFavorite, setTopFavorite] = useState(false)

  // const handleFavoriteClick = () => {
  //   console.log("I've been clicked")
  //   let isFound = false;
  //   for ( let key in favorites ) {
  //     if (favorites[key]) {
  //       isFound = true
  //       setTopFavorite(true)
  //     }
  //   }
  //   if (!isFound) {
  //     setTopFavorite(false)
  //   }
  // }
  

  const showModal = (id) => {
    const photoData = photos.find((photo) => {
      return photo.id === id
    })
    console.log('PhotoData: ', photoData)
    setPhotoSelected(photoData)
    // setShowModalState()
    console.log("Ive been called")
  }

return (
  <div className="App">
    <HomeRoute photos={photos}   toggleFavorite={toggleFavorite} favorites={favorites} showModal={showModal}/>
   {state.showModal && <PhotoDetailsModal photos={photos} photoData={state.photoData}   toggleFavorite={toggleFavorite} favorites={favorites} showModal={setShowModalState}/>}
  </div>
)
}

export default App

