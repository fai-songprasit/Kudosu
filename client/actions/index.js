import request from 'superagent'

export const REQUEST_BOARD = 'REQUEST_BOARD'
export const GET_BOARD = 'GET_BOARD'

export const requestBoard = () => {
  return {
    type: REQUEST_BOARD
  }
}

export const receiveBoard = (board) => {
  console.log('receive', board)
  return {
    type: GET_BOARD,
    board: board.map(board => board.board)
  }
}

export function fetchBoard (board) {
  // console.log('fetch1', board)
  return (dispatch) => {
    // console.log('fetch2', board)
    dispatch(requestBoard())
    return request
      .get(`/api/v1/kudosu/${board}`)
      .then(res => {
        // console.log(res.body)
        dispatch(receiveBoard(res.body))
      })
      .catch(err => console.log(err))
  }
}