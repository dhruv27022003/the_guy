import React, { useState } from 'react';

function Add_data() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [Name, setName] = useState('');
  const [Category, setCategory] = useState('');
  const [Phone_number, setPhone_number] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // Geolocation API to capture user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        console.error("Error getting location", error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      Name,
      Phone_number,
      Category,
      email,
      password,
      rememberMe,
      latitude,
      longitude
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark text-light p-4 rounded">
      <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-dark"
          id="floatingInput"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="floatingInput" className="text-dark">Name</label>
      </div> 

      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control form-control-dark"
          id="floatingPhoneNumber"
          placeholder="Phone Number"
          value={Phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
        <label htmlFor="floatingPhoneNumber" className="text-dark">Phone Number</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-dark"
          id="floatingCategory"
          placeholder="Category"
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="floatingCategory" className="text-dark">Category</label>
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
        <label htmlFor="floatingEmail" className="text-dark">Email address</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control form-control-dark text-dark"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword" className="text-dark">Password</label>
      </div>

      

 
      {/* Display Latitude and Longitude */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control form-control-dark"
          id="latitude"
          placeholder="Latitude"
          value={latitude}
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
          value={longitude}
          readOnly
        />
        <label htmlFor="longitude" className="text-dark">Longitude</label>
      </div>

           {/* Button to get user location */}
           <div className="mb-3">
        <button type="button" className="btn btn-secondary w-100 py-2" onClick={getLocation}>
          Get Current Location
        </button>
      </div>


      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-light">© 2024–2025</p>
    </form>
  );
}

export default Add_data;
// import React, { useState } from 'react';

// function Add_data({ addUser }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState({ latitude: '', longitude: '' });

//   const handleLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       name,
//       email,
//       location,
//     };
//     addUser(userData);
//     setName('');
//     setEmail('');
//     setLocation({ latitude: '', longitude: '' });
//   };

//   return (
//     <div>
//       <h2>User Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Location: </label>
//           <button type="button" onClick={handleLocation}>
//             Get Location
//           </button>
//           {location.latitude && location.longitude && (
//             <p>
//               Latitude: {location.latitude}, Longitude: {location.longitude}
//             </p>
//           )}
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Add_data;


