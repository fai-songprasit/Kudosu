import React from 'react'
import DrawBoard from './DrawBoard'
import {connect} from 'react-redux'

const Board = (props) => {
    return (
      <>
        <p>show rules</p>
        <DrawBoard data={props}/>
      </>
    )
  }
  
function mapStateToProps(globalState) {
  return {
    board: globalState.board,
  }
}

export default connect(mapStateToProps)(Board)