import { useState } from "react";

import User from "./components/User/User";
import UserList from "./components/User/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const handleAddUser = (user) => {
    setUserList((prevUserList) => {
      return [user, ...prevUserList];
    });
  };
  return (
    <div>
      <User onAddUser={handleAddUser} />
      <UserList list={userList} />
    </div>
  );
};

export default App;
