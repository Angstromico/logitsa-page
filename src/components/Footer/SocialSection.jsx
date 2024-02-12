import style from './style.module.scss'
import { Link } from 'react-router-dom'
import instagram from '@/assets/icons/instagram.png'
import linkedin from '@/assets/icons/linkedin.png'

const socials = [
  // { index: 'fb', icon: facebook, url: '#', name: 'Facebook' },
  {
    index: 'ig',
    icon: instagram,
    url: 'https://instagram.com/logitsa_?igshid=NDk5N2NlZjQ=',
    name: 'Instagram',
  },
  {
    index: 'lkd',
    icon: linkedin,
    url: 'https://www.linkedin.com/company/logitsa-cargo-service/',
    name: 'Linkedin',
  },
]

export default function SocialSection() {
  return (
    <div className={style.socialMedia}>
      <div className={style.whiteLine}></div>
      <div className={style.socials}>
        {socials.map(({ icon, url, index, name }) => (
          <div key={index} className={style.iconContainer}>
            <Link
              to={url}
              target='_blank'
              rel='noopener noreferrer'
              className={style.link}
            >
              <img src={icon} className={style.icon2} alt={name} />{' '}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
