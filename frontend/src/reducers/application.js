// Reducer functions for Favorite, Modal

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  SET_SELECTED_TOPIC: 'SELECT_SELECTED_TOPIC'
}

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      return {...state, favorites: action.payload}
    case ACTIONS.SELECT_PHOTO:
      return {...state, selectedPhoto: action.payload, isShowModal:!state.isShowModal}
    case ACTIONS.CLOSE_PHOTO:
      return {...state, isShowModal: !state.isShowModal}
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload}
    case ACTIONS.SET_TOPIC:
      return {...state, topicList: action.payload}
    case ACTIONS.SET_SELECTED_TOPIC:
      return {...state, selectedTopic: action.payload}
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      ); 
  }
}
