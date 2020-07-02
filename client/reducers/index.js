import {combineReducers} from 'redux'

import errorMessage from './error'
import waiting from './waiting'
import board from './board'

export default combineReducers({
  errorMessage,
  waiting,
  board,
})