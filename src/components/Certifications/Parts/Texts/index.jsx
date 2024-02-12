import { useState, useEffect } from 'react'
import { useBearStore } from '@/store'

const Texts = ({ title, content }) => {
  const [chosenContentRoot, setChosenContentRoot] = useState(0)
  const { chosenContent, setChosenContent, activeLoopChosen } = useBearStore()
  const length = content.length - 1

  useEffect(() => {
    if (activeLoopChosen) {
      const intervalId = setInterval(() => {
        setChosenContentRoot((prev) => (prev === length ? 0 : prev + 1))
        setChosenContent(chosenContentRoot)
      }, 5000)

      return () => clearInterval(intervalId)
    }
  }, [
    setChosenContent,
    chosenContent,
    chosenContentRoot,
    activeLoopChosen,
    length,
  ])

  const formatContent = (text) => {
    const regex = /\*\*(.*?)\*\*/g
    return text.replace(regex, `<strong>$1</strong>`)
  }

  const formattedContent = formatContent(content[chosenContent])

  return (
    <div className='texts'>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: formattedContent }} />
    </div>
  )
}
export default Texts
