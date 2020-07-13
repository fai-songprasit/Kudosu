import React from 'react'
import {connect} from 'react-redux'

const Board = (props) => {
  console.log(props.board)
  //need to make it map and render each inidividual array inside as a row
  //need to move to a draw board section
  //make 0s replacable with inputs
    return (
      <>
        <p>a sudoku board will show up here!</p>
        <p>drawboard function here</p>
        {props.board.map(row => {
          console.log(row)
          return (
            <div>
              {row.map(cell => {
                return (
                  <span>
                    {cell}
                  </span>
                )
              })}
            </div>
          )
        })}
      </>
    )
  }
  
function mapStateToProps(globalState) {
  return {
    board: globalState.board,
  }
}

export default connect(mapStateToProps)(Board)