import { useEffect, useReducer } from "react";
import { ACTIONS } from "../reducers/application";
import reducer from "../reducers/application";
import axios from "axios";

// Toggles favorite
export default function useApplicationData () {
  const [state, dispatch] = useReducer(reducer, {favorites:[], photoData:[], isShowModal:false, topicList:[], selectedPhoto:{}})

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
    .then((res) => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: res.data})
    })
  }, [])
  

  const toggleFavorite = (id) => {
    const currentFavorites = [...state.favorites]
    if (state.favorites.includes(id)) {
      const index = currentFavorites.findIndex((findID) => {
        return findID === id
      })
      currentFavorites.splice(index, 1)
    } else {
      currentFavorites.push(id)
    }
    dispatch({type: ACTIONS.TOGGLE_FAVORITE, payload: currentFavorites})
  }

  const setPhotoSelected = (photoData) => {
    console.log(photoData)
    if (state.isShowModal) {
      return
    }
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: photoData})
  }
  const setShowModalState = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO})
  }
  return {
    state, toggleFavorite, setPhotoSelected, setShowModalState
  }
}


