import axios from 'axios';
const ADD_CAMERA_TO_CART_SUCCESS = 'ADD_CAMERA_TO_CART_SUCCESS';
const ADD_CAMERA_TO_CART_FAIL = 'ADD_CAMERA_TO_CART_FAIL';
const REMOVE_CAMERA_FROM_CART_SUCCESS = 'REMOVE_CAMERA_FROM_CART_SUCCESS';
const REMOVE_CAMERA_FROM_CART_FAIL = 'REMOVE_CAMERA_FROM_CART_FAIL';
const FETCH_CAMERAS = 'FETCH_CAMERAS';

export const fetchCameras = () => {
  return dispatch => {
  axios.get('http://localhost:8082/api/cameras')
  .then(res => dispatch({
    type: FETCH_CAMERA_SUCCESS,
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
      type: REMOVE_CAMERA_FROM_CART_SUCCESS_CAMERA_TO_CART_SUCCESS,
      payload: id
    }))
    .catch(err => dispatch({
      type: REMOVE_CAMERA_FROM_CART_FAIL_CAMERA_TO_CART_FAIL,
      payload: err
    }))
  }
}
