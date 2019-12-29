import React, {Component} from 'react';
import {API_URL} from '../api/api';
class NewsBlock extends Component {

    state = {
        isLoading: true,
        table: [],
        photos: [],
        error: null,
        modal: false,
        modalIndex: -1
    };

    handleClick = (id) => {
        this.setState(state => ({ modal: !state.modal, modalIndex: id}))
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
        const {isLoading, table, error, modal, modalIndex} = this.state;

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
                                    <div className={modal && modalIndex === id ? "news-card-container news-card-container-open" : "news-card-container"} key={id}>
                                        <div className={modal && modalIndex === id ? "news-card news-card-open" : "news-card"} key={id}>
                                            <p className="title">{title}</p>
                                            <span className="news-date">{created_date}</span>
                                            <div className="describe-block">
                                                <pre>Describe: {text}</pre>
                                                <p>{author}</p>
                                            </div>
                                            {/*<picture key={id}>*/}
                                            {/*    {img}*/}
                                            {/*</picture>*/}

                                            <button className={modal && modalIndex === id ? "open" : ""} id={id} onClick={()=>this.handleClick(id)}>
                                                {modal && modalIndex === id ? "Згорнути" : "Розгорнути"}
                                            </button>
                                        </div>
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
