import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const UserContext = createContext();

export default function UserLogin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((result) => {
        // Get first 5 users
        setUsers(result.users.slice(0, 5));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <UserContext.Provider value={users}>
      <h1>User Details</h1>
      <Page />
    </UserContext.Provider>
  );
}

function Page() {
  const users = useContext(UserContext);

  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}