const Intro = ({ title, content }) => {
  return (
    <div className='main__content'>
      <h2 className='main__title'>{title}</h2>
      <div className='text'>
        <p className='main__text'>{content}</p>
      </div>
    </div>
  )
}
export default Intro
