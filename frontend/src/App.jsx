import React from 'react';
import { useState } from 'react';

import './App.scss';
import HomeRoute from './components/HomeRoute.jsx';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ showModal, setShowModal ] = useState(false)
console.log("show model", showModal);
return (
  <div className="App">
    <HomeRoute setShowModal={setShowModal}/>
   {showModal && <PhotoDetailsModal setShowModal={setShowModal}/>}
  </div>
)
}

export default App

