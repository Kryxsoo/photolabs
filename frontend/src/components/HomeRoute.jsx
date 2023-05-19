import React from 'react';

import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import topics from '../mocks/topics.json'
import photos from "../mocks/photos.json"

// Note: Rendering a single component to build components in isolation
const HomeRoute = () => {
  return (
  <>
    <TopNavigationBar topics={topics}/>
    <PhotoList photos={photos} />
  </>
)}

export default HomeRoute;