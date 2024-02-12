import { getTitleAndImgesInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import { Link } from 'react-router-dom'
import { useBearStore } from '@/store'

const TitleAndImages = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getTitleAndImgesInfo(iDInfo))
  const { generateImgSrc, scrollToTop } = useFunctions()
  const { lang } = useBearStore()

  const textToLowerCase = (text) => {
    if (text === 'Customs Brokerage Services') text = 'brokerage'
    return text.toLowerCase()
  }

  if (loading) return
  if (error) return <p>Error</p>

  const infoImages = data.page.data.attributes.InfoImages

  if (!infoImages) return

  const { title, TitleImages, titulo } = infoImages

  return (
    <div className='mainContainer'>
      <h2>{lang === 'en' ? title : titulo}</h2>
      <div className='titleImagesContainer'>
        {TitleImages.map((tAI) => {
          const { title, image, titulo, content, contenido } = tAI
          const url = generateImgSrc(image.data.attributes.url)

          return (
            <div
              key={title}
              className='imgContainer'
              style={{ backgroundImage: `url(${url})` }}
            >
              <h3>{lang === 'en' ? title : titulo}</h3>
              <div className='underline'></div>
              <button type='button'>
                <Link
                  onClick={() => scrollToTop()}
                  to={`/${textToLowerCase(title)}`}
                >
                  {lang === 'en' ? content : contenido}
                </Link>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TitleAndImages
