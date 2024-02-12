const ErrorMessage = ({ activate, message }) => {
  return <>{activate && <p className='error_field'>{message}</p>}</>
}
export default ErrorMessage
