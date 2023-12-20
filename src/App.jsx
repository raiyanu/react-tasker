import React from "react";
import { useState } from "react";
import Header from "./component/header";
import Task from "./component/Task.jsx";

function App() {
  const [tasks, setTasks] = useState([
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
    {
      id: 3,
      title: "Learn React",
      dateCreated: "2023-04-10T14:00:00",
      reminderDate: "2023-04-20T10:00:00",
      completed: false,
    },
    {
      id: 4,
      title: "Go for a run",
      dateCreated: "2023-05-02T08:15:00",
      reminderDate: "2023-05-10T18:30:00",
      completed: true,
    },
    {
      id: 5,
      title: "Read a book",
      dateCreated: "2023-06-08T11:30:00",
      reminderDate: "2023-06-15T16:45:00",
      completed: false,
    },
    {
      id: 6,
      title: "Cook a new recipe",
      dateCreated: "2023-07-20T17:00:00",
      reminderDate: "2023-07-25T19:30:00",
      completed: true,
    },
    {
      id: 7,
      title: "Visit a museum",
      dateCreated: "2023-08-12T13:45:00",
      reminderDate: "2023-08-20T15:15:00",
      completed: false,
    },
    {
      id: 8,
      title: "Write a short story",
      dateCreated: "2023-09-05T09:30:00",
      reminderDate: "2023-09-15T12:00:00",
      completed: false,
    },
    {
      id: 9,
      title: "Do a workout",
      dateCreated: "2023-10-18T08:00:00",
      reminderDate: "2023-10-25T16:30:00",
      completed: true,
    },
    {
      id: 10,
      title: "Take a photography class",
      dateCreated: "2023-11-10T14:45:00",
      reminderDate: "2023-11-20T11:00:00",
      completed: false,
    },
    {
      id: 11,
      title: "Plan a weekend getaway",
      dateCreated: "2023-12-01T12:00:00",
      reminderDate: "2023-12-10T18:00:00",
      completed: true,
    },
  ]);
  const deleteTask = (id) => {
    console.log("delete: ", tasks[id]);
    setTasks(tasks.filter((task) => task.id != id));
  };
  const complete = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks]; // Create a new array to avoid modifying the existing state directly

      const refID = updatedTasks.findIndex((task) => task.id === id);

      if (refID !== -1) {
        // Check if the task with the specified id is found
        updatedTasks[refID] = {
          ...updatedTasks[refID],
          completed: !updatedTasks[refID].completed,
        };
      }
      console.log("old list :", prevTasks);
      console.log("old list :", updatedTasks);
      return updatedTasks; // Return the updated array as the new state
    });
  };
  return (
    <div className="app w-96 h-fit bg-indigo-300 flex align-center justify-center flex-col rounded-t">
      <Header />
      <Task tasks={tasks} onDelete={deleteTask} complete={complete} />
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
