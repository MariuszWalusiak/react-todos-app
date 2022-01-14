import { Tasks } from "./Tasks";
import { ListToggle } from "./ListToggle";

export const TaskList = () => {
  return (
    <div>
      <ListToggle />
      <ul style={{ paddingInlineStart: 0, marginTop: -20 }}>
        <Tasks />
        <Tasks />
        <Tasks />
      </ul>
    </div>
  );
};
