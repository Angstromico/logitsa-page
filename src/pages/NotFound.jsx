import { Link } from 'react-router-dom'
import { useFunctions } from '@/Hooks'

const NotFound = () => {
  const { scrollToTop } = useFunctions()

  return (
    <div className='flex justify-center items-center w-full py-64 flex-col'>
      <h1 className='text-center text-6xl sm:text-7xl md:text-8xl text-carbonBlue'>
        Page Not Found
      </h1>
      <Link
        className='text-white bg-carbonBlue py-2 px-3 mt-10 rounded font-bold hover:bg-white hover:text-carbonBlue hover:scale-110 transition-all'
        to='/'
        onClick={() => scrollToTop()}
      >
        Come Back Home
      </Link>
    </div>
  )
}
export default NotFound
