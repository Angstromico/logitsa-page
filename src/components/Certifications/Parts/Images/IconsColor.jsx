import { useMemo } from 'react'

export const useStates = () => {
  const states = useMemo(
    () => [
      {
        firstIcon: '',
        secondIcon: '',
        thirdIcon: '',
        fourthIcon: '',
      },
      {
        firstIcon: 'colorFull',
        secondIcon: '',
        thirdIcon: '',
        fourthIcon: '',
      },
      {
        firstIcon: '',
        secondIcon: 'colorFull',
        thirdIcon: '',
        fourthIcon: '',
      },
      {
        firstIcon: '',
        secondIcon: '',
        thirdIcon: 'colorFull',
        fourthIcon: '',
      },
      {
        firstIcon: '',
        secondIcon: '',
        thirdIcon: '',
        fourthIcon: 'colorFull',
      },
    ],
    []
  )
  return { states }
}
