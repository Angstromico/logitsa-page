import { useStates } from './IconsColor'
import { useBearStore } from '@/store'

const Images = ({ first, second, third, fourth, fifth }) => {
  const { chosenContent, deOrActivateLoopChosen, setChosenContent } =
    useBearStore()
  const { states } = useStates()
  const colorFull = states[chosenContent]

  const insertImage = (img, style) => {
    return <img className={style} src={img.image} alt={img.alt} />
  }

  const highlightIcon = (chosen) => {
    deOrActivateLoopChosen(false)
    setChosenContent(chosen)
  }

  const unHighlightIcon = () => {
    setChosenContent(0)
    deOrActivateLoopChosen()
  }

  return (
    <div className='images'>
      <div
        className='one'
        onMouseEnter={() => highlightIcon(1)}
        onMouseLeave={() => unHighlightIcon()}
      >
        {insertImage(first, colorFull.firstIcon)}
      </div>
      <div
        className='two'
        onMouseEnter={() => highlightIcon(2)}
        onMouseLeave={() => unHighlightIcon()}
      >
        {insertImage(second, colorFull.secondIcon)}
        {insertImage(third, colorFull.secondIcon)}
      </div>
      <div
        className='one'
        onMouseEnter={() => highlightIcon(3)}
        onMouseLeave={() => unHighlightIcon()}
      >
        {insertImage(fourth, colorFull.thirdIcon)}
      </div>
      <div
        className='one'
        onMouseEnter={() => highlightIcon(4)}
        onMouseLeave={() => unHighlightIcon()}
      >
        {insertImage(fifth, colorFull.fourthIcon)}
      </div>
    </div>
  )
}
export default Images
