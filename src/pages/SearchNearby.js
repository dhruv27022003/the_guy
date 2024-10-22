
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


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
  const [category, setCategory] = useState('');
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
          return distance <= radius && user.category === category;
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
        <img className="mb-4" src="/static/4.webp" alt="" width="172" height="170" />
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

        <select
    className="form-control form-control-dark"
    id="floatingCategory"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >

<option value="">Select Category</option>
    <option value="Doctor">Doctor</option>
    <option value="Pediatrician">Pediatrician</option>
    <option value="Plumber">Plumber</option>
    <option value="Laundry">Laundry</option>
    <option value="Carpenter">Carpenter</option>
    <option value="Cook">Cook</option>
    <option value="Maid">Maid</option>
    <option value="Electrician">Electrician</option>
    <option value="Mechanic">Mechanic</option>
    <option value="Gardener">Gardener</option>
    <option value="Painter">Painter</option>
    <option value="Driver">Driver</option>
    <option value="Teacher">Teacher</option>
    <option value="Tutor">Tutor</option>
    <option value="Nurse">Nurse</option>
    <option value="Housekeeper">Housekeeper</option>
    <option value="Security Guard">Security Guard</option>
    <option value="Babysitter">Babysitter</option>
    <option value="Cleaner">Cleaner</option>
    <option value="Tailor">Tailor</option>
    <option value="Hairdresser">Hairdresser</option>
    <option value="Makeup Artist">Makeup Artist</option>
    <option value="Therapist">Therapist</option>

  </select>
  <br/>

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