import { Task } from "./Task";
import { ListToggle } from "./ListToggle";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useEffect } from "react";

export const TaskList = ({ taskList,setTaskList }) => {
  const [allChecked, setAllChecked] = useState(false);

  const handleDelete = (id) => {
    console.log(id)
    const remainingTasks = taskList.filter(task => id !== task.id);

    setTaskList(remainingTasks)
    
  }
  

  return (
    <div style={{ width: 550 }}>
      <ListToggle allChecked={allChecked} setAllChecked={setAllChecked} />
      <ul style={{ paddingInlineStart: 0, marginTop: -20 }}>
        {taskList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            allChecked={allChecked}
            setAllChecked={setAllChecked}
            onHandleDelete = {handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
