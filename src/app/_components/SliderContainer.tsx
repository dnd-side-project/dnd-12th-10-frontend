import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PropsWithChildren, useRef } from 'react'
import { Icon } from '@/components/Icon'

interface SliderContainerProps {
  MediumDeviceSlidesToShow: number
  LargeDeviceSlidesToShow: number
}

const SliderContainer = ({
  children,
  MediumDeviceSlidesToShow,
  LargeDeviceSlidesToShow,
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
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: LargeDeviceSlidesToShow,
    slidesToScroll: LargeDeviceSlidesToShow,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: MediumDeviceSlidesToShow,
          slidesToScroll: MediumDeviceSlidesToShow,
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
