import React from 'react';
import { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute.jsx';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from "./mocks/photos.json"

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ showModal, setShowModal ] = useState(false)
console.log("show model", showModal);
return (
  <div className="App">
    <HomeRoute photos={photos} setShowModal={setShowModal}/>
   {showModal && <PhotoDetailsModal photos={photos} setShowModal={setShowModal}/>}
  </div>
)
}

export default App

