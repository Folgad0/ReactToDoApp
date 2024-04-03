import tasksData from "../tasks.json";
import { useState } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const TasksList = () => {
  const [tasks, setTasks] = useState(tasksData);

  function removeItem(item) {
    setTasks(() => tasks.filter((i) => i.task !== item.task));
  }

  return (
    <>
      <ul>
        {tasks.map((item) => {
          return(
          <div key={item.id}>
            
              
              <ListItem
                currentTask={item}
                remove={(item) => removeItem(item)}
              /> 
          
          </div>
        )})}
      </ul>
    </>
  );
};
export default TasksList;
