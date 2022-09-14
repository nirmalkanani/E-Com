import React from 'react'
import { Carousel } from 'antd';

const Slider = () => {

    const contentStyle = {
        height: '560px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <div>
            <Carousel autoplay style={{height:"500px"}}>
                <div style={contentStyle}>
                    <img  src='./assets/images/01.jpg' className='img-fluid' style={{height:"500px"}}/>
                </div>
                <div style={contentStyle}>
                    <img  src='./assets/images/02.jpg' className='img-fluid' style={{height:"500px"}}/>
                </div>
                <div style={contentStyle}>
                    <img  src='./assets/images/03.jpg' className='img-fluid' style={{height:"500px"}}/>
                </div>
                <div style={contentStyle}>
                    <img  src='./assets/images/04.jpg' className='img-fluid' style={{height:"500px"}}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
