import React from 'react'

const DrawBoard = (props) => {
    //need a way of indentifying which cell is being selected
   
    //if arr=0 && <input id={cellIndex}>
   
    //splice (index, 1, {input}) to put it back in array
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