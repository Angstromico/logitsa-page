import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useFunctions } from '@/Hooks'
import { Pagination, EffectFade, Autoplay } from 'swiper'
import SliderChild from './SliderChild'
import { getCarrouselInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useBearStore } from '@/store'

export const Slider = ({ iDInfo }) => {
  const { loading, data, error } = useQuery(getCarrouselInfo(iDInfo))
  const { lang } = useBearStore()
  const { generateImgSrc, scrollToTop } = useFunctions()
  const isMobile = window.innerWidth <= 640
  const direction = isMobile ? 'horizontal' : 'vertical'

  const [link, setLink] = useState('/air')

  const links = {
    Air: '/air',
    Ocean: '/ocean',
    Ground: '/ground',
    'Customs Brokerage': '/brokerage',
    Aire: '/air',
    Oceano: '/ocean',
    Tierra: '/ground',
    'Corretaje de Aduanas': '/brokerage',
  }
  const onSlideChange = (swiper) => {
    const currentTitle =
      swiper.slides[swiper.activeIndex].querySelector('h2').textContent
    let title
    if (links[currentTitle]) title = links[currentTitle]
    setLink(title)
  }

  if (loading) return
  if (error) return <p>Error</p>

  const carrouselInfo = data.page.data.attributes.Carrousel

  if (!carrouselInfo) return

  return (
    <div className='slider-container'>
      <Swiper
        onSlideChange={onSlideChange}
        direction={direction}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          position: 'left',
          type: 'bullets',
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className='mySwiper'
        allowTouchMove={true}
      >
        {carrouselInfo.map((slider, index) => {
          const { title, content, image, titulo, contenido } = slider
          const { url } = image.data.attributes
          const slideUrlImg = generateImgSrc(url)
          return (
            <SwiperSlide key={index}>
              {
                <SliderChild
                  title={lang === 'en' ? title : titulo}
                  content={lang === 'en' ? content : contenido}
                  background={slideUrlImg}
                />
              }
            </SwiperSlide>
          )
        })}
      </Swiper>
      {carrouselInfo[0].link && (
        <Link className='services-link' to={link} onClick={() => scrollToTop()}>
          {lang === 'en' ? 'See More' : 'Ver más'}{' '}
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      )}
    </div>
  )
}
