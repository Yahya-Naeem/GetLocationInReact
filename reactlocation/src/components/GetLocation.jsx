import React, { useState } from 'react';
export default function GetLocation() {
  const [location, setLocation] = useState(null); //save lat and longitude in it 
  const [proceed, setProceed] = useState(false);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // User gives permission
        function (position) {
            console.log('position',position)
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setProceed(true);
        },
        // User rejects
        function (error) {
          console.error('Permission Denied', error.message);
        }
      );
    } else {
      console.error("Browser doesn't support this feature");
    }
  };

  return (
    <div>
      <h3>Welcome to LookFlock Location Test App</h3>
      <div>
        <button onClick={() => getLocation()}>Trace My Location</button>
      </div>
      {location ? (
        <p >My Location: {location.latitude}, {location.longitude}</p>
      ) : proceed ? (
        <p>Default Location</p>
      ) : null}
    </div>
  );
}
