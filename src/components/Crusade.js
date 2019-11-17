import React, {Component} from 'react';
import {API_URL} from '../api/api';

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
        fetch(`${API_URL}/registry/`,{
            body: JSON.stringify(this.state.results),
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
            },

        })
            .then(res=>res.json())
            .then(res => console.log(res))
            .catch(function (res) {
                //handle error
                console.log(res);
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
