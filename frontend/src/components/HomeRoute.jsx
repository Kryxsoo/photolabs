import React,{useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import topics from '../mocks/topics.json'
import photos from "../mocks/photos.json"

// Note: Rendering a single component to build components in isolation
const HomeRoute = () => {
    const [favorites, setFavorites] = useState({})

const toggleFavorite = (id) => {
  if (favorites[id] === undefined) {
    setFavorites({...favorites, [id]: true})
  } else {
    setFavorites({...favorites, [id]: !favorites[id]})
  }
}

  return (
  <>
    <TopNavigationBar topics={topics}/>
    <PhotoList photos={photos} toggleFavorite={toggleFavorite} favorites={favorites}/>
  </>
)}

export default HomeRoute;