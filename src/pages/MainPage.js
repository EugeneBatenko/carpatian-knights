import React, {Component} from 'react';
import Header from "../components/Header/Header";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import Footer from "../components/Footer/Footer";


class MainPage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <HeaderBanner/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;