import React, { useEffect, useRef } from 'react'
import './SwiperStyle.css'
import { register } from 'swiper/element/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {skill} from './../../../data'

register();

const SwiperComponent = (props) => {

    const swiperElRef = useRef(null);

    useEffect(() => {
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      });
    }, []);

return (
    <div className='swipper'>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          spaceBetween="20"
          centered-slides="true"
          autoplay-delay="2500"
          autoplay-disableOnInteraction="false"
          navigation="true" 
          pagination="true"
          pagination-clickable="true"
          mousewheel-invert="true"
        >
    {   
    skill.map((el ,index) => (
      <swiper-slide key={index}>
          <div className="img_lang"  style={{width :"200px" , minWidth : "130px"}} >
            <img src={el.img} alt="" className='img' style={{width: "100%" , borderRadius: "50%"}} />
            <p style={{textAlign:"center"}}>{el.name_img}</p>
          </div>
      </swiper-slide>
    ))
    }
        </swiper-container>
    </div>
  )
}

export default SwiperComponent