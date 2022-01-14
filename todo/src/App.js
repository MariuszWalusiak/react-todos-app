import { Header } from "./compontents/Header";
import { Filter } from "./compontents/Filter";
import { Tasks } from "./compontents/Tasks";
import styled from "styled-components";
import { TaskList } from "./compontents/TaskList";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  background-color: #f5f5f5;

`

function App() {
  return (
    <StyledDiv>
      <Header></Header>
      <TaskList/>
      <Filter></Filter>
    </StyledDiv>
  );
}

export default App;
