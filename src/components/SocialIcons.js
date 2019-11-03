import React, {Component} from 'react';
//img
import Telegram from '../images/telegram.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';

class SocialIcons extends Component {
    render() {
        return (
            <article className="icons-container">
                <div className="icons">
                    <a href="https://t.me/carpatianknights">
                        <img src={Telegram} alt="Telegram"/>
                    </a>
                    <a href="https://t.me/carpatianknights">
                        <img src={Facebook} alt="Facebook"/>
                    </a>
                    <a href="https://t.me/carpatianknights">
                        <img src={Instagram} alt="Instagram"/>
                    </a>
                </div>
            </article>
        );
    }
}

export default SocialIcons;
