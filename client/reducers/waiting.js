import {
    REQUEST_BOARD,
    GET_BOARD,
} from '../actions'
  
const waiting = (state = false, action) => {
    switch (action.type) {
        case REQUEST_BOARD:
            return true
        case GET_BOARD:
            return false
        default:
            return state
    }
}
  
  export default waiting
  