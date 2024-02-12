import { useState } from 'react'

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      type='button'
      className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-1000 ease-in-out'
      aria-label='Main menu'
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className='h-12 w-12'
        stroke='currentColor'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          className={isOpen ? 'hidden' : 'inline-flex'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
        <path
          className={isOpen ? 'inline-flex' : 'hidden'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </button>
  )
}

export default HamburgerButton
