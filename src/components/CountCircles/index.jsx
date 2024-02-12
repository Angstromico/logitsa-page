import CountCircle from '@/components/CountCircle'

const CountCircles = ({ iDInfo, cardNumbers = [0, 1, 2, 3] }) => {
  return (
    <div className='max-w-screen-2xl w-full px-2 mx-auto my-8 flex flex-wrap justify-center items-center gap-4'>
      {cardNumbers.map((number) => {
        return (
          <CountCircle
            iDInfo={iDInfo}
            key={number}
            cardNumber={number}
            idName={`Count-${number}`}
          />
        )
      })}
    </div>
  )
}
export default CountCircles
