const CertificationsContainer = (props) => {
  return (
    <div className={`certifications ${props.mobile ? 'hidden md:block' : ''}`}>
      <div className='certifications-elements'>{props.children}</div>
    </div>
  )
}

export default CertificationsContainer
