import { useQuery } from '@apollo/client'
import { getCertificationsInfo } from '@/api/queries'
import { useFunctions } from '@/Hooks'
import CertificationsContent from './Parts/CertificationsContent'
import { useBearStore } from '@/store'

const Certifications = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getCertificationsInfo(iDInfo))
  const { generateImgSrc } = useFunctions()
  const { lang } = useBearStore()

  const generateImage = (stack) => {
    return {
      image: generateImgSrc(stack.data.attributes.url),
      alt: stack.data.attributes.alternativeText,
    }
  }

  if (loading) return
  if (error) return <p>Error</p>

  const certifications = data.page.data.attributes.Certifications

  const {
    FirstCertificate,
    SecondCertificate,
    ThirdCertificate,
    fourthCertificate,
    title,
    MainText,
    FirstText,
    SecondText,
    ThirdText,
    titulo,
    primerTexto,
    segundoTexto,
    tercerTexto,
    textoPrincipal,
    fourthText,
    cuartoTexto,
  } = certifications

  const firstImageInfo = generateImage(FirstCertificate)
  const { FirstImage, SecondImage } = SecondCertificate
  const secondImageInfo = generateImage(FirstImage)
  const thirdImageInfo = generateImage(SecondImage)
  const fourthImageInfo = generateImage(ThirdCertificate)
  const fifthImageInfo = generateImage(fourthCertificate)

  const enText = [MainText, FirstText, SecondText, ThirdText, fourthText]
  const esText = [
    textoPrincipal,
    primerTexto,
    segundoTexto,
    tercerTexto,
    cuartoTexto,
  ]

  return (
    <>
      <CertificationsContent
        first={firstImageInfo}
        second={secondImageInfo}
        third={thirdImageInfo}
        fourth={fourthImageInfo}
        fifth={fifthImageInfo}
        title={lang === 'en' ? title : titulo}
        text={lang === 'en' ? enText : esText}
      />
    </>
  )
}
export default Certifications
