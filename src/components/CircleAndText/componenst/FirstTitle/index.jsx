import { useCallback, useState, useEffect } from 'react'
const FirstTitle = ({ title, second }) => {
  const [content, setContent] = useState('')

  const info = useCallback(() => {
    if (title.includes(' - ')) {
      const [part1, part2] = title.split(' - ')

      return (
        <div className='flex flex-col'>
          <span>{part1}</span>
          <span className='font-light'>{part2}</span>
        </div>
      )
    }
    return title
  }, [title])

  useEffect(() => {
    setContent(info())
  }, [info])

  return (
    <h2
      className={`${
        second === 'textCircle' ? 'hidden' : ''
      } font-bold text-center text-2xl md:text-6xl text-carbonBlue mt-4 md:mt-20`}
    >
      {content}
    </h2>
  )
}

export default FirstTitle
