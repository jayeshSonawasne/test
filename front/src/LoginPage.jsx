import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';



export default function LoginPage() {
    const history = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handdleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const Login = () => {
        axios.defaults.withCredentials = true;
        axios.post(`http://localhost:4000/login`, user).then((res) => {
            if (res.data.msg) {
                alert(res.data.msg);
                history('/home');
            } else {
                alert(res.data.error);
            }
        })
    }
    return (
        <>
            <h1>Login Page</h1>
            <label>Email :- </label>
            <input type='text' name='email' onChange={handdleChange}></input>
            <br />
            <br />
            <label>Password :- </label>
            <input type='password' name='password' onChange={handdleChange}></input>
            <br />
            <br />
            <button onClick={Login}>Login</button>
            <p>Register <Link to='/register'>here</Link></p>

        </>
    )
}
