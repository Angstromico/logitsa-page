import style from './style.module.scss'
import location from '@/assets/icons/location.png'
import { useBearStore } from '@/store'

const locationInfo = [
  {
    index: 'lo',
    icon: location,
    url: '/',
    text: 'In front of Juan Santamaría Intl. Airport. 50 meters west from fiesta Casino',
    text2: 'In front of Guanacaste Intl. Airport. Solarium Logistic Center',
  },
  {
    index: 'loo',
    icon: location,
    url: '/',
    text: 'En frente de Juan Santamaría Intl. Aeropuerto. a 50 metros al oeste de fiesta',
    text2:
      'En frente de Juan Guanacaste Intl. Aeropuerto. Solarium Centro Logistico',
  },
]

export default function Location() {
  const { lang } = useBearStore()

  return (
    <div className={style.location}>
      <div className={style.whiteLine}></div>
      <div className={style.whiteLineLeft}></div>
      <div className={style.whiteLineRight}></div>
      {locationInfo.map(({ icon, url, index, name, text, text2 }) => {
        if (
          (lang === 'en' && index === 'lo') ||
          (lang === 'es' && index === 'loo')
        ) {
          return (
            <div key={index} className={style.locationContainer}>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className={style.link}
              >
                <img src={icon} className={style.icon} alt={name} />
                <p className='max-w-[380px]  min-w-[250px] sm:min-w-[150px] px-1 text-center mb-5'>
                  {text}
                </p>
                <p className='max-w-[380px]  min-w-[250px] sm:min-w-[150px] px-1 text-center'>
                  {text2}
                </p>
              </a>
            </div>
          )
        }
        return null // Return null if the condition is not met
      })}
    </div>
  )
}
