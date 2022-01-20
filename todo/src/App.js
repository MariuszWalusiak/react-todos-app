import { Header } from "./compontents/Header";
import { Filter } from "./compontents/Filter";
import { Task } from "./compontents/Task";
import styled from "styled-components";
import { TaskList } from "./compontents/TaskList";
import { useState, useRef } from "react";
import { nanoid } from "nanoid";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  background-color: #f5f5f5;
`;

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  // const [filteredTaskList, setFilteredTaskList] = useState(taskList);

  const taskRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskRef.current.value);
    let newTask = {
      name: taskRef.current.value,
      id: nanoid(),
      isDone: false,
    };
    let newTasks = [...taskList, newTask];
    setTaskList(newTasks);
    setTask("");
    console.log(taskList);
  };

  //TODO: filters fix!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const handleFilter = (filter) => {
    const previousTaskList = [...taskList];
    let filteredTasks;

    if (filter === "all") {
      filteredTasks = previousTaskList.map((task) => task);
    }
    if (filter === "completed") {
      filteredTasks = previousTaskList.filter((task) => task.isDone === true);
    }
    if (filter === "active") {
      filteredTasks = previousTaskList.filter((task) => task.isDone === false);
    }

    // setTaskList(filteredTasks);
  };

  return (
    <StyledDiv>
      <Header
        task={task}
        onTaskChange={setTask}
        taskRef={taskRef}
        onSubmit={handleSubmit}
      ></Header>
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        handleFilter={handleFilter}
      />
      <Filter handleFilter={handleFilter}></Filter>
    </StyledDiv>
  );
}

export default App;
