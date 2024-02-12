import { useQuery } from '@apollo/client'
import { useBearStore } from '@/store'
import { getPresentationImg } from '@/api/queries'
import { useFunctions } from '@/Hooks'

const PresentationImg = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getPresentationImg(iDInfo))
  const { headerHeight } = useBearStore()
  const { generateImgSrc } = useFunctions()

  if (loading) return
  if (error) return

  const imgInfo = data.page.data.attributes.PresentationImg.data.attributes
  const { url, alternativeText } = imgInfo
  const imgUrl = generateImgSrc(url)

  return (
    <img
      style={{
        marginTop: `${headerHeight}px`,
        width: '100%',
        marginBottom: '-8rem',
      }}
      src={imgUrl}
      alt={alternativeText}
    />
  )
}

export default PresentationImg
