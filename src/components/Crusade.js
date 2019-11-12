import React, {Component} from 'react';
import axios from 'axios';
const API_URL = "http://127.0.0.1:8000";

class Crusade extends Component {



    constructor(props) {
        super(props);

        this.state = {
            full_name: '',
            email: '',
            phone_number: '',
            age: '',
            tour: '',
            description: '',
            checkbox: ''
        }

    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_URL}/registry/`,
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
        const {full_name, email, phone_number, age, tour, description} = this.state;
        return (
            <div>
                <main>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="full_name"
                            value={full_name}
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
                            name="phone_number"
                            value={phone_number}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="number"
                            name="age"
                            value={age}
                            onChange={this.changeHandler}
                        />
                        <select name="tour" onChange={this.changeHandler}>
                            <option disabled>---- Виберіть похід ----</option>
                            <option value="1" >first</option>
                            <option value="2" >second</option>
                            <option value="3" >third</option>
                        </select>

                        <textarea
                            name="description"
                            value={description}
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
