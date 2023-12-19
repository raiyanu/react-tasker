import React from "react";
import { useState } from "react";
import Header from "./component/header";
import Task from "./component/Task.jsx";
function App() {
  const [tasks, setTasks, removeTasks] = useState([
    {
      id: 0,
      title: "create a Blog site",
      dateCreated: "2023-01-15T09:00:00",
      reminderDate: "2023-01-18T18:00:00",
      completed: false,
    },
    {
      id: 1,
      title: "Buy chicken 1KG",
      dateCreated: "2023-02-01T12:30:00",
      reminderDate: "2023-02-10T15:00:00",
      completed: true,
    },
    {
      id: 2,
      title: "Make Shwarma at home",
      dateCreated: "2023-03-05T10:45:00",
      reminderDate: "2023-03-15T14:30:00",
      completed: false,
    },
  ]);
  const deleteTask = (id) => {
    console.log("delete: ", tasks[id]);
    setTasks(tasks.filter((task) => task.id != id));
  };
  return (
    <div className="app w-96 h-fit bg-indigo-300 flex align-center justify-center flex-col rounded-t">
      <Header />
      <Task tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

// work is going fine 49minute:26second ,
// building components success [x]
// hook [x]
// delting task [x]
// adding task [-]
// adding completed [-]
// however effects [-]
export default App;
