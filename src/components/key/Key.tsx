import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCheckPosition, increasePosition, setBoard } from '../../app/boardSlice'
import type { RootState } from '../../app/store'
import './key.css'

interface Props {
  value: string
}

const Key: React.FC<Props> = ({ value }) => {
  const { board, position, row } = useSelector((state: RootState) => state.boardState)
  const dispatch = useDispatch()
  let currentRow = Math.floor(position / 5)

  const handleTyping = () => {
    if (position >= 30) return
    if(currentRow > row) return

    const newBoard = [...board]
    newBoard[position] = value
    dispatch(setBoard(newBoard))
    dispatch(increasePosition())
    dispatch(increaseCheckPosition())
  }

  return (
    <div className="key" onClick={handleTyping}>
      {value}
    </div>
  )
}

export default Key
