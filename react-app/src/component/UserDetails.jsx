import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function UserDetails() {

  const { id } = useParams();

  const [user, setUser] = useState(null);


  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);


  if (!user) {
    return <h2 className="loading">Loading...</h2>;
  }


  return (


    <div className="card">
      <h1>User Details</h1>

      <p>
        <b>Name:</b> {user.name}
      </p>

      <p>
        <b>Username:</b> {user.username}
      </p>

      <p>
        <b>Email:</b> {user.email}
      </p>

      <p>
        <b>Phone Number:</b> {user.phone}
      </p>

      <p>
        <b>Website:</b> {user.website}
      </p>

      <p>
        <b>Company Name:</b> {user.company.name}
      </p>


      <br />

        <Link to="/users" className="back-link">
        Back to Users
      </Link>

    </div>

  );
}


export default UserDetails;;