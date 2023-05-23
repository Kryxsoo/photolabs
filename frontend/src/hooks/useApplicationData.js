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
      // console.log("Line 18:", action);
      return {...state, favorites: action.payload}
    case ACTIONS.SELECT_PHOTO:
      console.log("hello", action.payload.id);
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
  // const [state, setState] = useState({favorites:[], photoData:{}, showModal:false })
  const [state, dispatch] = useReducer(reducer, {favorites:[], photoData:{}, showModal:false})
  const toggleFavorite = (id) => {
    const currentFavorites = [...state.favorites]
    if (state.favorites.includes(id)) {
      const index = currentFavorites.findIndex((findID) => {
        return findID === id
      })
      // console.log("index: ", index)
      currentFavorites.splice(index, 1)
    } else {
      currentFavorites.push(id)
    }
    // console.log("47: ");
    dispatch({type: ACTIONS.TOGGLE_FAVORITE, payload: currentFavorites})
    // setState({...state, favorites: currentFavorites})
  }

  const setPhotoSelected = (photoData) => {
    if (state.showModal) {
      return
    }
    console.log('CheckingPhoto :', photoData);
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: photoData})
  }
  const setShowModalState = () => {
    // setState({...state, showModal: !state.showModal})
    dispatch({type: ACTIONS.CLOSE_PHOTO})
  }
  return {
    state, toggleFavorite, setPhotoSelected, setShowModalState
  }
}