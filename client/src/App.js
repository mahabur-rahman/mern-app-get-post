import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/getusers")
      .then((res) => {
        setListOfUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const getUsers = async () => {
  //   const res = await fetch("/getusers");
  //   const data = await res.json();

  //   setListOfUsers(data);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // console.log(listOfUsers);

  // create user | post request ✔️

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  const createUser = () => {
    axios
      .post("/createuser", {
        name,
        age,
        username,
      })
      .then((res) => {
        alert("User Created");
        setListOfUsers([...listOfUsers, { name, age, username }]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {listOfUsers.map((user) => {
        return (
          <>
            <div key={user.id}>
              <h1>Name : {user.name}</h1>
              <h1>Age : {user.age}</h1>
              <h1>User Name : {user.username}</h1>
            </div>
          </>
        );
      })}

      <hr />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="user name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
    </>
  );
};

export default App;
