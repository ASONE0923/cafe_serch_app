// Login.js
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const login = () => {
        axiosInstance.post('/login', {
            user: {
                email: email,
                password: password
            }
        })
        .then(response => {
            console.log("login response", response);
            localStorage.setItem('token', response.data.jwt);
            console.log("Navigating to /search");
            navigate("/search");
        })
        .catch(error => {
            console.log("login error", error.response.data);
            setErrorMessage("ログインに失敗しました。メールアドレスとパスワードを確認してください。");
        });
    };

    return (
        <div className="login">
            <h2>Login</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
