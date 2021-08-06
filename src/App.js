import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp({ url: process.env.REACT_APP_API }, transformTasks);

  useEffect(() => {
    fetchTasks();
  }, []); // useEffect()の依存stateにfetchTaskを入れたくない（fetchが繰り返されるため）https://overreacted.io/ja/a-complete-guide-to-useeffect/#%E3%81%A7%E3%82%82%E3%80%81%E3%81%93%E3%81%AE%E9%96%A2%E6%95%B0%E3%81%AF%E3%82%A8%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88%E5%86%85%E3%81%AB%E5%85%A5%E3%82%8C%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84
  // ベストな解決策ではないがここでは一旦空配列のままにする

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
