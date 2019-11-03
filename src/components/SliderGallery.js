import React, {Component} from 'react';
import Slider from "react-slick";

class SliderGallery extends Component {

    render() {

        let array = ["5-min", "6-min", "7-min", "8-min", "10-min", "11-min", "12-min", "13-min", "15-min", "16-min", "17-min", "18-min"];
        let images = array.map(image => {
            return <img key={image} src={require(`../images/gallery/${image}.jpg`)} alt="" />
        });

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
                    {images}
                </Slider>
            </section>
        );
    }
}

export default SliderGallery;
