import React, {Component} from 'react';
import '../scss/modules/_m-page-headers.scss';

class PageHeaders extends Component {


    render() {
        return (
            <div className="headers-container">
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default PageHeaders;