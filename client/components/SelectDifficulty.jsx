import React from 'react'
import Board from './Board'
import {connect} from 'react-redux'
import {fetchBoard} from '../actions'


class SelectDifficulty extends React.Component {
    state =  {
        value: 'random',
        clicked: false,
    }
  
    handleChange = (e) => {
        this.setState ({
            value: e.target.value,
        })
    }

    handleClick = (e) => {
        this.setState ({
            clicked: true,
        })
    }
    
    render () {
    const {dispatch} = this.props
        return (
            <div className="search">
                <h3>Select your difficulty</h3>
                <input type='text' onChange={this.handleChange}/>
                <button onClick={() => dispatch(fetchBoard(this.state.value)), this.handleClick}>
                    Generate Board
                </button>
                {this.state.clicked && <Board/>}
            </div>
        )
    }
  }
  
  export default connect()(SelectDifficulty)