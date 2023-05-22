import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}


function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return
    case FAV_PHOTO_REMOVED:
      return
    case SELECT_PHOTO:
      return
    case CLOSE_PHOTO:
      return
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      ); 
  }
}

export default function useApplicationData  () {
  const [photoDetail, setPhotoDetail] = useState({})
  const [state, dispatch] = useReducer(reducer, 0)

  const photoInfo = (info) => {
    setPhotoDetail(info);
  }
  return {
    state, 
    dispatch,
    photoInfo,
    photoDetail
  }
} 