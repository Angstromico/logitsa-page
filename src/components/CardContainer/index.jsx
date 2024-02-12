import CardCircle from '@/components/CardCircle'
import { getCardTitle } from '@/api/queries'
import { useQuery } from '@apollo/client'

const CardContainer = ({ iDInfo, cardNumbers = [0, 1, 2] }) => {
  const { loading, error, data } = useQuery(getCardTitle(iDInfo))

  if (loading) return
  if (error) return <p>Error</p>

  const container = data.page.data.attributes

  if (!container) return

  const { CardContainerTitle: title } = container

  return (
    <>
      <h2 className='font-bold text-3xl md:text-4xl text-center my-16 py-16 text-carbonBlue'>
        {title}
      </h2>
      <div className='max-w-screen-2xl w-full px-2 mx-auto my-8 flex flex-wrap justify-center items-start gap-4'>
        {cardNumbers.map((number) => {
          return <CardCircle key={number} iDInfo={iDInfo} cardNumber={number} />
        })}
      </div>
    </>
  )
}
export default CardContainer
