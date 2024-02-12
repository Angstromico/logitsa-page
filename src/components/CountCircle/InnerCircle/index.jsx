import { useCallback, useEffect } from 'react'

const InnerCircle = ({ color, children, card }) => {
  const idName = `inner-${card}`
  const generateDividedCircle = useCallback(() => {
    const num = 20
    const container = document.getElementById(idName)
    container.style.setProperty('--num', num)
    container.style.setProperty(
      '--tan',
      Math.tan((((360 - num * 10) / num) * Math.PI) / 140)
    )
    for (let i = 0; i < num; i++) {
      const segment = document.createElement('div')
      segment.classList.add('segment')
      segment.style.setProperty('--n', i)
      i <= 5
        ? (segment.style.backgroundColor = 'transparent')
        : (segment.style.background = color)
      container.append(segment)
    }
    container.classList.add('num' + num)
  }, [color, idName])

  useEffect(() => {
    generateDividedCircle()
  }, [generateDividedCircle])

  return (
    <div
      className='inner-circle flex justify-center items-center flex-col'
      id={idName}
    >
      {children}
    </div>
  )
}
export default InnerCircle
