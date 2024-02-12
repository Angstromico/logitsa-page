import Logo from './Logo'
import PairLogos from './PairLogos'
import ContactSection from './ContactSection'
import SocialSection from './SocialSection'
import LocationSection from './LocationSection'
import Map from './Map'
import { useBearStore } from '@/store'
import Loading from '../Loading'

import style from './style.module.scss'

export default function Footer() {
  const { loaded } = useBearStore()

  if (!loaded) return <Loading />

  return (
    <>
      {loaded && (
        <footer className={style.footer}>
          <Logo />

          <PairLogos />

          <div className={style.sectionMiddle}>
            <ContactSection />

            <SocialSection />

            <LocationSection />
          </div>

          <div className={style.mapContainer}>
            <Map />
          </div>
        </footer>
      )}
    </>
  )
}
