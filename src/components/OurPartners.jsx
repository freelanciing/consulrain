import React from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurPartners = () => {
    const { t, i18n } = useTranslation();
    const swiperContent = [
        './images/aimco.png',
        './images/aldaka.png',
        './images/anderen.png',
        './images/arkoda.jpg',
        './images/mba_trading.jpg',
        './images/osus.png',
        './images/rec.png',
        './images/rustin.png',
        './images/saudi_mix.png',
    ]
    return (
        <>

            <div className="w-full  flex flex-col items-center justify-center  px-4 md:px-12 lg:px-24 py-8">
                <h5 className='section-title text-[2rem] 
          text-[#313244]
          md:h3 mb-8
          line-height-[1.8125rem]
          text-center font-[600] font-family-[Gilroy-SemiBold]
          '>
                    {t('partners.title')}
                </h5>

                <div className='section-container flex flex-col items-center justify-center mt-4 mb-8'>
                    <p className='section-paragraph text-center w-[70%] text-[#888cb7] 
              text-[1.125rem] leading-[1.22rem]
              font-family-[Gilroy-Regular] font-[400] 
              '>
                        {t('partners.description')}
                    </p>
                </div>

                <div className="w-[80%] px-4 md:px-12 lg:px-24 py-8 flex items-center justify-center">
              
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={40} 
                        breakpoints={{
                            0: { slidesPerView: 2, spaceBetween: 20 },
                            640: { slidesPerView: 3, spaceBetween: 32 },
                            1024: { slidesPerView: 4, spaceBetween: 40 },
                        }}
                        className="mb-12"
                    >
                        {swiperContent.map((content, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex items-center justify-center mb-0" 
                            >
                                <div className="flex items-center justify-center h-[7rem] w-full">
                                    <img
                                        src={content}
                                        alt={`Slide ${index}`}
                                        className="h-12 mx-auto"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
               
                </div>
            </div>


        </>
    )
}

export default OurPartners
