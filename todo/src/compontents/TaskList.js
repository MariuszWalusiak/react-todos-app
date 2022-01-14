import { Task } from "./Tasks";
import { ListToggle } from "./ListToggle";
import { nanoid } from "nanoid";

export const TaskList = ({ taskList }) => {
  return (
    <div
      style={{width: 550}}
    >
      <ListToggle />
      <ul style={{ paddingInlineStart: 0, marginTop: -20 }}>
        {taskList.map((task) => (
          <Task key={nanoid()} id={nanoid()} name={task} />
        ))}
      </ul>
    </div>
  );
};
