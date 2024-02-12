import { useState, useEffect, useRef } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useBearStore } from '@/store'

const SelectInputComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  const { lang } = useBearStore()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    props.onChange(option) // call the onChange callback function passed down from the parent component
  }

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  const options = props.options.map((option, index) => (
    <li key={index} onClick={() => handleOptionClick(option.option)}>
      {lang === 'en' ? option.option : option.opcion}
    </li>
  ))

  return (
    <div className='campo'>
      <legend className='mb-1'>{props.legend}</legend>
      <div className='custom-select'>
        <div
          className={`selected-option ${!selectedOption ? 'no-selected' : ''} ${
            isOpen ? 'no-rounded' : ''
          } ${props.error}`}
          onClick={handleToggle}
        >
          {selectedOption || props.placeholder}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`arrow ${isOpen ? 'up' : 'down'}`}
          />
        </div>
        <ul
          ref={ref}
          className={`options ${
            isOpen ? 'open' : ''
          } absolute top-[${height}] left-0 w-full`}
        >
          {options}
        </ul>
      </div>
    </div>
  )
}

export default SelectInputComponent
