import style from './style.module.scss'
import logo from '@/assets/img/logo.png'

export default function Logo() {
  return (
    <div className={style.section}>
      <img src={logo} alt='Logo' className={style.logo} />
    </div>
  )
}
