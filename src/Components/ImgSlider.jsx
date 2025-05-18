import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from '../Style/ImgSlider';
import { SliderList } from '../Constants';

const ImgSlider = () => {
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div>
            <Carousel {...setting}>
                {
                    SliderList.map((item, index) => (
                        <Wrap key={index}>
                            <a className="wrap-link">
                                <img src={item.src} alt={item.alt} />
                            </a>
                        </Wrap>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ImgSlider