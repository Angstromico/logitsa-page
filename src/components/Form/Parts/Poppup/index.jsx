import { useEffect, useRef } from 'react'
import Subtract from '../../../../assets/icons/Subtract.png'

const Poppup = ({ closeModal }) => {
  const popupRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [closeModal])

  return (
    <div className='poppupContainer' ref={popupRef}>
      <div className='innerPoppup'>
        <img src={Subtract} alt='Subtrack' />
        <p>
          The request has been sent, you will be contacted by mail or call in
          the next few hours
        </p>
        <button
          className='text-white bg-carbonBlue py-2 px-3 mt-10 rounded font-bold hover:bg-white hover:text-carbonBlue hover:scale-110 transition-all'
          to='/'
          onClick={() => closeModal()}
        >
          Close
        </button>
        {/* Modal here */}
      </div>
    </div>
  )
}

export default Poppup
