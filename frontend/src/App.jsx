import React from 'react';
import { useEffect, useState } from 'react';

import './App.scss';
import axios from 'axios'
import HomeRoute from './routes/HomeRoute.jsx';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// import photos from "./mocks/photos.json"
import useApplicationData from './hooks/useApplicationData';
 


// Note: Rendering a single component to build components in isolation
const App = () => {  
  const {
    state,
    toggleFavorite,
    setPhotoSelected,
    setShowModalState
  } = useApplicationData();

  const [photos, setPhotos] = useState([])
  const [topics, setTopics] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
    .then(res => setPhotos(res.data))
  }, []);


  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
    .then(res => setTopics(res.data));
  }, []);

  const {favorites} = state
  
  const showModal = (id) => {
    const photoData = photos.find((photo) => {
      return photo.id === id
    })
    setPhotoSelected(photoData)
  }

return (
  <div className="App">
    <HomeRoute photos={photos} topics={topics}  toggleFavorite={toggleFavorite} favorites={favorites} showModal={showModal}/>
   {state.showModal && <PhotoDetailsModal photos={photos} photoData={state.photoData}   toggleFavorite={toggleFavorite} favorites={favorites} showModal={setShowModalState}/>}
  </div>
)
}

export default App

