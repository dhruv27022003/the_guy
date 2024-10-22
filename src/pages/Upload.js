import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import Carousel from '../components/Carousel';
import { useSelector } from 'react-redux';
import MapComponent from './MapComponent';

function Upload() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone, category, location };
    dispatch(addUser(userData));
    setName('');
    setEmail('');
    setPhone('');
    setCategory('');
    setLocation({ latitude: '', longitude: '' });
  };

  return (
    <div>
      <Carousel />
      <br /><br />
      <h2 className="h3 fw-normal text-center">User Registration</h2>
      <form onSubmit={handleSubmit} className="text-light rounded">
        {/* Form fields */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control form-control-dark"
            id="floatingName"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="floatingName" className="text-dark">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control form-control-dark"
            id="floatingEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingEmail" className="text-dark">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control form-control-dark"
            id="floatingPhone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="floatingPhone" className="text-dark">Phone Number</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-control form-control-dark"
            id="floatingCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {/* Add your category options */}
          </select>
        </div>

        {/* Location section */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control form-control-dark"
            id="latitude"
            placeholder="Latitude"
            value={location.latitude}
            readOnly
          />
          <label htmlFor="latitude" className="text-dark">Latitude</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control form-control-dark"
            id="longitude"
            placeholder="Longitude"
            value={location.longitude}
            readOnly
          />
          <label htmlFor="longitude" className="text-dark">Longitude</label>
        </div>

        {/* Button to get location */}
        <div className="mb-3">
          <button type="button" className="btn btn-secondary w-100 py-2" onClick={handleLocation}>
            Get Current Location
          </button>
        </div>

        {/* Map displaying user's location */}
        <MapComponent latitude={location.latitude} longitude={location.longitude} />

        {/* Submit button */}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Register
        </button>
        <p className="mt-5 mb-3 text-light">© 2024–2025</p>
      </form>
    </div>
  );
}

export default Upload;
