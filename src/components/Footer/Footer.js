import React, {Component} from 'react';
import './_footer.scss';

class Footer extends Component {

    render() {
        const year = new Date().getFullYear();
        return (
            <footer>
                <p>2014 - {year} - Всі права збережені. Жека кодив.</p>
            </footer>
        );
    }
}

export default Footer;