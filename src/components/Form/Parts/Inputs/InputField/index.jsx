const InputField = (props) => {
  return (
    <div className='campo'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={props.error}
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

export default InputField
