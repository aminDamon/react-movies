import React, { Component } from 'react'
import newProduct from './product'


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as star } from '@fortawesome/free-solid-svg-icons';
import { faStar as nonStar , faHeart } from '@fortawesome/free-regular-svg-icons';
class NewProduct extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
    }
    render() {
        const product = newProduct.map((pro, index) => {
            return (<SwiperSlide key={index} className=''>
                <div className='damon' onMouseLeave={this.hideHandler} onMouseEnter={this.addHandler}><img src={pro.src} /></div>
                <div className='star'>
                    {pro.star.map((str, index) => {
                        if (str === 1) {
                            return <FontAwesomeIcon icon={star} key={index} />
                        } else {
                            return <FontAwesomeIcon icon={nonStar} key={index} />
                        }
                    })}
                </div>
                <h2>{pro.proName}</h2>
                <p>{pro.price} تومان</p>
                <div className='add'>اضافه کردن به سبد خرید</div>
                <div className='like'><FontAwesomeIcon icon={faHeart}/></div>
                
            </SwiperSlide>
            )
        })
        return (
            <div className='new_product'>
                <h1>آخرین محصولات</h1>
                <Swiper
                    className='pro_slide'
                    modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={4.5}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                >
                    {product}
                </Swiper>
            </div>
        )
    }
}

export default NewProduct
