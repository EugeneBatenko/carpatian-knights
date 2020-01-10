import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import '../scss/modules/_m-navigation.scss';
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCampground} from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
    render() {
        return (
            <nav className={this.props.showMenu ? "side-menu" : "side-menu menu-open"}>
                <ul className="ul-container">
                    <li className="nav-item"><NavLink to="/" activeStyle={{
                        transition: "all 0.5s easy-in-out",
                        fontSize: "30px"
                    }}><FontAwesomeIcon icon={faCampground}/></NavLink></li>
                    <li className="nav-item"><NavLink to="/News" activeStyle={{
                        color: "lightskyblue",
                        transition: "all 0.5s easy-in-out"
                    }}><span>Новини</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/Rules" activeStyle={{
                        color: "lightskyblue",
                        transition: "all 0.5s easy-in-out"
                    }}><span>Заповіді туриста</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/OurTeam"><span>Наша команда</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/Crusade" activeStyle={{
                        color: "lightskyblue",
                        transition: "all 0.5s easy-in-out"
                    }}><span>Записатись в похід</span></NavLink></li>
                    <li className="nav-item"><NavLink to="#"><span>Контакти</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/Tours" activeStyle={{
                        color: "lightskyblue",
                        transition: "all 0.5s easy-in-out"
                    }}><span>Актуальні походи</span></NavLink></li>

                </ul>
            </nav>
        );
    }
}

export default Navigation;
