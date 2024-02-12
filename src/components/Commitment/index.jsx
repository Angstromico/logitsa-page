import { getCommitmentInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useBearStore } from '@/store'
import style from './style.module.scss'
import { useFunctions } from '@/Hooks'
import CertificationsContent from '../Certifications/Parts/CertificationsContent'

const Commitment = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getCommitmentInfo(iDInfo))
  const { lang } = useBearStore()
  const { generateImgSrc, splitIntoParagraphs } = useFunctions()

  const generateImage = (stack) => {
    return {
      image: generateImgSrc(stack.data.attributes.url),
      alt: stack.data.attributes.alternativeText,
    }
  }

  if (loading) return
  if (error) return

  const commitInfo = data.page.data.attributes.Commitment
  const {
    title,
    titulo,
    firstCertificate,
    secondCertificate,
    thirdCertificate,
    fourthCertificate,
    content,
    contenido,
    certificationsTitle,
    tituloCertificados,
    fifthCertificate,
    FirstText,
    primerTexto,
    SecondText,
    segundoTexto,
    ThirdText,
    tercerTexto,
    MainText,
    textoPrincipal,
    fourthText,
    cuartoTexto,
  } = commitInfo

  const firstImg = generateImage(firstCertificate)
  const secondImg = generateImage(secondCertificate)
  const thirdImg = generateImage(thirdCertificate)
  const fourthImg = generateImage(fourthCertificate)
  const fifthImg = generateImage(fifthCertificate)
  const images = [firstImg, secondImg, thirdImg, fourthImg, fifthImg]
  const enText = [MainText, FirstText, SecondText, ThirdText, fourthText]
  const esText = [
    textoPrincipal,
    primerTexto,
    segundoTexto,
    tercerTexto,
    cuartoTexto,
  ]

  return (
    <div className={style.commitmentContainer}>
      <div className={style.textContainer}>
        <h2>{lang === 'en' ? title : titulo}</h2>
      </div>
      <div className={style.textContainer}>
        {lang === 'en'
          ? splitIntoParagraphs(content)
          : splitIntoParagraphs(contenido)}
      </div>
      <CertificationsContent
        first={firstImg}
        second={secondImg}
        third={thirdImg}
        fourth={fourthImg}
        fifth={fifthImg}
        title={lang === 'en' ? certificationsTitle : tituloCertificados}
        text={lang === 'en' ? enText : esText}
        mobile={true}
      />

      <div className={style.mobileDesk}>
        {images.map((img, i) => {
          const { image, alt } = img

          return <img key={i} src={image} alt={alt} />
        })}
      </div>
    </div>
  )
}

export default Commitment
