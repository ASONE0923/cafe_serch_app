import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import './Signup.css';

function Signup() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
      axiosInstance.post('/users', {
            user: {
                name: name,
                email: email,
                password: password,
                password_confirmation: password
            }
        }, 
        {
            withCredentials: true
        })
        .then(response => {
            console.log("signup response", response);
        })
        .catch(error => {
            console.log("signup error", error);
        });
    };

    return (
        <div className="signup">
            <h2>Signup</h2>
            <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={signup}>Signup</button>
        </div>
    );
}

export default Signup;
