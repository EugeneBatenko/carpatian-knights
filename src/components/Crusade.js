import React, {Component} from 'react';
// const API_URL = "http://127.0.0.1:8000";
const API_URL = "https://carpatianapi.herokuapp.com"
function getToken() {
    let formData = new FormData();
    formData.append('username', 'admin');
    formData.append('password', 's5a5s5h5a5');


    return fetch(`${API_URL}/api/token/`,{
        method: 'POST',
        body: formData
    })
};

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

        const postData = {
            full_name: this.state.full_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            age: this.state.age,
            tour: 1,
            description: this.state.description
        };

        getToken().then(
            (response) => response.json()
        ).then(
            (data) =>
                fetch(`${API_URL}/registry/`, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${data.access}`
                    },
                    body: JSON.stringify( postData ), // тип данных в body должен соответвовать значению заголовка "Content-Type"
                }).then(function (response) {
                    //handle success
                    console.log(response.json());
        //            return response.json()
                })
        ).catch(function (response) {
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
