import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

class Button extends Component {

    state = {expand: true};


    handleClick() {
        this.setState(state => ({expand: !state.expand}));
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
