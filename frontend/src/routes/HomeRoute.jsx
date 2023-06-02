import React  from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

// HomeRoute of the main page
const HomeRoute = (props) => {

  return (
  <>
    <TopNavigationBar topics={props.topics} favorites={props.favorites}/>
    <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} favorites={props.favorites} setShowModal={props.setShowModal} showModal={props.showModal}/>
  </>
)}

export default HomeRoute;