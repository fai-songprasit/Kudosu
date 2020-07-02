import {RECEIVE_BOARD} from '../actions'

function board (state = [], action) {
    switch (action.type) {
      case RECEIVE_BOARD:
        return action.posts
  
      default:
        return state
    }
  }

export default board