import React, { useEffect, useState } from 'react'
import './square.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

interface Props {
  value: string
  index: number
}

const Square: React.FC<Props> = ({ value, index }) => {
  // Redux state
  const { checkPosition, row, correctWord } = useSelector((state: RootState) => state.boardState)

  // State
  const [correct, setCorrect] = useState<boolean>(false)
  const [almost, setAlmost] = useState<boolean>(false)
  const [wrong, setWrong] = useState<boolean>(false)

  let status: any =
    Math.floor(index / 5) < row && (correct ? 'correct' : almost ? 'almost' : 'wrong')

  useEffect(() => {
    if (correctWord[checkPosition] === value) {
      setCorrect(true)
    } else if (correctWord.includes(value) === false && !correct && value !== '') {
      setWrong(true)
    } else if (correctWord.includes(value) === true && !correct && value !== '') {
      setAlmost(true)
    }

    return () => {
      setCorrect(false)
      setAlmost(false)
      setWrong(false)
    }
  }, [value])

  // Framer motions
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      duration: 0.1,
    }),
    unfilled: () => ({
      scale: [0.8, 1],
      duration: 0.1,
    }),
  }

  return (
    <motion.div
      animate={value ? 'filled' : 'unfilled'}
      variants={variants}
      className="square"
      id={String(status)}
    >
      {value}
    </motion.div>
  )
}

export default Square
