const CheckboxInput = (props) => {
  return (
    <div className='campo checkbox'>
      <legend>{props.legend}</legend>
      <div className='input__check'>
        <input
          type='checkbox'
          name={props.name}
          id={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </div>
  )
}

export default CheckboxInput
