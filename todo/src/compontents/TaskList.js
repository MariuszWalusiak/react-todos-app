import { Task } from "./Task";
import { ListToggle } from "./ListToggle";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useEffect } from "react";

export const TaskList = ({ taskList, setTaskList }) => {
  
  const handleDelete = (id) => {
    console.log(id);
    const remainingTasks = taskList.filter((task) => id !== task.id);

    setTaskList(remainingTasks);
  };

  const handleChange = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTaskList(updatedTasks);
    console.log(id);
  };

  


  return (
    <div style={{ width: 550 }}>
      <ListToggle setTaskList={setTaskList} taskList={taskList} />
      <ul style={{ paddingInlineStart: 0, marginTop: -20 }}>
        {taskList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            onHandleDelete={handleDelete}
            taskIsDone={task.isDone}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
};
