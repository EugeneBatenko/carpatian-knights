import React, {Component} from 'react';
import './_news-block.scss';

const API_URL = "https://carpatianapi.cf";

class NewsBlock extends Component {

    state = {
        isLoading: true,
        table: [],
        error: null
    };

    fetchUsers() {
        fetch(`${API_URL}/post/`)
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
        const {isLoading, table, error} = this.state;
        return (
            <div>
                <div className="news-container">

                    <div className="container">
                        {/*<input type="text" id="myInput" className="filter input-text w-100"*/}
                        {/*       placeholder="Search for names.." title="Type in a name"/>*/}
                        {error ? <p>{error.message}</p> : null}
                        {!isLoading ? (
                            table.map(result => {
                                const {id, title, created_date, text, author} = result;
                                return (
                                    <div className="news-card" key={id}>
                                        <p>{title}</p>
                                        <span className="date">{created_date}</span>
                                        <pre>Describe: {text}</pre>
                                        <p>{author}</p>
                                    </div>
                                );
                            })
                        ) : (
                            <h3>Loading...</h3>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

export default NewsBlock;