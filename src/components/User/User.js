import React, { useState, useRef } from "react";
import Card from "../layout/Card";
import Button from "../layout/Button";
import ErrorModal from "../layout/ErrorModal";
import styles from "./User.module.css";

const User = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [user, setUser] = useState({ name: "", age: "" });
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState({ title: "", message: "" });

  const handleForm = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.valueAsNumber;
    if (enteredName === "" || enteredAge === "") {
      setIsError(true);
      setErrorText({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge < 0) {
      setIsError(true);
      setErrorText({
        title: "invalid age",
        message: "Please enter a valid age (0 or more).",
      });
      return;
    }
    props.onAddUser({ name: enteredName, age: enteredAge });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // props.onAddUser(user);
    // setUser({ name: "", age: "" });
  };

  const handleModal = () => {
    setIsError(false);
  };

  return (
    <React.Fragment>
      {isError && (
        <ErrorModal
          title={errorText.title}
          message={errorText.message}
          onConfirm={handleModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="user-name">UserName</label>
            <input type="text" id="user-name" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="user-age">Age(Years)</label>
            <input type="number" id="user-age" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default User;
