import { Task } from "./Task";
import { ListToggle } from "./ListToggle";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useEffect } from "react";

export const TaskList = ({ taskList }) => {
  const [allChecked, setAllChecked] = useState(false);

  return (
    <div style={{ width: 550 }}>
      <ListToggle allChecked={allChecked} setAllChecked={setAllChecked} />
      <ul style={{ paddingInlineStart: 0, marginTop: -20 }}>
        {taskList.map((task) => (
          <Task
            key={nanoid()}
            id={nanoid()}
            name={task.name}
            allChecked={allChecked}
            setAllChecked={setAllChecked}
            checked={task.checked}
            setChecked={task.handleChange}
          />
        ))}
      </ul>
    </div>
  );
};
