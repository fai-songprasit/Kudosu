import React from 'react'

const DrawBoard = (props) => {
    //need to move to a draw board section
    //make 0s replacable with inputs
    //need a way of indentifying which cell is being selected
    //workout how to give each cell a key
    return (
        <>
        {props.data.board.map(row => {
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

export default DrawBoard