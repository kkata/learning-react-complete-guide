import { useState } from "react";
import Card from "../layout/Card";
import Button from "../layout/Button";
import styles from "./User.module.css";

const User = (props) => {
  const [user, setUser] = useState({ name: "", age: "" });
  const handleUserName = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  const handleUserAge = (event) => {
    setUser({ ...user, age: event.target.value });
  };
  const handleForm = (event) => {
    event.preventDefault();
    if (user.name === "" || user.age === "") {
      return;
    }
    if (Number(user.age) < 0) {
      return;
    }
    props.onAddUser(user);
    setUser({ name: "", age: "" });
  };

  return (
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
  );
};

export default User;
