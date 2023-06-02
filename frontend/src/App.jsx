import React from 'react';
import { useEffect, useState } from 'react';

import './App.scss';
import axios from 'axios'
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
  } = useApplicationData();

  const [topics, setTopics] = useState([])

  


  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
    .then(res => setTopics(res.data));
  }, []);
console.log(state);
  const {favorites, photoData, isShowModal} = state
  
  const showModal = (id) => {
    const photoData1 = photoData.find((photo) => {
      return photo.id === id
    })
    console.log(photoData1);
    setPhotoSelected(photoData1)
  }


return (
  <div className="App">
    <HomeRoute photos={photoData} topics={topics}  toggleFavorite={toggleFavorite} favorites={favorites} showModal={showModal}/>
   {isShowModal && <PhotoDetailsModal photos={photoData} photoData={photoData}   toggleFavorite={toggleFavorite} favorites={favorites} showModal={setShowModalState}/>}
  </div>
)
}

export default App

