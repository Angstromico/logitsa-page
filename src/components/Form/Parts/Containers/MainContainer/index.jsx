const MainContainer = (props) => {
  return (
    <div className='containerVero'>
      <div className='main'>
        <div className='main__hijo'>{props.children}</div>
      </div>
    </div>
  )
}

export default MainContainer
