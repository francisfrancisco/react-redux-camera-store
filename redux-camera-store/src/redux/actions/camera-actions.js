import axios from 'axios';
export const ADD_CAMERA_TO_CART_SUCCESS = 'ADD_CAMERA_TO_CART_SUCCESS';
export const ADD_CAMERA_TO_CART_FAIL = 'ADD_CAMERA_TO_CART_FAIL';
export const REMOVE_CAMERA_FROM_CART_SUCCESS = 'REMOVE_CAMERA_FROM_CART_SUCCESS';
export const REMOVE_CAMERA_FROM_CART_FAIL = 'REMOVE_CAMERA_FROM_CART_FAIL';
export const FETCH_CAMERAS = 'FETCH_CAMERAS';

export const fetchCameras = () => {
  return dispatch => {
  axios.get('http://localhost:8082/api/cameras')
  .then(res => dispatch({
    type: FETCH_CAMERAS,
    payload: res.data
  }));
  }
}

export const addCamera = id => {
  return dispatch => {
    axios.patch(`http://localhost:8082/api/cameras/${id}/add`)
    .then(res => dispatch({
      type: ADD_CAMERA_TO_CART_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ADD_CAMERA_TO_CART_FAIL,
      payload: err
    }))
  }
}

export const removeCamera = id => {
  return dispatch => {
    axios.patch(`http://localhost:8082/api/cameras/${id}/remove`)
    .then(res => dispatch({
      type: REMOVE_CAMERA_FROM_CART_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: REMOVE_CAMERA_FROM_CART_FAIL,
      payload: err
    }))
  }
}
