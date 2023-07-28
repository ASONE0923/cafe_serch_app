// components/CafeSearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Geolocation from './Geolocation';

function CafeSearchPage() {
  const [location, setLocation] = useState({});
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await axios.post('/search', location);
        setCafes(response.data.results.shop);
      } catch (error) {
        console.error('Failed to fetch cafes:', error);
      }
    };

    if (location.latitude && location.longitude) {
      fetchCafes();
    }
  }, [location]);

  return (
    <div>
      <h2>カフェ検索ページ</h2>
      <Geolocation setLocation={setLocation} />
      <div>
        {cafes.map((cafe, index) => (
          <div key={index}>
            <h3>{cafe.name}</h3>
            <p>{cafe.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CafeSearchPage;
