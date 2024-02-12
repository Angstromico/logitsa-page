import { useFunctions } from '@/Hooks'
import { useBearStore } from '@/store'

const TextSection = ({ props }) => {
  const { title, content, titulo, contenido } = props
  const { splitIntoParagraphs } = useFunctions()
  const { lang } = useBearStore()

  return (
    <div className='px-6 pt-4'>
      <h3 className='text-orangePink font-semibold text-center text-sm md:text-base mb-1'>
        {lang === 'en' ? title : titulo}
      </h3>
      {splitIntoParagraphs(
        lang === 'en' ? content : contenido,
        'text-center text-[0.9rem] w-48 sm:56 md:w-72 md:text-[1rem] lg:w-[22rem] pb-[5px]'
      )}
    </div>
  )
}
export default TextSection
