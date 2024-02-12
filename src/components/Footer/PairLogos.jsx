import style from './style.module.scss'
import cinde from '@/assets/icons/cinde.png'
import iata from '@/assets/icons/iata.png'
import inteco from '@/assets/icons/inteco.png'
import iqnet from '@/assets/icons/iqnet.png'

export default function PairLogos() {
  return (
    <div className={style.logos}>
      <div className={style.images}>
        <img src={cinde} alt='Logo' className={style.logo} />
        <div className={style.divider}></div>
        <img src={iata} alt='Logo' className={style.logo} />
        <div className={style.divider}></div>
        <img src={inteco} alt='Logo' className={style.logo} />
        <div className={style.divider}></div>
        <img src={iqnet} alt='Logo' className={style.logo} />
      </div>
    </div>
  )
}
