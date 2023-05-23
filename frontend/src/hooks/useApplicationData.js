import { useReducer } from "react";

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO'
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      return {...state, favorites: action.payload}
    case ACTIONS.SELECT_PHOTO:
      return {...state, photoData: action.payload, showModal:!state.showModal}
    case ACTIONS.CLOSE_PHOTO:
      return {...state, showModal: !state.showModal}
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      ); 
  }
}


export default function useApplicationData () {
  const [state, dispatch] = useReducer(reducer, {favorites:[], photoData:{}, showModal:false})
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
    if (state.showModal) {
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