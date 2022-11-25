import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './app/store'
import Board from './components/board/Board'
import Keyboard from './components/keyboard/Keyboard'
import Modal from './components/modal/Modal'
import Navbar from './components/navbar/Navbar'

function App() {
  const { isOpen } = useSelector((state: RootState) => state.modalState)
  return (
    <>
      <Navbar />
      <Board />
      <Keyboard />
      {isOpen && <Modal />}
    </>
  )
}

export default App
