import { useState, useEffect, useCallback } from 'react'

const SliderChild = ({ title, content, background = '' }) => {
  const [titleSize, setTitleSize] = useState({ width: 0 })
  const backgroundChanger = useCallback(() => {
    const titleElement = document.querySelector('.titleSlider')
    const words = titleElement.textContent.split(' ')
    const longestWordLength = words.reduce((acc, cur) => {
      return Math.max(acc, cur.length)
    }, 0)

    const fontSize = parseFloat(
      window.getComputedStyle(titleElement).getPropertyValue('font-size')
    )
    const width = longestWordLength * fontSize

    return { width }
  }, [])

  useEffect(() => {
    setTitleSize(backgroundChanger())
  }, [backgroundChanger])
  return (
    <>
      <div
        style={{
          background: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='containerSliderChild'
      >
        <section className='wrapContent'>
          <section>
            <h2 className='titleSlider'>{title}</h2>
            <div
              className='subrayado'
              style={{ width: `${titleSize}px` }}
            ></div>
          </section>

          <p className='contentSlider'>{content}</p>
        </section>
      </div>
    </>
  )
}

export default SliderChild
