import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axiosInstance.post('/users/sign_in', {
            user: {
                email: email,
                password: password
            }
        }, 
        {
            withCredentials: true
        })
        .then(response => {
            console.log("login response", response);
        })
        .catch(error => {
            console.log("login error", error);
        });
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
