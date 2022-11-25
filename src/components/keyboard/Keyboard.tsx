import React from 'react'
import { HiOutlineBackspace } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

import { decreasePosition, increaseRow, resetCheckPosition, setBoard } from '../../app/boardSlice'
import type { RootState } from '../../app/store'
import Key from '../key/Key'
import './keyboard.css'
import worldList from '../../assets/words.json'
import { open, setContent, setTitle } from '../../app/modalSlice'

const Keyboard: React.FC = () => {
  const keyboard = ['Q W E R T Y U I O P', 'A S D F G H J K L', 'Z X C V B N M']
  const { board, position, row, correctWord } = useSelector((state: RootState) => state.boardState)
  let currentRow = Math.floor((position - 1) / 5)
  const board5Words = `${board[position - 5]}${board[position - 4]}${board[position - 3]}${
    board[position - 2]
  }${board[position - 1]}`.toLowerCase()
  const dispatch = useDispatch()

  const handleDeleteTyping = () => {
    if (currentRow < row) return

    const newBoard = [...board]
    newBoard[position - 1] = ''
    dispatch(setBoard(newBoard))
    dispatch(decreasePosition())
  }
  console.log(correctWord, board5Words)

  const handleEnter = () => {
    if (worldList.words.includes(board5Words) === false) {
      toast.error('Invalid word')
      return
    }
    if (worldList.words.includes(board5Words) === true) {
      if (position % 5 === 0 && position !== 0) {
        dispatch(increaseRow())
        dispatch(resetCheckPosition())
      }
    }
    if (
      position === 30 &&
      worldList.words.includes(board5Words) &&
      correctWord !== board5Words.toUpperCase()
    ) {
      dispatch(open())
      dispatch(setTitle('Next time will be better!'))
      dispatch(setContent('The correct word is: ' + correctWord))
    }
    if (position <= 30 && correctWord === board5Words.toUpperCase()) {
      dispatch(open())
      dispatch(setTitle('Splendid'))
      dispatch(setContent('You are insanely smart!'))
    }
  }

  return (
    <>
      {keyboard.map((stringKeys, index) => (
        <div className="keyboard" key={index}>
          {stringKeys.split(' ').map((key, index) => (
            <div key={index}>
              <div className="letter_row">
                {key === 'Z' && (
                  <button className="key enter" onClick={handleEnter}>
                    Enter
                  </button>
                )}
                <Key key={index} value={key} />
                {key === 'M' && (
                  <button onClick={handleDeleteTyping} className="key back">
                    <HiOutlineBackspace />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default Keyboard
