import React from "react";
import { useState, useEffect } from "react";
import Header from "./component/header";
import Task from "./component/Task";
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:6900');
pb.autoCancellation(false);

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const gettasks = async () => {
      const server_tasks = await fetchAllTask()
      setTasks([...server_tasks]);
    }
    gettasks();
  });
  const fetchAllTask = async () => {
    const res = await pb.collection('tasks_collection').getFullList({ sort: '-created', })
    return res;
  }
  const deleteTask = async (id) => {
    await pb.collection('tasks_collection').delete(id);
  };
  const complete = async (id) => {
    console.log(id)
    const record = await pb.collection('tasks_collection').getOne(id);
    console.log("record", record);
    record.task.completed = !record.task.completed;
    const changed = await pb.collection('tasks_collection').update(id, record);
    console.log("record", changed);
    return;
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
