import { useState, useRef, useEffect } from "react";
import { Header } from "./compontents/Header";
import { Filter } from "./compontents/Filter";
import { TaskList } from "./compontents/TaskList";
import { nanoid } from "nanoid";
import styles from "./compontents/styles/App.module.css";

function App() {
  const keptData = JSON.parse(window.localStorage.getItem("todo"));
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(keptData || []); //keptData ? keptData : []
  const [filter, setFilter] = useState("all");

  const taskRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTask = {
      name: taskRef.current.value,
      id: nanoid(),
      isDone: false,
    };
    let newTasks = [...taskList, newTask];

    setTaskList(newTasks);
    setTask("");
  };

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className={styles.main}>
      <Header
        task={task}
        onTaskChange={setTask}
        taskRef={taskRef}
        onSubmit={handleSubmit}
      ></Header>
      <TaskList filter={filter} taskList={taskList} setTaskList={setTaskList} />
      <Filter
        taskList={taskList}
        setTaskList={setTaskList}
        handleFilter={setFilter}
      ></Filter>
    </div>
  );
}

export default App;
