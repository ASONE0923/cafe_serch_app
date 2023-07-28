// Signup.js
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const signup = () => {
        axiosInstance.post('/signup', {
            user: {
                name: name,
                email: email,
                password: password,
                password_confirmation: password
            }
        })
        .then(response => {
            console.log("signup response", response);
            localStorage.setItem('token', response.data.jwt);
            navigate("/login");
        })
        .catch(error => {
            console.log("signup error", error);
            setErrorMessage("サインアップに失敗しました。入力情報を確認してください。");
        });
    };

    return (
        <div className="signup">
            <h2>Signup</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={signup}>Signup</button>
        </div>
    );
}

export default Signup;
