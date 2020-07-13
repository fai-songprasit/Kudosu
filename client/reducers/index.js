import {combineReducers} from 'redux'
import waiting from './waiting'
import board from './board'

export default combineReducers({
  waiting,
  board,
})