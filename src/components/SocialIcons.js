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
                    </a>
                    <a href="https://www.facebook.com/carpatianknights" target="_blank">
                        <img src={Facebook} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/explore/tags/carpatianknights/" target="_blank">
                        <img src={Instagram} alt="Instagram"/>
                    </a>
                    <a href="https://youtu.be/G1IbRujko-A" target="_blank">
                        <img src={Youtube} alt="Youtube"/>
                    </a>
                </div>
            </article>
        );
    }
}

export default SocialIcons;
