const TextSection = ({ props }) => {
  const { title, name } = props

  return (
    <div className='px-6 pt-4 text-center'>
      <h3 className='text-xl font-bold md:text-2xl lg:text-3xl mb-1'>
        {title}
      </h3>
      <p className='text-[0.65rem] md:text-sm lg:text-base mt-2'>{name}</p>
    </div>
  )
}
export default TextSection
