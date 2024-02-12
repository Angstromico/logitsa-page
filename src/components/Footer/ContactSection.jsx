import mail from '@/assets/icons/mail.png'
import phone from '@/assets/icons/phone.png'
import style from './style.module.scss'

const contact = [
  {
    index: 'ph',
    icon: phone,
    text: 'San José (506) 2441-3700',
    text2: 'Liberia (506) 2668-0043',
  },
  { index: 'mail', icon: mail, text: 'info@logitsa.com' },
]

export default function ContactSection() {
  return (
    <div className={style.contactSection}>
      <div className={style.whiteLine}></div>
      {contact.map(({ icon, index, text, text2 }) => (
        <div key={index} className={style.contactContainer}>
          <div>
            <img src={icon} className={style.icon1} alt={index} />
          </div>
          <p>{text}</p>
          {text2 && <p>{text2}</p>}
        </div>
      ))}
    </div>
  )
}
