const ButtonInput = ({ valueBtn = 'Send' }) => {
  return (
    <div className='input__send'>
      <input type='submit' value={valueBtn} className='btn-form' />
    </div>
  )
}
export default ButtonInput
