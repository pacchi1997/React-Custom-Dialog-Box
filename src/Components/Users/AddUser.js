import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userEnteredName = (event) => {
    setEnteredName(event.target.value);
  };

  const userEnteredAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter valid input name and age",
      });
      return;
    }
    if (+enteredAge < 18) {
      setError({
        title: "invalid age",
        message: "please enter valid age 18+",
      });
      return;
    }
    let userData = {
      name: enteredName,
      age: +enteredAge,
      id: Math.random(),
    };

    console.log("data sent to parent");
    props.onAddUser(userData);

    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(false);
    return;
  };

  return (
    <>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          cancel={errorHandler} />) : (" " )}

      <Card cssClass={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={userEnteredName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={userEnteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
