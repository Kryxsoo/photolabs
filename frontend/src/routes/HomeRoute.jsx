import React,{useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import topics from '../mocks/topics.json'
import photos from "../mocks/photos.json"

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  
  const [favorites, setFavorites] = useState({})

  const [topFavorite, setTopFavorite] = useState(false)

  const handleFavoriteClick = () => {
    console.log("I've been clicked")
    // iterates through key of favorites, If one of the favorite key is liked. setTopFavorite to true
    let isFound = false;
    for ( let key in favorites ) {
      if (favorites[key]) {
        isFound = true
        setTopFavorite(true)
      }
    }
    // if any favorite key is not liked. setTopFavorite to false
    if (!isFound) {
      setTopFavorite(false)
    }
  }

const toggleFavorite = (id) => {
  if (favorites[id] === undefined) {
    setFavorites({...favorites, [id]: true})
  } else {
    setFavorites({...favorites, [id]: !favorites[id]})
  }
}

  return (
  <>
    <TopNavigationBar topics={topics} topFavorite={topFavorite}/>
    <PhotoList photos={photos} toggleFavorite={toggleFavorite} favorites={favorites} handleFavoriteClick={handleFavoriteClick} setShowModal={props.setShowModal}/>
  </>
)}

export default HomeRoute;