import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const REQUEST_BOARD = 'REQUEST_BOARD'

export const requestBoard = () => {
  return {
    type: REQUEST_BOARD
  }
}

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board: board.map(board => board.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchBoard (board) {
  return (dispatch) => {
    dispatch(requestBoard())
    return request
      .get(`/api/v1/sugoku/${board}`)
      .then(res => {
        dispatch(receiveBoard(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}