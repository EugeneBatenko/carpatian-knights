import React, {Component} from 'react';
import './_header-banner.scss';
import KV from './KV.png';
import Circle from './circle.png';

class HeaderBanner extends Component {

    render() {

        return (
            <section className="header-banner">
                <div className="img-container">
                    <img className="spin" src={KV} alt="KV"/>
                    <img className="static" src={Circle} alt="circle"/>
                </div>
                <div className="text-container">
                    <h2 className="front-text">Відкрий для себе неймовірну подорож</h2>
                    <h2 className="back-text">Відкрий</h2>
                </div>

            </section>
        );
    }
}

export default HeaderBanner;