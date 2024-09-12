import React, { Component } from 'react'
import poster1 from './pic/pooster/pooster1.png'
import poster3 from './pic/pooster/poster3.png'
import poster4 from './pic/pooster/poster4.avif'
import poster5 from './pic/pooster/poster5.webp'
import poster6 from './pic/pooster/poster6.jpg'

/////////////swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class Poster extends Component {
    render() {
        return (
            <div className='poster'>
                <Swiper
                    // direction={'rtl'}
                    // cssDirection={'rtl'}
                    className=''
                    modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                >
                    <SwiperSlide>
                        <img src={poster5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={poster3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={poster4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={poster1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={poster6} />
                    </SwiperSlide>
                </Swiper>

            </div>
        )
    }
}

export default Poster