// components/Geolocation.js
import React, { useEffect } from 'react';

const Geolocation = ({ setLocation }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  }, [setLocation]);

  return null;
};

export default Geolocation;
