import logo from '@/assets/img/logo.png'

const Loading = () => {
  return (
    <div className='loadingContainer'>
      <div className='imgContainer'>
        <img src={logo} alt='logo' />
      </div>
      <h2>Loading...</h2>
    </div>
  )
}
export default Loading
