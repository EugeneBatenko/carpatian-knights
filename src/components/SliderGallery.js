import React, {Component} from 'react';
import Slider from "react-slick";
//img
import slide1 from '../images/gallery/1-min.jpg';
import slide2 from '../images/gallery/2-min.jpg';
import slide3 from '../images/gallery/3-min.jpg';
import slide4 from '../images/gallery/4-min.jpg';
import slide5 from '../images/gallery/5-min.jpg';
import slide6 from '../images/gallery/6-min.jpg';
import slide7 from '../images/gallery/7-min.jpg';
import slide8 from '../images/gallery/8-min.jpg';
import slide9 from '../images/gallery/9-min.jpg';
import slide10 from '../images/gallery/10-min.jpg';
import slide11 from '../images/gallery/11-min.jpg';
import slide12 from '../images/gallery/12-min.jpg';
import slide13 from '../images/gallery/13-min.jpg';
import slide15 from '../images/gallery/15-min.jpg';
import slide16 from '../images/gallery/16-min.jpg';
import slide17 from '../images/gallery/17-min.jpg';
import slide18 from '../images/gallery/18-min.jpg';


class SliderGallery extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000
        };

        return (
            <section className="m-gallery-slider">
                <Slider {...settings}>
                    {/*<img src={slide1} alt="1"/>*/}
                    {/*<img src={slide2} alt="2"/>*/}
                    {/*<img src={slide3} alt="3"/>*/}
                    {/*<img src={slide4} alt="4"/>*/}
                    <img src={slide5} alt="5"/>
                    <img src={slide6} alt="6"/>
                    <img src={slide7} alt="7"/>
                    <img src={slide8} alt="8"/>
                    <img src={slide9} alt="9"/>
                    <img src={slide10} alt="10"/>
                    <img src={slide11} alt="11"/>
                    <img src={slide12} alt="12"/>
                    <img src={slide13} alt="13"/>
                    <img src={slide15} alt="15"/>
                    <img src={slide16} alt="16"/>
                    <img src={slide17} alt="17"/>
                    <img src={slide18} alt="18"/>
                </Slider>
            </section>
        );
    }
}

export default SliderGallery;