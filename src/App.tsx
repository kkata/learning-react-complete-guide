import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("aaa"), new Todo("bbb")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
