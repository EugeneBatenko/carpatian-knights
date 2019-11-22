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
        const data = {
            full_name: this.state.full_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            age: this.state.age,
            tour: this.state.tour,
            description: this.state.description
        };
        fetch(`${API_URL}/registry/`,{
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "same-origin",
            mode: 'no-cors',
            headers: new Headers({
                // 'X-CSRFToken': csrf_token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };


    render() {
        const {full_name, email, phone_number, age,  description} = this.state;
        return (
            <div>
                <main>
                    <form onSubmit={this.submitHandler} encType="multipart/form-data">
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
                        <button type="submit" value="add user">Submit</button>
                    </form>
                </main>
            </div>

        );
    }
}

export default Crusade;
