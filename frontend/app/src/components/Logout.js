import React from 'react';
import axiosInstance from '../axiosConfig';

function Logout() {
    const logout = () => {
        axiosInstance.delete('/users/sign_out', { withCredentials: true })
        .then(response => {
            console.log("logout response", response);
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
