import { getPageInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import CircleAndText from '@/components/CircleAndText'
import CardProfileContainer from '@/components/CardProfileContainer'
import TwoCircleAndText from '@/components/TwoCircleAndText'
import CountCircles from '@/components/CountCircles'
import TitleAndImages from '@/components/TitleAndImages'
import KeyIndustries from '@/components/KeyIndustries'
import Certifications from '@/components/Certifications'
import ShowIndustries from '@/components/ShowIndustries'
import CardContainer from '@/components/CardContainer'
import Form from '@/components/Form'
import Manifesto from '@/components/Manifesto'
import CardsSquareContainer from '@/components/CardsSquareContainer'
import Commitment from '@/components/Commitment'
import { Slider } from '@/components/Slider'
import PresentationImg from '@/components/PresentationImg'
import { useLocation } from 'react-router-dom'

const Page = ({ iDInfo, title }) => {
  const { loading, error, data } = useQuery(getPageInfo(iDInfo))

  const checkCondition = (component) => {
    try {
      if (component.Profiles) return true
      if (
        component.length > 0 ||
        component.title ||
        component.LeftTextCircle.title
      )
        return true
    } catch (error) {
      // console.log(error)
    }
    return false
  }

  const checkIntroImg = (component) => {
    try {
      if (component.data.attributes.url) return true
    } catch (error) {
      /* console.log(error) */
    }
  }

  const keyOrShowIndustries = (component) => {
    if (checkCondition(component)) {
      try {
        if (component.MainPage) {
          return 'show'
        }
      } catch (error) {
        // console.log(error)
      }
      return 'key'
    }
  }

  const location = useLocation()
  const path = location.pathname

  if (loading) return
  if (error) return <p>Error</p>

  const pageInfo = data.page.data.attributes

  return (
    <>
      {checkIntroImg(pageInfo.PresentationImg) && (
        <PresentationImg iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.Carrousel) && <Slider iDInfo={iDInfo} />}
      {keyOrShowIndustries(pageInfo.KeyIndustries) === 'show' && (
        <ShowIndustries iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.Profiles) && (
        <CardProfileContainer iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.CountCircle) && <CountCircles iDInfo={iDInfo} />}
      {checkCondition(pageInfo.textCircle) && <CircleAndText iDInfo={iDInfo} />}
      {pageInfo.Manifesto && <Manifesto iDInfo={iDInfo} />}
      {checkCondition(pageInfo.InfoImages) && (
        <TitleAndImages iDInfo={iDInfo} />
      )}

      {checkCondition(pageInfo.Commitment) && <Commitment iDInfo={iDInfo} />}

      {keyOrShowIndustries(pageInfo.KeyIndustries) === 'key' && (
        <KeyIndustries iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.Certifications) && (
        <Certifications iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.TwoTextCircles) && (
        <TwoCircleAndText iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.cardCircle) && <CardContainer iDInfo={iDInfo} />}
      {checkCondition(pageInfo.card) && (
        <CardsSquareContainer iDInfo={iDInfo} title={title} />
      )}
      {checkCondition(pageInfo.secondTextCircle) && (
        <CircleAndText
          iDInfo={iDInfo}
          second='secondTextCircle'
          iD={'second'}
          guanacaste={path === '/news'}
        />
      )}
      {checkCondition(pageInfo.Form) && <Form iDInfo={iDInfo} />}
    </>
  )
}
export default Page
