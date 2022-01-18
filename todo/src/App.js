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
  const [taskList, setTaskList]  = useState([]);
  
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

  return (
    <StyledDiv>
      <Header task={task} onTaskChange={setTask} taskRef={taskRef} onSubmit={handleSubmit} ></Header>
      <TaskList taskList={taskList} setTaskList={setTaskList}/>
      <Filter></Filter>
    </StyledDiv>
  );
}

export default App;
