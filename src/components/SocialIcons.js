import React, {Component} from 'react';
//img
import Telegram from '../images/telegram.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Youtube from '../images/youtube.svg';

class SocialIcons extends Component {
    render() {
        return (
            <article className="icons-container">
                <div className="icons">
                    <a href="https://t.me/carpatianknights" target="_blank">
                        <img src={Telegram} alt="Telegram"/>
                        <span className="hover-container spin-top">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                        <span className="hover-container spin-bottom">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                    </a>
                    <a href="https://www.facebook.com/carpatianknights" target="_blank">
                        <img src={Facebook} alt="Facebook"/>
                        <span className="hover-container spin-top">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                        <span className="hover-container spin-bottom">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/explore/tags/carpatianknights/" target="_blank">
                        <img src={Instagram} alt="Instagram"/>
                        <span className="hover-container spin-top">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                        <span className="hover-container spin-bottom">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                    </a>
                    <a href="https://youtu.be/G1IbRujko-A" target="_blank">
                        <img src={Youtube} alt="Youtube"/>
                        <span className="hover-container spin-top">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                        <span className="hover-container spin-bottom">
                            <span className="top-cone"></span>
                            <span className="bottom-cone"></span>
                        </span>
                    </a>
                </div>
            </article>
        );
    }
}

export default SocialIcons;
