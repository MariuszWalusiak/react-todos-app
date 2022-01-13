import { Form } from "./compontents/Form";
import { Filter } from "./compontents/Filter";
import { Tasks } from "./compontents/Tasks";
import styled from "styled-components";


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
      <Form></Form>
      <div style={{marginTop: -20, zIndex: 1}}>
        <input type="checkbox"></input>
        <label></label>
        <ul style={{paddingInlineStart: 0}}>
          <Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>
        </ul>
      </div>
      <Filter></Filter>
    </StyledDiv>
  );
}

export default App;
