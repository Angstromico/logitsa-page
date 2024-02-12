import linkdinIcon from '@/assets/icons/linkedinIcon.png'
import mailIcon from '@/assets/icons/mailIcon.png'

const SocialsSection = ({ props }) => {
  const { linkedin, mail } = props
  const email = 'mailto:' + mail
  return (
    <div className='flex center gap-4 items-center p-4 m-auto'>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        <img className='w-6 md:w-8' src={linkdinIcon} alt='Linkdin Icon' />
      </a>
      <a href={email} target='_blank' rel='noopener noreferrer'>
        <img className='w-7 md:w-9' src={mailIcon} alt='Mail Icon' />
      </a>
    </div>
  )
}
export default SocialsSection
