import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import Square from '../square/Square'
import './board.css'

const Board: React.FC = () => {
  const board = useSelector((state: RootState) => state.boardState.board)
  return (
    <div className="board">
      {board.map((square, index) => (
        <Square value={square} index={index} key={index} />
      ))}
    </div>
  )
}

export default Board
