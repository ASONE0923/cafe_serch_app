// frontend/src/components/CafeList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CafeList() {
    const [cafes, setCafes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const API_KEY = '2129d001a52de645';
    const BASE_URL = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
    const area_code = 'Z011';  // 例として東京。実際にはフォーム入力などから動的に変更できます。

    useEffect(() => {
        axios.get(`${BASE_URL}?key=${API_KEY}&large_area=${area_code}`)
            .then(response => {
                setCafes(response.data.results.shop);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }, []);

    if(isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {cafes.map((cafe, index) => (
                <div key={index}>
                    <h2>{cafe.name}</h2>
                    <p>{cafe.address}</p>
                    <a href={cafe.urls.pc}>店舗URL</a>
                </div>
            ))}
        </div>
    );
}

export default CafeList;
