const LangChanger = ({
  handleToggle,
  lang,
  toggleLang,
  hideLang,
  changeLang,
  language,
  desk = false,
}) => {
  return (
    <li>
      <div
        className='relative'
        onMouseLeave={handleToggle}
        onMouseEnter={handleToggle}
      >
        <button
          className={
            'text-white bg-transparent inline-flex items-center px-3 py-1.5 rounded cursor-pointer'
          }
          id='dropdownDefaultButton'
          data-dropdown-toggle='dropdown'
          type='button'
        >
          {lang.toUpperCase()}{' '}
          <svg
            className={`w-4 h-4 ml-2 ${
              !toggleLang ? '' : 'rotate-180'
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
        <div id='dropdown' className={`z-10 ${hideLang ? 'hidden' : ''}`}>
          <ul
            className={`bg-transparent items-center px-3 py-1.5 rounded text-center absolute ${
              !desk ? 'top-5' : 'top-8'
            } left-0`}
            aria-labelledby='dropdownDefaultButton'
          >
            <li>
              <span
                className={`block cursor-pointer ${
                  !desk ? 'scale-75' : ''
                } left-4`}
                onClick={() => changeLang(lang)}
              >
                {language.toUpperCase()}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default LangChanger
