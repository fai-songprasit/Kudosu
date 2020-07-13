import {GET_BOARD} from '../actions'

function getBoard (state = [], action) {
    switch (action.type) {
      case GET_BOARD:
        return action.board
  
      default:
        return state
    }
}

export default getBoard