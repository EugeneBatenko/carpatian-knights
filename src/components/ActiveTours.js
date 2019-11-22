import React, {Component} from 'react';
import Progress from 'react-progressbar';
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {API_URL} from '../api/api';

class ActiveTours extends Component {

        state = {
            expand: true,
            isLoading: true,
            table: [{}],
            error: null,
        };

    handleClick = () => {
        this.setState(state => ({expand: !state.expand}))
    };

    fetchUsers() {
        fetch(`${API_URL}/activeroutes/`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    table: data.results,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const {isLoading, table, error, expand} = this.state;
        return (
            <div className="active-tours-container">
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    table.map(result => {
                        const {id, leader, start_day, stop_day} = result;
                        return (
                            <div className={expand ? "tour-card expanded" : "tour-card"} key={id}>
                                <h3>{result.routes_id.name}</h3>
                                <p>Глава походу: {leader}</p>
                                <span>Дата початку: {start_day} </span>
                                <span>Дата закінчення: {stop_day} </span>
                                {/*<div className="bar" style={{width: "100px"}}></div>*/}
                                <p>Сладність: {result.routes_id.complexity}</p>
                                <Progress completed={result.routes_id.complexity * 10}/>
                                <pre>{result.routes_id.description}</pre>
                                <button onClick={this.handleClick} key={id}>
                                    <FontAwesomeIcon icon={expand ? faChevronDown : faChevronUp}/>
                                </button>
                            </div>
                        );
                    })

                ) : (
                    <h3>Loading...</h3>
                )}
            </div>

        );
    }
}

export default ActiveTours;
