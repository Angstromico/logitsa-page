const Button = ({ text }) => {
  return (
    <div className='px-6 pt-4 pb-5 mx-auto w-full flex justify-center items-center md:absolute bottom-1 md:left-1/2 md:transform md:-translate-x-1/2'>
      <button
        type='button'
        className='bg-transparent hover:bg-white transition-all text-blue-700 text-xl lg:text-2xl hover:text-carbonBlue py-[0.01rem] px-[0.5rem] border-[2.8px] border-blue-500 hover:border-transparent rounded'
      >
        {text}
      </button>
    </div>
  )
}
export default Button
