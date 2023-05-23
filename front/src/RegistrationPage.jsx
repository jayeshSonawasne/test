import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
    const history= useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const Registration = () => {
        axios.post('http://localhost:4000/registration', user).then((res) => {
            if (res.data.msg) {
                alert(res.data.msg);
                history('/home')
            } else {
                alert(res.data.error);
            }
        })
    }
    const handdleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <>{console.log(user)}
            <h1>Registration Page</h1>
            <label>Email :- </label>
            <input type='text' name='email' onChange={handdleChange}></input>
            <br />
            <br />
            <label>Password :- </label>
            <input type='password' name='password' onChange={handdleChange}></input>
            <br />
            <br />
            <button onClick={Registration}>Registration</button>
            <p>Login <Link to='/'>here</Link></p>

        </>
    )
}
