// import './App.css';
// import  Entry_page  from './pages/Entry_page';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Upload  from './pages/Upload';
// import { useState } from 'react';
// import  SearchNearby  from './pages/SearchNearby';

// function App() {
//   const [users, setUsers] = useState([]); // Store user data
  
//   const addUser = (user) => {
//     console.log(user)
//     setUsers([...users, user]);
//   }
//   return (
//     <>

//    <Upload addUser={addUser} />
//    <SearchNearby users={users} />
//    </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Upload from './pages/Upload';
import SearchNearby from './pages/SearchNearby';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import Entry_page from './pages/Entry_page';

function App() {
  // const [users, setUsers] = useState([]);

  // const addUser = (user) => {
  //   setUsers((prevUsers) => [...prevUsers, user]); // Using the functional form of setState
  // };

  // useEffect(() => {
  //   console.log('Users updated:', users);
  // }, [users]);


  return (
    <div style={{width:'100vw', overflow:'hidden'}}  >
      {/* <Upload  />
      <SearchNearby  /> */}
      <Entry_page />
      {/* <div class="d-inline-flex gap-2 mb-5">
      <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
        Call to action
        <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg>
      </button>
      <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
        Secondary link
      </button>
    </div> */}
    <Router>
      {/* yo */}
      <div className="container" style={{background:'white'}}>
        <Routes>
          <Route path="/" element={ <Upload />} />
          <Route path="/ss" element={<SearchNearby />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

