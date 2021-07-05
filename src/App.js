import { useState } from "react";

import User from "./components/User";
import UserList from "./components/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <User list={userList} onUpdate={setUserList} />
      <UserList list={userList} />
    </div>
  );
};

export default App;
