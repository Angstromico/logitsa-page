import { getCardInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import Button from './Button'
import TextSection from './TextSection'

const Index = ({ iDInfo, cardNumber = 0 }) => {
  const { loading, error, data } = useQuery(getCardInfo(iDInfo))
  const { generateImgSrc } = useFunctions()

  if (loading) return
  if (error) return <p>Error</p>

  const card = data.page.data.attributes.card[cardNumber]

  if (!card) return

  const { title, content, image, button, titulo, contenido } = card
  const { url, alternativeText } = image.data.attributes
  let src = generateImgSrc(url)

  return (
    <div className='max-w-lg w-full shadow-lg text-white mx-auto mb-5'>
      <img className='w-full h-auto md:h-72' src={src} alt={alternativeText} />
      <div className='bg-gradient-to-b h-auto sm:h-[20rem] md:h-[26rem] lg:h-[30rem] xl:h-[35.5rem] 2xl:h-[26rem] from-carbonBlue to-[#7CB9E8] md:relative'>
        <TextSection props={{ title, content, titulo, contenido }} />
        <Button text={button} />
      </div>
    </div>
  )
}

export default Index
