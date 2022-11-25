import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { playAgain, setBoard } from '../../app/boardSlice'
import { close, setIsGuide } from '../../app/modalSlice'
import { RootState } from '../../app/store'
import guide from '../../assets/guide.png'

function ModalComponent() {
  const { isOpen, title, content, isGuide } = useSelector((state: RootState) => state.modalState)
  const { board } = useSelector((state: RootState) => state.boardState)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(close())
    dispatch(setIsGuide(false))
  }

  const handlePlayAgain = () => {
    const newBoard = [...board].map((letter) => (letter = ''))
    dispatch(setBoard(newBoard))
    dispatch(playAgain())
    dispatch(close())
  }

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        {!isGuide && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>
          <p>{content}</p>
          {isGuide && <img src={guide} alt="" className="guide" style={{ width: '456px', margin: 'auto' }} />}
        </Modal.Body>
        {!isGuide && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlePlayAgain}>
              Play again
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  )
}

export default ModalComponent
