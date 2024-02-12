import { useCallback } from 'react'
import { useBearStore } from '@/store'

export const useFunctions = () => {
  const { setLoaded } = useBearStore()

  const isElementInViewport = useCallback((el) => {
    const rect = el.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0
    return vertInView
  }, [])

  function formatTextWithAsterisks(text) {
    const regex = /\*\*(.*?)\*\*/g
    return text.replace(regex, `<span class="font-bold">$1</span>`)
  }

  const splitIntoParagraphs = (text, align = '') => {
    const paragraphs = text.split(/\s{2,}/g)
    const sample = paragraphs[0]
    try {
      if (sample[0].includes('-')) {
        return (
          <ul>
            {paragraphs.map((paragraph, index) => (
              <li key={index}>{paragraph.replace('- ', '')}</li>
            ))}
          </ul>
        )
      }
    } catch (error) {
      // handle error
    }

    return paragraphs.map((paragraph, index) => (
      <p
        className={align}
        key={index}
        dangerouslySetInnerHTML={{ __html: formatTextWithAsterisks(paragraph) }}
      />
    ))
  }
  const generateImgSrc = (url) => {
    if (!import.meta.env.PROD)
      return import.meta.env.VITE_APP_BACKEND_IMAGES + url
    return url
  }

  const scrollDetect = useCallback(
    (id, onElementInView, parameter = null) => {
      const myElement = document.getElementById(id)
      if (!myElement) return
      window.addEventListener('scroll', () => {
        if (isElementInViewport(myElement)) {
          onElementInView(parameter)
        }
      })
    },
    [isElementInViewport]
  )

  const saveToLocalStorage = (key, value) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value)
    }
  }

  const getFromLocalStorage = (key) => {
    const existingStore = localStorage.getItem(key)

    if (existingStore) {
      // If the store exists, parse the value and return it
      return JSON.parse(existingStore)
    } else {
      // If the store does not exist, return a default value of zero
      return 0
    }
  }

  const forcingReload = () => {
    setLoaded(false)
    setTimeout(() => {
      window.location.reload()
    }, 20)
  }
  const scrollToTop = () => {
    window.scroll(0, 0)
  }

  return {
    splitIntoParagraphs,
    generateImgSrc,
    scrollDetect,
    saveToLocalStorage,
    getFromLocalStorage,
    forcingReload,
    scrollToTop,
  }
}
