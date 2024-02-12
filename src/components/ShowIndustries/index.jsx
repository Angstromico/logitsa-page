import { getKeyIndustriesInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import { useBearStore } from '@/store'

const ShowIndustries = ({ iDInfo }) => {
  const { generateImgSrc } = useFunctions()
  const { keyIndex, setKeyIndex, lang } = useBearStore()
  const { loading, error, data } = useQuery(getKeyIndustriesInfo(iDInfo))

  const handleClick = (index) => {
    setKeyIndex(index)
  }

  if (loading) return
  if (error) return <p>Error</p>

  const KeyIndustries = data.page.data.attributes.KeyIndustries

  if (!KeyIndustries) return

  const { title, TitleImages, titulo } = KeyIndustries

  return (
    <div className='IndustrieContainer second'>
      <h2>{lang === 'en' ? title : titulo}</h2>
      <div className='optionsBar'>
        {TitleImages.map((info, index) => {
          const { title, titulo } = info

          return (
            <p
              key={index}
              className={keyIndex === index ? 'selected' : ''}
              onClick={() => handleClick(index)}
            >
              {lang === 'en' ? title : titulo}
            </p>
          )
        })}
      </div>
      <div className='showSection'>
        <div
          className='imgSample'
          style={{
            backgroundImage: `url(${generateImgSrc(
              TitleImages[keyIndex].image.data.attributes.url
            )})`,
          }}
        ></div>
        <div className='textSample'>
          <p className='text-sm sm:text-base md:text-lg 2xl:text-xl'>
            {lang === 'en'
              ? TitleImages[keyIndex].content
              : TitleImages[keyIndex].contenido}
          </p>
        </div>
      </div>
    </div>
  )
}
export default ShowIndustries
