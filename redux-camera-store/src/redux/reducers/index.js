import { combineReducers } from 'redux';
import cameraReducer from './camera-reducer'

export default combineReducers({
  cameras: cameraReducer
})
