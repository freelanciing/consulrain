import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Services = () => {
    const services = [
        { title: 'Supply chain & Logistics', image: './images/ai.svg' },
        { title: 'Administration', image: './images/marketing.svg' },
        { title: 'Leadership', image: './images/embeded.svg' },
        { title: 'Softskills', image: './images/cloud.svg' },
        { title: 'Production', image: './images/mobile.svg' },
        { title: 'Quality Control', image: './images/testing.svg' },
        { title: 'Human Resources', image: './images/web.svg' },
        { title: 'Information Technology', image: './images/ai.svg' },
        { title: 'Food Safety', image: './images/embeded.svg' },
        { title: 'Finance & Accounting', image: './images/cloud.svg' },
        { title: 'Compliance', image: './images/mobile.svg' },
        { title: 'Marketing', image: './images/testing.svg' },
        { title: 'Sales', image: './images/web.svg' },
    ]
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-28 py-20">

                <div className=' w-full min-h-[60vh] 
       bg-primary-300 rounded-tr-3xl rounded-bl-3xl p-10
       
       '>
                    <h5 className='text-center font-bold text-[2.25rem]'>Our Services </h5>
                    <div className='w-[80%]  flex items-center justify-center  mx-auto gap-3'>
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            pagination={{ clickable: true }}
                            className="mySwiper"
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                        >
                            {services.map((service, i) => (
                                <SwiperSlide key={i}>
                                  
                                    <div className='service-card rounded-lg bg-white  text-center mb-8 flex flex-col items-center justify-center min-h-[260px] h-full'>
                                        <img src={service.image} alt="" className="mb-4 w-[50%] object-contain" />
                                        <h6 className="">{service.title}</h6>
                                    </div>
                                </SwiperSlide>
                            )
                            )
                            }

                        </Swiper>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services
