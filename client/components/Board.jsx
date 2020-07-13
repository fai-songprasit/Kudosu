import React from 'react'
import {connect} from 'react-redux'

const Board = (props) => {
  console.log(props.board)
  //need to make it map and render each inidividual array inside as a row
    return (
      <>
        <p>a sudoku board will show up here!</p>
        <p>drawboard function here</p>
      </>
    )
  }
  
function mapStateToProps(globalState) {
  return {
    board: globalState.board,
  }
}

export default connect(mapStateToProps)(Board)