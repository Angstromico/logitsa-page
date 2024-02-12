import CardCircleProfile from '@/components/CardCircleProfile'
import { getProfilesInfo, getCardTitle } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import { useBearStore } from '@/store'

const CardProfileContainer = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getProfilesInfo(iDInfo))
  const {
    loading: secondLoading,
    error: secondError,
    data: otherData,
  } = useQuery(getCardTitle(iDInfo))
  const { generateImgSrc } = useFunctions()
  const { lang } = useBearStore()

  if (loading || secondLoading) return
  if (error || secondError) return <p>Error</p>

  const profilesInfo = data.page.data.attributes.Profiles.Profiles
  const container = otherData.page.data.attributes
  if (!container) return

  const { CardContainerTitle: mainTitle } = container
  return (
    <div className='max-w-[1550px] w-full px-4 mx-auto mt-44 mb-8'>
      <h1 className='text-left font-bold text-[2rem] md:text-[3rem] mt-40 mb-12 text-carbonBlue'>
        {mainTitle}
      </h1>
      <div className='flex flex-wrap xl:flex-nowrap justify-center items-center gap-4'>
        {profilesInfo.map((profile) => {
          const { title, name, linkedin, mail, image, titulo } = profile
          const { url, alternativeText } = image.data[0].attributes
          const urlImg = generateImgSrc(url)
          return (
            <CardCircleProfile
              key={title}
              title={lang === 'en' ? title : titulo}
              name={name}
              linkedin={linkedin}
              mail={mail}
              urlImg={urlImg}
              altImg={alternativeText}
            />
          )
        })}
      </div>
    </div>
  )
}
export default CardProfileContainer
