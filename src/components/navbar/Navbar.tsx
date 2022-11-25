import React from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import './navbar.css'
import { useDispatch } from 'react-redux'
import { open, setIsGuide } from '../../app/modalSlice'

function Navbar() {
  const dispatch = useDispatch()
  const handleOpenGuide = () => {
    dispatch(open())
    dispatch(setIsGuide(true))
  }
  return (
    <div className="navbar">
      <FaBars className="icons" />
      <h1 className="title">Wordle</h1>
      <div className="options">
        <AiOutlineQuestionCircle className="icons" onClick={handleOpenGuide} />
        <IoMdSettings className="icons" />
      </div>
    </div>
  )
}

export default Navbar
