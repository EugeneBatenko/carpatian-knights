import React, {Component} from 'react';
import {API_URL} from '../api/api';
class NewsBlock extends Component {

    state = {
        isLoading: true,
        table: [],
        photos: [],
        error: null
    };

    fetchUsers() {
        fetch(`${API_URL}/post/`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    table: data.results,
                    photos: data.results.photos,
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
                        {error ? <p>{error.message}</p> : null}
                        {!isLoading ? (
                            table.map(result => {
                                const {id, title, created_date, text, author, photos} = result;
                                const img = [];
                                for (let i = 0; i < photos.length; i++) {
                                    img.push(<img src={photos[i]} alt=""/>);
                                }
                                return (
                                    <div className="news-card" key={id}>
                                        <p>{title}</p>
                                        <span className="date">{created_date}</span>
                                        <pre>Describe: {text}</pre>
                                        <p>{author}</p>
                                        <picture key={id}>
                                            {img}
                                        </picture>


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
