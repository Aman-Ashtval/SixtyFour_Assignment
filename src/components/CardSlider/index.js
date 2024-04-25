import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css"

const CardSlider = props => {
    const {cardList} = props

    const [slideNumber, setSlideNumber] = useState(4);

    // Function to be called when device width changes
    const  handleWidthChange = () => {        
        const deviceWidth = window.innerWidth;
        if(deviceWidth <= 576){
            setSlideNumber(1);
        }else if(deviceWidth > 576 && deviceWidth <= 767){
            setSlideNumber(2);
        }else if(deviceWidth > 767 && deviceWidth < 992){
            setSlideNumber(3);
        }else{
            setSlideNumber(4);
        }
    }

    useEffect(()=>{
        handleWidthChange();
    },[]);

    // Event listener for the resize event
    window.addEventListener('resize', () => {
        handleWidthChange();
    });

    const isShowDots = slideNumber >= 3 ? true : false
    const settings = {
        dots: isShowDots,
        infinite: true,
        speed: 500,
        slidesToShow: slideNumber,
        slidesToScroll: slideNumber,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // render card
    const renderCard = cardDetails => {
        const {id, title, description, imageUrl} = cardDetails

        return (
            <div key={id} className="slider-card-bg">
                <div className="card">
                    <img src={imageUrl} alt={title} className="card-img" />
                    <div className="card-content">
                        <p className="card-title">{title}</p>
                        <p className="card-description">{description}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 mb-1">            
            <Slider {...settings}>
                {
                    cardList.map(each => renderCard(each))
                }
            </Slider>
        </div>
    );
}

export default CardSlider
