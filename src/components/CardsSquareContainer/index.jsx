import Card from '@/components/Card'

const CardsSquareContainer = ({
  iDInfo,
  cardNumbers = [0, 1, 2, 3],
  title,
}) => {
  return (
    <div className='card-containers'>
      <div className='max-w-[1600px] px-2 md:px-4  w-full mx-auto my-8 cards'>
        <h2 className='title'>{title}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  items-center justify-center gap-4'>
          {cardNumbers.map((c) => {
            return <Card key={c} iDInfo={iDInfo} cardNumber={c} />
          })}
        </div>
      </div>
    </div>
  )
}
export default CardsSquareContainer
