import { useState } from "react";
import Card from "../layout/Card";
import Button from "../layout/Button";
import ErrorModal from "../layout/ErrorModal";
import styles from "./User.module.css";

const User = (props) => {
  const [user, setUser] = useState({ name: "", age: "" });
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState({ title: "", message: "" });

  const handleUserName = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  const handleUserAge = (event) => {
    setUser({ ...user, age: event.target.value });
  };
  const handleForm = (event) => {
    event.preventDefault();
    if (user.name === "" || user.age === "") {
      setIsError(true);
      setErrorText({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (Number(user.age) < 0) {
      setIsError(true);
      setErrorText({
        title: "invalid age",
        message: "Please enter a valid age (0 or more).",
      });
      return;
    }
    props.onAddUser(user);
    setUser({ name: "", age: "" });
  };

  const handleModal = () => {
    setIsError(false);
  };

  return (
    <>
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
            <input
              type="text"
              id="user-name"
              onChange={handleUserName}
              value={user.name}
            />
          </div>
          <div>
            <label htmlFor="user-age">Age(Years)</label>
            <input
              type="number"
              id="user-age"
              onChange={handleUserAge}
              value={user.age}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default User;
