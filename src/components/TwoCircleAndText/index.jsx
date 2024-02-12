import CircleAndText from '@/components/CircleAndText'
import { useLocation } from 'react-router-dom'

const TwoCircleAndText = ({ iDInfo }) => {
  const location = useLocation()
  const path = location.pathname
  const conditions =
    path === '/services' ||
    path === '/air' ||
    path === '/ocean' ||
    path === '/ground' ||
    path === '/brokerage'
  const condition = () => {
    if (conditions) return true
  }

  return (
    <div className={`${conditions ? 'mt-32' : 'flex flex-col-reverse'}`}>
      <CircleAndText
        iDInfo={iDInfo}
        iD={`${condition ? 'twoOfTwo' : 'firstOfTwo'}`}
        version={`${condition ? 'twoOfTwo' : 'firstOfTwo'}`}
        notReverse={condition ? true : false}
        first={!condition}
        square={conditions}
        secondMain={path === '/'}
      />
      <CircleAndText
        iDInfo={iDInfo}
        iD={`${condition ? 'firstOfTwo' : 'twoOfTwo'}`}
        version={`${condition ? 'firstOfTwo' : 'twoOfTwo'}`}
        thinerText={conditions && path !== '/brokerage'}
        closer={conditions}
        align={conditions}
        square={conditions}
        secondSquare={conditions}
        closetext={path === '/'}
      />
    </div>
  )
}
export default TwoCircleAndText
