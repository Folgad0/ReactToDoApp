import React from "react";
import TasksList from "../../Components/TasksList";
import AddTask from "../../Components/AddForm";

const HomePage = ({ tasks, setTasks, isAddTaskVisible}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length.toString(),
      task: e.target.taskDescription.value,
      completed: false
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    e.target.reset(); // Clear the form
    // e.target.taskDescription.value
      
  };

  const removeItem = (item) => {
    setTasks(tasks.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      {isAddTaskVisible && <AddTask onSubmit={handleSubmit} />}
      <TasksList tasks={tasks} removeItem={removeItem} />
    </div>
  );
};

export default HomePage;

