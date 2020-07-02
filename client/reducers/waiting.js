import {
    SHOW_ERROR,
    REQUEST_BOARD,
    RECEIVE_BOARD} from '../actions'
  
const waiting = (state = false, action) => {
    switch (action.type) {
        case REQUEST_BOARD:
        return true

        case RECEIVE_BOARD:
        return false

        case SHOW_ERROR:
        return false

        default:
        return state
    }
}
  
  export default waiting
  