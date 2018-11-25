import {
  ADD_CAMERA_TO_CART_SUCCESS,
  ADD_CAMERA_TO_CART_FAIL,
  REMOVE_CAMERA_FROM_CART_SUCCESS,
  REMOVE_CAMERA_FROM_CART_FAIL,
  FETCH_CAMERAS} from '../actions/camera-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_CAMERA_TO_CART_SUCCESS:
      return [...state, action.payload]

    case ADD_CAMERA_TO_CART_FAIL:
      return action.payload

    case REMOVE_CAMERA_FROM_CART_SUCCESS:
      return state.filter(camera => camera.id !== Number(action.payload))

    case REMOVE_CAMERA_FROM_CART_FAIL:
      return action.payload

    case FETCH_CAMERAS:
      return action.payload

    default:
      return state
  }
}
