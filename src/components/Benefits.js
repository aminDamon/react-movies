import React, { Component } from 'react'


//////svg images
import iconOne from './pic/svg/benefit/feature-box/1.png'
import iconTwo from './pic/svg/benefit/feature-box/2.png'
import iconThree from './pic/svg/benefit/feature-box/3.png'
import iconFour from './pic/svg/benefit/feature-box/1.png'
class Benefits extends Component {
    render() {
        return (
            <div className='benefits'>
                <div className='benefit'>
                    <div className='icon'><img src={iconOne} /></div>
                    <div className='caption'>
                        <h1>ارسال رایگان</h1>
                        <p>برای خرید های بیشتر از یک ملیون تومان</p>
                    </div>
                </div>
                <div className='benefit'>
                    <div className='icon'><img src={iconThree} /></div>
                    <div className='caption'>
                        <h1>ضمانت آسان</h1>
                        <p>برای خرید های بیشتر از صد ملیون تومان</p>
                    </div>
                </div>
                <div className='benefit'>
                    <div className='icon'><img src={iconTwo} /></div>
                    <div className='caption'>
                        <h1>تحویل سریع</h1>
                        <p>ارسال کالا تا حداکثر 3 روز کاری آینده</p>
                    </div>
                </div>
                <div className='benefit'>
                    <div className='icon'><img src={iconFour} /></div>
                    <div className='caption'>
                        <h1>ارسال رایگان</h1>
                        <p>برای خرید های بیشتر از یک ملیون تومان</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefits