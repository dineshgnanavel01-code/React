import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

function CRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);


  // READ - GET API
  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {
      const response = await axios.get(API);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const addUser = async () => {

    if (!name || !email) {
      alert("Enter Name and Email");
      return;
    }

    try {

      const response = await axios.post(API, {
        name: name,
        email: email
      });


      setUsers([
        ...users,
        {
          id: users.length + 1,
          name: response.data.name,
          email: response.data.email
        }
      ]);

      setName("");
      setEmail("");

    } catch(error) {
      console.log(error);
    }

  };


 
  const editUser = (user) => {

    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);

  };


  
  const updateUser = async () => {

    try {

      await axios.put(`${API}/${editId}`, {
        name,
        email
      });


      const updatedData = users.map((user)=>{

        if(user.id === editId){

          return {
            ...user,
            name:name,
            email:email
          };

        }

        return user;

      });


      setUsers(updatedData);

      setEditId(null);
      setName("");
      setEmail("");

    }
    catch(error){
      console.log(error);
    }

  };




  const deleteUser = async(id)=>{

    try{

      await axios.delete(`${API}/${id}`);


      const filteredUsers = users.filter(
        (user)=> user.id !== id
      );


      setUsers(filteredUsers);


    }
    catch(error){
      console.log(error);
    }

  };



  return (

    <div className="container">

      <h1>User Management CRUD</h1>


      <div className="form">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        {
          editId ? (

          <button 
          className="update"
          onClick={updateUser}>
            Update
          </button>

          )
          :
          (

          <button
          className="add"
          onClick={addUser}>
            Add
          </button>

          )

        }


      </div>




      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>

          </tr>

        </thead>


        <tbody>

        {
          users.map((user)=>(

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>


              <td>

                <button
                className="edit"
                onClick={()=>editUser(user)}>
                  Edit
                </button>


                <button
                className="delete"
                onClick={()=>deleteUser(user.id)}>
                  Delete
                </button>


              </td>


            </tr>

          ))
        }


        </tbody>


      </table>


    </div>

  );

}


export default CRUD;