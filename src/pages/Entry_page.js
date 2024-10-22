import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Entry_page = () => {
  // const [results, setResults] = useState([]);
  const user1 = useSelector((state) => state.user.users);
  const results = user1
  // console.log("s1",nearbyUsers)
  // setResults(nearbyUsers);
  return (
    <main>
      <br/><br/>
        {/* {results.length > 0 ? (
          <ul classNameName="list-group mt-4">
            {results.map((user, index) => (
              <li key={index} classNameName="list-group-item">
                {user.name} - {user.email} - Location: {user.location.latitude}, {user.location.longitude}
              </li>
            ))}
          </ul>
        ) : (
          <p classNameName="mt-4">No users found in this area.</p>
        )} */}
      {/* <div classNameName="row row-cols-1 row-cols-md-2 mb-2 text-center align-center my-5">


        <div classNameName="col">
          <div classNameName="card mb-4 rounded-3 shadow-sm">
            <div classNameName="card-header py-3">
              <h4 classNameName="my-0 fw-normal">Search</h4>
            </div>
            <div classNameName="card-body">
              <h1 classNameName="card-title pricing-card-title">
                $15<small classNameName="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul classNameName="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" classNameName="w-100 btn btn-lg btn-primary">
              Search
              </button>
            </div>
          </div>
        </div>

        <div classNameName="col">
          <div classNameName="card mb-4 rounded-3 shadow-sm border-primary">
            <div classNameName="card-header py-3 text-bg-primary border-primary">
              <h4 classNameName="my-0 fw-normal">Add Interest</h4>
            </div>
            <div classNameName="card-body">
              <h1 classNameName="card-title pricing-card-title">
                $29<small classNameName="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul classNameName="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" classNameName="w-100 btn btn-lg btn-primary">
              Add Interest
              </button>
            </div>
          </div>
        </div>
      </div> */}
       <div className="d-inline-flex gap-2 mb-5 w-100 align-center">
      <button className=" align-center btn btn-primary btn-lg px-4 rounded-pill w-50" type="button" onClick= {() => window.location.href = '/'}>
        Upload
        <svg className="bi ms-2" width="24" height="24"></svg>
      </button>
      <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill w-50" type="button" onClick= {() => window.location.href = '/ss'}>
        Search
      </button>
    </div>
 
    </main>
  );
};

const CheckIcon = () => (
  <svg classNameName="bi" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 011.07 0l3.992 3.992a.75.75 0 11-1.06 1.06l-3.72-3.72-8 8a.75.75 0 01-1.06-1.06l7.5-7.5z" />
  </svg>
);

export default Entry_page

