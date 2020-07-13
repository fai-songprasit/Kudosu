import React from 'react'
import {connect} from 'react-redux'

const Board = (props) => {
  //data comes through as board:[[....]]
  //need to make it map and render each inidividual array inside as a row
  //possibly require a map inside a map
  console.log(props)
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