import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

const App = () => {
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuthed && <Auth />}
      {isAuthed && <UserProfile />}
      <Counter />
    </>
  );
};

export default App;
