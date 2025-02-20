import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PropsWithChildren, useRef } from 'react'
import { Icon } from '@/components/Icon'

interface SliderContainerProps {
  mediumDeviceSlidesToShow: number
  largeDeviceSlidesToShow: number
}

const SliderContainer = ({
  children,
  mediumDeviceSlidesToShow,
  largeDeviceSlidesToShow,
}: PropsWithChildren<SliderContainerProps>) => {
  const sliderRef = useRef<Slider | null>(null)

  const onPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: largeDeviceSlidesToShow,
    slidesToScroll: largeDeviceSlidesToShow,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: mediumDeviceSlidesToShow,
          slidesToScroll: mediumDeviceSlidesToShow,
        },
      },
    ],
  }
  return (
    <div className='relative'>
      <div className='absolute flex gap-2 -top-12 right-4'>
        <button onClick={onPrev}>
          <Icon name='arrow-left' />
        </button>
        <button onClick={next}>
          <Icon name='arrow-right' />
        </button>
      </div>
      <Slider
        key={Array.isArray(children) ? children.length : 1}
        className='flex gap-x-4 flex-wrap'
        ref={(slider) => {
          sliderRef.current = slider
        }}
        {...settings}
      >
        {children}
      </Slider>
    </div>
  )
}

export default SliderContainer
