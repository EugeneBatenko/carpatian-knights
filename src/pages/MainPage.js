import React, {Component} from 'react';
import Header from "../components/Header";
import HeaderBanner from "../components/HeaderBanner";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import SocialIcons from "../components/SocialIcons";
import SliderGallery from "../components/SliderGallery";



class MainPage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <HeaderBanner/>
                    <AboutUs/>
                    <SocialIcons/>
                    <SliderGallery/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;