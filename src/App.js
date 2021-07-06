import { useState } from "react";

import User from "./components/user/User";
import UserList from "./components/user/UserList";

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
