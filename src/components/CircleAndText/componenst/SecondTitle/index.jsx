import { useCallback, useState, useEffect } from 'react'
const SecondTitle = ({ title, second, thinerText }) => {
  const [content, setContent] = useState('')

  const info = useCallback(() => {
    if (title.includes(' - ')) {
      const [part1, part2] = title.split(' - ')

      return (
        <div className='flex flex-col'>
          <span>{part1}</span>
          <span className='font-light mt-4'>{part2}</span>
        </div>
      )
    }
    return <span className={`${thinerText ? 'font-light' : ''}`}>{title}</span>
  }, [title, thinerText])

  useEffect(() => {
    setContent(info())
  }, [info])

  return (
    <h2
      className={`${second !== 'textCircle' ? 'hidden mb-0 mt-0' : ''} ${
        thinerText ? 'font-light' : ''
      }`}
    >
      {content}
    </h2>
  )
}

export default SecondTitle
