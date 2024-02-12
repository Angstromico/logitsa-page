import { getManifestoInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import { useBearStore } from '@/store'

const Manifesto = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getManifestoInfo(iDInfo))
  const { lang } = useBearStore()
  const { splitIntoParagraphs } = useFunctions()

  if (loading) return
  if (error) return <p>Error</p>

  const manifesto = data.page.data.attributes.Manifesto

  if (!manifesto) return

  const { title, content, titulo, contenido } = manifesto

  return (
    <div className='bgVintage'>
      <h2>{lang === 'en' ? title : titulo}</h2>
      {splitIntoParagraphs(lang === 'en' ? content : contenido)}
    </div>
  )
}
export default Manifesto
