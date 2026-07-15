import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div>
      <h1>User List</h1>
           <ul className="user-list"></ul>

      <ul>
        {
          users.map((user) => (
            <li key={user.id} className="user-item">
              <Link to={`/users/${user.id}`} className="user-link">
                {user.name}
              </Link>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default UserList;