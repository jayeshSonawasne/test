import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const history = useNavigate();
    const LogOut = () => {
        alert('Logging Out');
        Cookies.remove('token');
        history('/');
    }
    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
            history('/');
        }
    })
    return (
        <>
            <h1>HomePage</h1>
            <button onClick={LogOut}>logOut</button>
        </>
    )
}
