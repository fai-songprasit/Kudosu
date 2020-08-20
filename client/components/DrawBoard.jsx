import React from 'react'

const DrawBoard = (props) => {

    //currently cannot find cell id using mapped row because it takes index of value
    //need to find index of all numbers including 0s
    //make cells still display of content is empty
    //splice (index, 1, {input}) to put it back in array

    const gameBoard = props.data.board

    return (
        <>
        {gameBoard.map(row => {
          return (
            <div id={gameBoard.indexOf(row).toString()} className="board">
              {row.map(cell => {
                return (
                  <span className="cell">
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

export default DrawBoard