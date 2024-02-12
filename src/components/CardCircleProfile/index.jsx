import TextSection from './TextSection'
import SocialsSection from './SocialsSection'

const Index = ({ title, name, linkedin, mail, urlImg, altImg }) => {
  return (
    <div className='max-w-lg rounded mx-auto mb-5 text-bluePalette'>
      <img
        className='mx-auto w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64  rounded-[50%] shadow-lg object-cover'
        src={urlImg}
        alt={altImg}
      />
      <div className='mt-5 bg-white  rounded flex flex-col justify-center items-center shadowCustom'>
        <TextSection props={{ title, name }} />
        <SocialsSection props={{ linkedin, mail }} />
      </div>
    </div>
  )
}

export default Index
