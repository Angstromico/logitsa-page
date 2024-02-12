import Texts from '../Texts'
import Images from '../Images'
import CertificationsContainer from '../CertificationsContainer'

const CertificationsContent = ({
  first,
  second,
  third,
  fourth,
  fifth,
  title,
  text,
  mobile = false,
}) => {
  return (
    <CertificationsContainer mobile={mobile}>
      <Images
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        fifth={fifth}
      />
      <Texts title={title} content={text} />
    </CertificationsContainer>
  )
}

export default CertificationsContent
