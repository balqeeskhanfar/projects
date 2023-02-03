import './index.css'
import Board from './Board'
import React, { useState } from 'react';

function Game(){
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ],)
  const [stepNumber, setStepNumber] = useState(0)
  const current = history[stepNumber].squares;
  var nextValue = calculateNextValue(current)
  const winner =  calculateWinner(current)
  const status = calculateStatus(winner, current, nextValue)
  
 

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  function jumpTo(step) {
    setStepNumber(step)
  }

  function handleClick(square) {
    const historyy = history.slice(0, stepNumber + 1);
    const current = historyy[historyy.length - 1];
    const squares = current.squares.slice();

    if (winner || squares[square]) {
      return
    }
    setStepNumber(historyy.length)
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue

    setHistory( historyy.concat([{
      squares: squaresCopy,
    }]),)
  }
  
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current}
            onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
          <div className='stat'>{status}</div>
          <ol>{moves}</ol>
        </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: game`
    : `Next player: ${nextValue}`
}


export default Game
