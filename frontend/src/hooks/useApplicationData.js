import { useState } from "react";

// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   CLOSE_PHOTO: 'CLOSE_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// }


// function reducer(state, action) {
//   switch (action.type) {
//     case FAV_PHOTO_ADDED:
//       return
//     case FAV_PHOTO_REMOVED:
//       return
//     case SELECT_PHOTO:
//       return
//     case CLOSE_PHOTO:
//       return
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       ); 
//   }
// }

// export default function useApplicationData  () {
//   const [photoDetail, setPhotoDetail] = useState({})
//   const [state, dispatch] = useReducer(reducer)

//   const photoInfo = (info) => {
//     setPhotoDetail(info);
//   }
//   return {
//     state, 
//     dispatch,
//     photoInfo,
//     photoDetail
//   }
// } 
export default function useApplicationData () {
  const [state, setState] = useState({favorites:[], photoData:{}, showModal:false })
  const toggleFavorite = (id) => {
    const currentFavorites = [...state.favorites]
    if (state.favorites.includes(id)) {
      const index = currentFavorites.findIndex((findID) => {
        return findID === id
      })
      console.log("index: ", index)
      currentFavorites.splice(index, 1)
    } else {
      currentFavorites.push(id)
    }
    setState({...state, favorites: currentFavorites})
  }

  const setPhotoSelected = (photoData) => {
    if (state.showModal) {
      return
    }
    console.log('CheckingPhoto :', photoData);
    setState({...state, photoData, showModal:!state.showModal})
  }
  const setShowModalState = () => {
    setState({...state, showModal: !state.showModal})
  }
  return {
    state, toggleFavorite, setPhotoSelected, setShowModalState
  }
}