import { getKeyIndustriesInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import { useBearStore } from '@/store'
import { Link } from 'react-router-dom'

const KeyIndustries = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getKeyIndustriesInfo(iDInfo))
  const { generateImgSrc, scrollToTop } = useFunctions()
  const { setKeyIndex, lang } = useBearStore()

  const choseImage = (index) => {
    setKeyIndex(index)
    scrollToTop()
  }

  if (loading) return
  if (error) return <p>Error</p>

  const KeyIndustries = data.page.data.attributes.KeyIndustries

  if (!KeyIndustries) return

  const { title, TitleImages, titulo } = KeyIndustries

  return (
    <div className='IndustriesContainer'>
      <h2>{lang === 'en' ? title : titulo}</h2>
      <div className='gridIndustries'>
        {TitleImages.map((imgSample, index) => {
          const { title, image, titulo } = imgSample
          const url = generateImgSrc(image.data.attributes.url)

          return (
            <div className='imgContainer' key={title}>
              <Link
                to='/key-industries'
                className='imgSample'
                style={{ backgroundImage: `url(${url})` }}
                onClick={() => choseImage(index)}
              >
                <h3>{lang === 'en' ? title : titulo}</h3>
                <div className='underline'></div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default KeyIndustries
