import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import Wrapper from "./Components/Helpers/Wrapper";
import Card from "./Components/UI/Card";

function App() {
  const [myUserData, setMyUserData] = useState([]);

  const addUserHandler = (userData) => {
    setMyUserData((prevState) => {
      return [
        { name: userData.name, age: userData.age, id: userData.id },
        ...prevState,
      ];
    });
    console.log(myUserData);
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={myUserData} />
    </Wrapper>
  );
}

export default App;
