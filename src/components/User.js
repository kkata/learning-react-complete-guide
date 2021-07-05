import { useState } from "react";

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
    if (user.name !== "" && user.age !== "") {
      props.onUpdate([...props.list, user]);
      setUser({ name: "", age: "" });
    }
  };

  return (
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="user-name">UserName</label>
        <input
          type="text"
          itemID="user-name"
          onChange={handleUserName}
          value={user.name}
        />
      </div>
      <div>
        <label htmlFor="user-age">Age(Years)</label>
        <input
          type="number"
          itemID="user-age"
          onChange={handleUserAge}
          value={user.age}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default User;
