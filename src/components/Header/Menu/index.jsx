import { useState, useCallback, useEffect, useRef } from 'react'
import { useQuery } from '@apollo/client'
import { GET_MENU_ITEMS } from '@/api/queries'
import style from './style.module.scss'
import logo from '@/assets/img/logo.png'
import HamburgerButton from './HamburguerButton'
import { Link } from 'react-router-dom'
import { useBearStore } from '@/store'
import { useLocation } from 'react-router-dom'
import { useFunctions } from '@/Hooks'
import LangChanger from './LangChanger'

export default function Menu() {
  const location = useLocation()
  const path = location.pathname
  const { setLoaded, lang, setLang, setHeaderHeight } = useBearStore()
  const [color, setColor] = useState('')
  const otherColor = '#2c2c5c'
  const lightBlue = '#6385c3'
  const [isToggled, setIsToggled] = useState(false)
  const [toggleLang, setToggleLang] = useState(false)
  const [hideLang, setHideLang] = useState(true)
  const [bColor, setBColor] = useState(
    path === '/' || path === '/home' ? lightBlue : otherColor
  )
  const [isHidden, setIsHidden] = useState(true)
  const firstBtn = useRef('4rem')
  const secondBtn = useRef('3rem')
  const [hiddenMobileLinks, setHiddenMobileLinks] = useState(true)
  const [paddingBottom, setPaddingBottom] = useState('')
  const [language, setLanguage] = useState('es')
  const { scrollToTop } = useFunctions()
  const anotherColor = path === '/' || path === '/home' ? bColor : otherColor
  let length
  const subFields = [
    { title: 'Air', href: '/air', titulo: 'Aéreo' },
    { title: 'Ocean', href: '/ocean', titulo: 'Marítimo' },
    { title: 'Ground', href: '/ground', titulo: 'Terrestre' },
    { title: 'Brokerage', href: '/brokerage', titulo: 'Corretaje' },
  ]
  const cColor = path === '/' || path === '/home' ? lightBlue : otherColor
  const headerHeight = useRef(null)

  const { loading, error, data } = useQuery(GET_MENU_ITEMS)
  const changeBackground = useCallback(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
      if (scrollPosition >= 500) {
        setColor('#2c2c5c')
        setBColor('#2c2c5c')
      } else {
        setColor('')
        setBColor(cColor)
      }
    })
  }, [cColor])

  const handleToggle = () => {
    setIsToggled(!isToggled)
    setIsHidden(!isHidden)
  }

  const handleLang = () => {
    setToggleLang(!toggleLang)
    setHideLang(!hideLang)
  }

  const handleBurguer = () => {
    setHiddenMobileLinks(!hiddenMobileLinks)
    const height = length * 2.8
    if (!paddingBottom) setPaddingBottom(`${height}rem`)
    if (paddingBottom) setPaddingBottom('')
  }

  const changeLang = (lang) => {
    if (lang === 'en') {
      setLang('es')
      setLanguage('en')
    }
    if (lang === 'es') {
      setLang('en')
      setLanguage('es')
    }
  }

  useEffect(() => {
    if (!loading) {
      changeBackground()
      setLoaded()
      setHeaderHeight(headerHeight.current.clientHeight)
    }
  }, [loading, changeBackground, setLoaded, setHeaderHeight])

  if (loading) return
  if (error) return <p>Error :</p>

  const menuData = data.headerLink.data.attributes.links
  length = menuData.length

  return (
    <header>
      <nav
        ref={headerHeight}
        className={style.menu}
        style={{
          backgroundColor:
            path === '/' || path === '/home' ? color : otherColor,
          paddingBottom: paddingBottom,
        }}
      >
        <Link to='/' onClick={() => scrollToTop()}>
          <img src={logo} alt='Logo' className={style.logo} />
        </Link>

        <div className='block xl:hidden relative'>
          <div onClick={handleBurguer}>
            <HamburgerButton />
          </div>

          <ul
            className={`${hiddenMobileLinks ? 'hidden ' : style.itemsMobile}`}
          >
            {menuData.map((item) => (
              <li key={item.name + item.id}>
                {item.title !== 'Services' && (
                  <Link to={item.href} onClick={() => scrollToTop()}>
                    {lang === 'en' ? item.title : item.titulo}
                  </Link>
                )}
                {item.title === 'Services' && (
                  <div
                    className='relative'
                    onMouseLeave={handleToggle}
                    onMouseEnter={handleToggle}
                  >
                    <button
                      className={`text-white ${
                        !isToggled
                          ? 'bg-transparent'
                          : anotherColor === '#2c2c5c'
                          ? 'bg-[#2c2c5c]'
                          : 'bg-[#6385c3]'
                      } inline-flex items-center px-3 py-1.5 rounded`}
                      id='dropdownDefaultButton'
                      data-dropdown-toggle='dropdown'
                      type='button'
                      ref={secondBtn}
                    >
                      {lang === 'en' ? item.title : item.titulo}{' '}
                      <svg
                        className={`w-4 h-4 ml-2 ${
                          !isToggled ? '' : 'rotate-180'
                        } transition-all`}
                        aria-hidden='true'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        ></path>
                      </svg>
                    </button>
                    <div
                      id='dropdown'
                      className={`z-10 ${
                        isHidden ? 'hidden' : ''
                      } bg-cBlue shadow`}
                    >
                      <ul
                        className={`bg-[${anotherColor}] items-center px-3 py-1.5 rounded text-center absolute top-7 left-0`}
                        aria-labelledby='dropdownDefaultButton'
                        style={{
                          width: !secondBtn.current.offsetWidth
                            ? '4rem'
                            : secondBtn.current.offsetWidth,
                          zIndex: 5,
                        }}
                      >
                        {subFields.map((innerItem, index) => {
                          const { title, href, titulo } = innerItem

                          return (
                            <li key={index}>
                              <Link
                                className='py-2 block'
                                to={href}
                                onClick={() => scrollToTop()}
                              >
                                {lang === 'en' ? title : titulo}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <LangChanger
              handleToggle={handleLang}
              lang={lang}
              toggleLang={toggleLang}
              hideLang={hideLang}
              changeLang={changeLang}
              language={language}
            />
          </ul>
        </div>

        <ul className={style.items}>
          {menuData.map((item) => (
            <li key={item.id + item.title}>
              {item.title !== 'Services' && (
                <Link to={item.href} onClick={() => scrollToTop()}>
                  {lang === 'en' ? item.title : item.titulo}
                </Link>
              )}
              {item.title === 'Services' && (
                <div
                  className='relative'
                  onMouseLeave={handleToggle}
                  onMouseEnter={handleToggle}
                >
                  <button
                    className={`text-white ${
                      !isToggled
                        ? 'bg-transparent'
                        : bColor === '#2c2c5c'
                        ? 'bg-[#2c2c5c]'
                        : 'bg-[#6385c3]'
                    } inline-flex items-center px-3 py-1.5 rounded`}
                    id='dropdownDefaultButton'
                    data-dropdown-toggle='dropdown'
                    type='button'
                    ref={firstBtn}
                  >
                    {lang === 'en' ? item.title : item.titulo}{' '}
                    <svg
                      className={`w-4 h-4 ml-2 ${
                        !isToggled ? '' : 'rotate-180'
                      } transition-all`}
                      aria-hidden='true'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      ></path>
                    </svg>
                  </button>
                  <div
                    id='dropdown'
                    className={`z-10 ${
                      isHidden ? 'hidden' : ''
                    } bg-cBlue shadow`}
                  >
                    <ul
                      className={`bg-[${bColor}] items-center px-3 py-1.5 rounded text-center absolute top-7 left-0 z-50`}
                      aria-labelledby='dropdownDefaultButton'
                      style={{
                        width: !firstBtn.current.offsetWidth
                          ? '5rem'
                          : firstBtn.current.offsetWidth,
                      }}
                    >
                      {subFields.map((innerItem, index) => {
                        const { title, href, titulo } = innerItem

                        return (
                          <li key={index}>
                            <Link
                              className='py-2 block'
                              to={href}
                              onClick={() => scrollToTop()}
                            >
                              {lang === 'en' ? title : titulo}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
          <LangChanger
            handleToggle={handleLang}
            lang={lang}
            toggleLang={toggleLang}
            hideLang={hideLang}
            changeLang={changeLang}
            language={language}
            desk
          />
        </ul>
      </nav>
    </header>
  )
}
