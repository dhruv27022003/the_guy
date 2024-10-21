
// import React, { useState } from 'react';
// import Suggestions from '../components/Suggestions';

// // Helper function to calculate distance between two coordinates (Haversine formula)
// const haversineDistance = (coords1, coords2) => {
//   const toRad = (x) => (x * Math.PI) / 180;
//   const R = 6371; // Radius of the Earth in km
//   const dLat = toRad(coords2.latitude - coords1.latitude);
//   const dLon = toRad(coords2.longitude - coords1.longitude);
//   const lat1 = toRad(coords1.latitude);
//   const lat2 = toRad(coords2.latitude);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // Distance in km
// };

// function SearchNearby({ users }) {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [radius, setRadius] = useState(5); // 5 km by default
//   const [results, setResults] = useState([]);

//   const handleSearch = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const userLocation = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         };

//         setCurrentLocation(userLocation);
//         const nearbyUsers = users.filter((user) => {
//           const distance = haversineDistance(user.location, userLocation);
//           return distance <= radius;
//         });

//         setResults(nearbyUsers);
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       {/* <Suggestions /> */}

//       <form className="text-center">
//         <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
//         <h1 className="h3 mb-3 fw-normal">Search Nearby Users</h1>

//         <div className="form-floating mb-3">
//           <input
//             type="number"
//             className="form-control"
//             id="floatingRadius"
//             placeholder="Radius"
//             value={radius}
//             onChange={(e) => setRadius(e.target.value)}
//           />
//           <label htmlFor="floatingRadius">Search Radius (km)</label>
//         </div>

//         <button className="btn btn-primary w-100 py-2" type="button" onClick={handleSearch}>
//           Find Nearby Users
//         </button>

//         {results.length > 0 ? (
//           <ul className="list-group mt-4">
//             {results.map((user, index) => (
//               <li key={index} className="list-group-item">
//                 {user.name} - {user.email} - Location: {user.location.latitude}, {user.location.longitude}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="mt-4">No users found in this area.</p>
//         )}
//       </form>

//       <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
//     </div>
//   );
// }

// export default SearchNearby;



// src/pages/SearchNearby.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import Suggestions from '../components/Suggestions';
// import { haversineDistance } from '../utils/haversine'; // Assuming you moved the Haversine formula to a utility file

// const user = useSelector((state) => state.user);

const haversineDistance = (coords1, coords2) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(coords2.latitude - coords1.latitude);
  const dLon = toRad(coords2.longitude - coords1.longitude);
  const lat1 = toRad(coords1.latitude);
  const lat2 = toRad(coords2.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};
function SearchNearby() {
  const users = useSelector((state) => state.user.users); // Access users from Redux
  const [currentLocation, setCurrentLocation] = useState(null);
  const [radius, setRadius] = useState(5);
  const [results, setResults] = useState([]);
  console.log("ss",users)
  const handleSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setCurrentLocation(userLocation);
        console.log("ss",users)
        const nearbyUsers = users.filter((user) => {
          const distance = haversineDistance(user.location, userLocation);
          return distance <= radius;
        });
        console.log("s1",nearbyUsers)
        setResults(nearbyUsers);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="container mt-4">
      {/* <Suggestions /> */}

      <form className="text-center">
        <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Search Nearby Users</h1>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingRadius"
            placeholder="Radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
          <label htmlFor="floatingRadius">Search Radius (km)</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="button" onClick={handleSearch}>
          Find Nearby Users
        </button>

        {results.length > 0 ? (
          <ul className="list-group mt-4">
            {results.map((user, index) => (
              <li key={index} className="list-group-item">
                {user.name} - {user.email} - Location: {user.location.latitude}, {user.location.longitude}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4">No users found in this area.</p>
        )}
      </form>

      <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
    </div>
  );
}

export default SearchNearby;