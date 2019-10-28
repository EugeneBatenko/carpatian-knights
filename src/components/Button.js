import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {expand: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            expand: !state.expand
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </button>
            </div>
        );
    }
}

export default Button;