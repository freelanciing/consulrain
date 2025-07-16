import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeader from './SectionHeader/SectionHeader'

const Founders = () => {
    const { t, i18n } = useTranslation();
    const founders = [
        {
            name: t('founders.founder1.name'),
            bio: t('founders.founder1.bio'),
        },
        {
            name: t('founders.founder2.name'),
            bio: t('founders.founder2.bio'),
        }
    ];
    return (
 
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-28 py-20 text-pure-white">
            <div className="w-full flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-primary-900 to-primary-700 p-10 space-y-8">

                {/* <h5 className="text-3xl md:text-4xl font-semibold font-[Gilroy-SemiBold] text-center">
                    {t('founders.title')}
                </h5> */}
                <SectionHeader
                    title={t("partners.title")}
                    highlightedWord={t("services.highlightedWord")}
                    lineColor="#32d8cc"
                />
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={32}
                    slidesPerView={1}
                    className="w-full relative z-10"
                >
                    {founders.map((founder, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="px-8 py-10 md:px-12 md:py-12 h-[500px] rounded-xl shadow-md flex flex-col">
                                <h6 className="text-xl md:text-2xl font-bold mb-4 font-[Gilroy-SemiBold]">
                                    {founder.name}
                                </h6>
                                <p className="text-base md:text-lg font-[Gilroy-Regular] font-normal leading-relaxed">
                                    {founder.bio}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}

export default Founders
