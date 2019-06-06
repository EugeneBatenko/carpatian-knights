import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './_navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <nav className={this.props.showMenu ? "side-menu" : "side-menu menu-open"}>
                <ul className="ul-container">
                    <li className="nav-item"><NavLink to="/News" activeStyle={{
                        color: "lightskyblue",
                        transition: "all 0.5s easy-in-out"
                    }}><span>Новини</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/Rules" activeStyle={{
                        color: "lightskyblue",
                        transition: "all 0.5s easy-in-out"
                    }}><span>Заповіді туриста</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/OurTeam" ><span>Наша команда</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/Archive" ><span>Архіваріум походів</span></NavLink></li>
                    <li className="nav-item"><NavLink to="#" ><span>Контакти</span></NavLink></li>
                    <li className="nav-item"><NavLink to="#" ><span>Залишити заявку</span></NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;