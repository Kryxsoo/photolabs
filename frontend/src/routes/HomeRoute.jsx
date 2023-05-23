import React,{useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import topics from '../mocks/topics.json'


// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {

  return (
  <>
    <TopNavigationBar topics={topics} favorites={props.favorites}/>
    <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} favorites={props.favorites} setShowModal={props.setShowModal} showModal={props.showModal}/>
  </>
)}

export default HomeRoute;