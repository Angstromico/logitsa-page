import { useState, useEffect, useCallback } from 'react'
import { useFunctions } from '@/Hooks'
import InnerCircle from './InnerCircle'
import { getCountCircleInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useBearStore } from '@/store'

const CountCircle = ({ idName, iDInfo, cardNumber = 0 }) => {
  const [scroll, setScroll] = useState(false)
  const [number, setNumber] = useState(0)
  const [increase, setIncrease] = useState(false)
  const { scrollDetect } = useFunctions()
  const { loading, error, data } = useQuery(getCountCircleInfo(iDInfo))
  const { lang } = useBearStore()
  let TheTitle = ''

  const showIncrementingNumber = useCallback((numb) => {
    let n = 0
    let speed = 195
    if (numb >= 30) speed = 100
    if (numb >= 100) speed = 36
    if (numb >= 1000) speed = 3.6

    const interval = setInterval(() => {
      n++
      if (n >= numb) {
        setNumber(numb)
        setIncrease(true)
        clearInterval(interval)
      } else {
        setNumber(n)
      }
    }, speed)
  }, [])

  const widthCounters = useCallback(() => {
    const circles = document.querySelectorAll('.circle-special')
    circles.forEach((circle) => {
      circle.classList.add('wilder')
    })
  }, [])
  const scrollTrue = useCallback(
    (numb) => {
      widthCounters()
      setScroll(true)
      showIncrementingNumber(numb)
    },
    [widthCounters, showIncrementingNumber]
  )

  const scrollHandler = useCallback(() => {
    if (loading) return
    if (!scroll) {
      scrollDetect(idName, scrollTrue, TheTitle)
    }
  }, [scrollDetect, idName, scrollTrue, loading, scroll, TheTitle])

  useEffect(() => {
    scrollHandler(TheTitle)
  }, [scrollHandler, TheTitle])

  if (loading) return
  if (error) return <p>Error</p>

  const card = data.page.data.attributes.CountCircle[cardNumber]

  if (!card) return

  const { number: title, content, color, PlusSymbol, contenido } = card
  TheTitle = title

  return (
    <div className='max-w-sm mx-auto mb-5 py-12 md:py-20' id={idName}>
      <div className='circle-special'>
        <InnerCircle color={color} card={cardNumber}>
          <h2 className='text-bluePalette text-2xl md:text-3xl font-bold z-10'>
            {!increase && <span>{number}</span>}
            {increase && <span>{TheTitle}</span>}
            {!PlusSymbol ? '' : '+'}
          </h2>
          <h3 className='text-center text-bluePalette text-base md:text-xl font-light z-10'>
            {lang === 'en' ? content : contenido}
          </h3>
        </InnerCircle>
      </div>
    </div>
  )
}
export default CountCircle
