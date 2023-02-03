import React from 'react'
import './index.css'

export function Square(props) {
  return (
    <button className="square" onClick={props.onClick} data-testid="square">
      {props.value}
    </button>
  )
}