const FormContainer = (props) => {
  return (
    <div className='main__form'>
      <form onSubmit={props.onSubmit} className='form'>
        {props.children}
      </form>
    </div>
  )
}

export default FormContainer
