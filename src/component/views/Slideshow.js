
//import React, { Component } from 'react';
//import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import './styles/slideshow.css'
import Carousel from 'react-bootstrap/Carousel';

import { v4 as uuid } from 'uuid';
import sliderdata from '../data/sliderdata'

const Slideshow = () => {
    return (
        <div className="carousel-div">
        <Carousel className='carousel' fade>
                {sliderdata.slides.map((slide) => (
                    <Carousel.Item interval={5000} key={uuid()} className='zoom'>
                        <img
                            className="cassimg d-block w-100"
                            src={slide.image}
                            alt="First slide"
                            width='auto'
                            height='520px'
                        />
                        <Carousel.Caption className='capt'>
                            <h5>{slide.title}</h5>
                            <p>{slide.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                
            ))}
            </Carousel>
            
        </div>
    )
}

export default Slideshow
