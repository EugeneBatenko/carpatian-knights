import React, {Component} from 'react';
import axios from 'axios';
const API_URL = "https://carpatianapi.cf";

class Crusade extends Component {



    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            telephone: '',
            age: '',
            crusade: '',
            comment: '',
            checkbox: ''
        }

    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_URL}/users/`,
            data: this.state.results,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    render() {
        const {username, email, telephone, age, crusade, comment} = this.state;
        const crusades = [
            { label: "Batman", value: "Batman" },
            { label: "Superman", value: "Superman" },
            { label: "Wonder Woman", value: "Wonder Woman" },
            { label: "Green Lantern", value: "Green Lantern" },
            { label: "Flash", value: "Flash" },
            { label: "Cyborg", value: "Cyborg" },
        ];
        return (
            <div>
                <main>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="tel"
                            name="telephone"
                            value={telephone}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="number"
                            name="age"
                            value={age}
                            onChange={this.changeHandler}
                        />
                        <select name="crusade" onChange={this.changeHandler}>
                            <option disabled>---- Виберіть похід ----</option>
                            <option value="1" >first</option>
                            <option value="2" >second</option>
                            <option value="3" >third</option>
                        </select>

                        <textarea
                            name="comment"
                            value={comment}
                            onChange={this.changeHandler}
                        >
                            Коментар
                        </textarea>
                        <input name="checkbox" type="checkbox" onChange={this.changeHandler}/>
                        <button type="submit">Submit</button>
                    </form>
                </main>
            </div>

        );
    }
}

export default Crusade;