const TextAreaInput = (props) => {
  return (
    <div className='campo'>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        name={props.name}
        className={props.error}
        id={props.name}
        cols={props.cols}
        rows={props.rows}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  )
}

export default TextAreaInput
