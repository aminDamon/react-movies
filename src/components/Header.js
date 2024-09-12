import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

////////images
import searchIcon from './pic/svg/search.png'
import logo from './pic/logo/logo2.png'
import loginIcon from './pic/svg/login.png'
import shopIcon from './pic/svg/shop.png'
import likeIcon from './pic/svg/like.png'

/////////category image
import desktopIcon from './pic/svg/category/desktop.png'
import headphonesIcon from './pic/svg/category/headphones.png'
import keyboardIcon from './pic/svg/category/keyboard.png'
import laptopIcon from './pic/svg/category/laptop.png'
import mobileIcon from './pic/svg/category/mobile.png'
import monitorIcon from './pic/svg/category/monitor.png'
import pendriveIcon from './pic/svg/category/pendrive.png'

/////////////swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




///////////react router
import { NavLink, Outlet } from 'react-router-dom'


//////////
import product from './product';
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drop: false,
            dropContent: []
        }
    }

    dropHandler = (event) => {
        if (event.target.dataset.value === 'لوازم جانبی') {
            let accessoriesPro = product.map(pro => {
                return pro[0]
            })
            console.log(accessoriesPro);
            this.setState({
                dropContent: accessoriesPro
            })
        }
        this.setState({
            drop: true,
        })
        console.log(this.state.dropContent);
    }

    showDropHandler = () => {
        this.setState({
            drop: true,
        })

    }

    hideDropHandler = () => {
        this.setState({
            drop: false
        })
    }
    render() {
        return (
            <header>
                <div className='top_navbar'>
                    <div className='left'>
                        <div className='login_icon'><img src={shopIcon} /></div>
                        <div className='login_icon'><img src={loginIcon} /></div>
                        <div className='login_icon'><img src={likeIcon} /></div>
                    </div>
                    <div className='center'>
                        <img src={searchIcon} />
                        <div className='search_box'>
                            <input type='text' placeholder='دنبال چی میگردی ؟' />
                        </div>
                        <div className='category'><FontAwesomeIcon className='angle' icon={faAngleDown} />  دسته بندی ها</div>
                    </div>
                    <div className='right'>
                        <img src={logo} />
                    </div>
                    <div className='menu_icon'><FontAwesomeIcon icon={faBars} /></div>

                </div>
                <div className='menu'>
                    <NavLink to='/'>خانه</NavLink>
                    <NavLink to='accessories'
                        data-value='لوازم جانبی'
                        onMouseEnter={this.dropHandler}
                        onMouseLeave={this.hideDropHandler}>
                        دسته بندی محصولات <FontAwesomeIcon icon={faAngleDown} className='angle' /></NavLink>
                    <NavLink href='#'>پرفروش ترین ها</NavLink>
                    <NavLink href='#'>جدیدترین ها</NavLink>
                    <NavLink href='#'>پینشهاد ویژه</NavLink>
                    <NavLink href='#'
                        data-value='فروش خط'
                        onMouseEnter={this.dropHandler}
                        onMouseLeave={this.hideDropHandler}>
                        فروش خط <FontAwesomeIcon icon={faAngleDown} className='angle' /></NavLink>
                    <NavLink href='#'
                        data-value='محصولات دیگر'
                        onMouseEnter={this.dropHandler}
                        onMouseLeave={this.hideDropHandler}>
                        محصولات دیگر <FontAwesomeIcon icon={faAngleDown} className='angle' /></NavLink>
                    <NavLink href='#'>ارتباط با ما</NavLink>
                    <div
                        className={`drop_menu ${this.state.drop ? 'show' : ''}`}
                        onMouseEnter={this.showDropHandler}
                        onMouseLeave={this.hideDropHandler}>
                        {this.state.dropContent.map((dro) => {
                            return <p>{dro}</p>
                        })}
                    </div>

                </div>

                {/* <div className='categorys'>
                    <Swiper
                        className='swiper_category'
                        modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                        // navigation
                        spaceBetween={20}
                        slidesPerView={6}
                        // pagination={{ clickable: true }}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={headphonesIcon}/></div>
                                
                                <p>هدفون</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={mobileIcon}/></div>
                                
                                <p>موبایل</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={laptopIcon}/></div>
                                
                                <p>لپ تاپ</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={keyboardIcon}/></div>
                                
                                <p>کیبورد</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={monitorIcon}/></div>
                                
                                <p>مانیتور</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={desktopIcon}/></div>
                                
                                <p>دسک تاپ</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={pendriveIcon}/></div>
                                
                                <p>پاور بانک</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='icon'><img src={headphonesIcon}/></div>
                                
                                <p>هدفون</p>
                            </div>
                        </SwiperSlide>
                    </Swiper> 
                </div>*/}

                {/* mobile code */}
                <div className='mobile_search'>
                    <img src={searchIcon} />
                    <div className='search_box'>
                        <input type='text' placeholder='دنبال چی میگردی ؟' />
                    </div>
                </div>
                <main>
                    <Outlet />
                </main>
            </header>
        )
    }
}

export default Header
