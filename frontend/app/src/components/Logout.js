import React from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const logout = () => {
        axiosInstance.delete('/logout', { withCredentials: true })
        .then(response => {
            console.log("logout response", response);
            localStorage.removeItem('token');  // トークンをローカルストレージから削除
            navigate("/login");
        })
        .catch(error => {
            console.log("logout error", error);
        });
    };

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;
