import React from 'react';
import { useEffect, useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute.jsx';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
 


// Note: Rendering a single component to build components in isolation
const App = () => {  
  const {
    state,
    toggleFavorite,
    setPhotoSelected,
    setShowModalState,
    setSelectedTopic,
  } = useApplicationData();

  const {favorites, photoData, isShowModal, topicList, selectedPhoto} = state
  
  const showModal = (id) => {
    const photoData1 = photoData.find((photo) => {
      return photo.id === id
    })
    console.log(photoData1);
    setPhotoSelected(photoData1)
  }


return (
  <div className="App">
    <HomeRoute photos={photoData} topics={topicList}  toggleFavorite={toggleFavorite} favorites={favorites} showModal={showModal} onTopicClick={setSelectedTopic}/>
   {isShowModal && <PhotoDetailsModal photos={photoData} photoData={photoData} selectedPhoto={selectedPhoto}   toggleFavorite={toggleFavorite} favorites={favorites} showModal={setShowModalState}/>}
  </div>
)
}

export default App

