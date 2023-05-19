import React from 'react';

import './App.scss';
import HomeRoute from './components/HomeRoute.jsx';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <HomeRoute />
  </div>
)

export default App

