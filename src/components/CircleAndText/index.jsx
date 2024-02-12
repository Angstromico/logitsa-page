import style from './style.module.scss'
import { useState, useEffect, useCallback } from 'react'
import { useFunctions } from '@/Hooks'
import { getCircleTextInfo, getTwoCirclesTextInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import FirstTitle from './componenst/FirstTitle'
import SecondTitle from './componenst/SecondTitle'
import { useBearStore } from '@/store'

export default function Index({
  iDInfo,
  second = 'textCircle',
  iD = 'first',
  version = 'default',
  notReverse = false,
  thinerText = false,
  first = false,
  closer = false,
  guanacaste = false,
  align = false,
  square = false,
  secondSquare = false,
  secondMain,
  closetext = false,
}) {
  let typeCircleText
  let firstOrSecond = false
  let reverse = false
  if (version === 'default') typeCircleText = getCircleTextInfo(iDInfo, second)
  if (version === 'firstOfTwo' || version === 'twoOfTwo') {
    typeCircleText = getTwoCirclesTextInfo(iDInfo)
    if (version === 'twoOfTwo') firstOrSecond = 'RightTextCircle'
    if (version === 'firstOfTwo') {
      firstOrSecond = 'LeftTextCircle'
      notReverse ? (reverse = false) : (reverse = true)
    }
  }

  const { loading, error, data } = useQuery(typeCircleText)
  const { lang } = useBearStore()
  const { splitIntoParagraphs, generateImgSrc, scrollDetect } = useFunctions()
  const [showImage, setShowImage] = useState('')
  const [srcImage, setSrcImage] = useState('')
  const [marginTop, setMarginTop] = useState('')
  const [textInfo, setTextInfo] = useState({
    title: '',
    content: '',
  })
  let eTitle = ''
  let sTitle = ''
  let eContent = ''
  let sContent = ''
  let src = ''

  const handleElementInView = useCallback(() => {
    setShowImage(style.slideToView)
  }, [])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        if (iD !== 'first') return
        const slider = document.querySelector('.slider-container')
        !slider ? setMarginTop('7rem') : setMarginTop('')
      }, [400])
      scrollDetect(iD, handleElementInView)
      setSrcImage(src)
      const t = lang === 'en' ? eTitle : sTitle
      const c = lang === 'en' ? eContent : sContent
      setTextInfo({ title: t, content: c })
    }
  }, [
    scrollDetect,
    iD,
    loading,
    src,
    handleElementInView,
    lang,
    eTitle,
    sTitle,
    eContent,
    sContent,
  ])

  if (loading) return
  if (error) return <p>Error</p>

  let textCircle

  if (!firstOrSecond) {
    textCircle = data.page.data.attributes[second]
  } else {
    textCircle = data.page.data.attributes.TwoTextCircles[firstOrSecond]
  }

  if (!textCircle) return
  const { title, content, image, titulo, contenido } = textCircle
  const { url, alternativeText } = image.data.attributes
  eTitle = title
  sTitle = titulo === undefined ? '' : titulo
  eContent = content
  sContent = !sContent ? (contenido === undefined ? '' : contenido) : sContent
  src = generateImgSrc(url)

  return (
    <div
      className={`w-full relative ${
        closer ? 'xl:mt-[-15rem] xl:mb-[-10rem]' : ''
      } ${guanacaste ? 'mt-40' : ''} title`}
    >
      <FirstTitle title={textInfo.title} second={second} />

      <div
        className={`${
          reverse ? style.reverse : secondMain ? style.reverse : ''
        } ${style.cContainer} ${
          firstOrSecond === 'RightTextCircle' && !first ? style.secundary : ''
        } ${align ? style.align : ''} ${secondSquare ? style.square : ''} ${
          square ? style.sq : ''
        }`}
        style={{ marginTop, maxWidth: square ? '1650px' : '' }}
      >
        {!square && (
          <div className={style.imageContainer}>
            <img
              className={`${showImage} ${guanacaste ? style.guanacaste : ''} ${
                second === 'textCircle' ? '' : style.biggerImg
              } ${secondMain ? style.homeSecond : ''}`}
              id={iD}
              src={srcImage}
              alt={alternativeText}
            />
          </div>
        )}
        {square && (
          <div className={style.square}>
            <img src={srcImage} alt={alternativeText} />
          </div>
        )}
        <div
          className={`${style.textContainer} ${
            secondMain ? style.homeSecond : ''
          } ${closetext ? style.close : ''}`}
        >
          <SecondTitle
            title={textInfo.title}
            second={second}
            thinerText={thinerText}
          />
          {splitIntoParagraphs(textInfo.content)}
          {guanacaste && (
            <div className='flex justify-center items-center mt-16'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://mailchi.mp/cinde/primer-vuelo-de-carga-consolidada-con-exportacin-de-productos-de-manufactura-avanzada-y-dispositivos-aterriza-en-guanacaste-835704?e=0aae833df7'
              >
                {lang === 'en' ? 'Read more here' : 'Leer más aquí'}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
