import React, { useState } from "react";

const Tasklist = ({ task, onDelete, complete }) => {
  // create a hook to change targetted
  const [dateCreated, setStartDate] = useState(new Date(task.dateCreated));
  const [reminderDate, setEndDate] = useState(new Date(task.reminderDate));
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white mt-2 mx-2 border rounded py-1 px-2 w-80">
        <h1 className={task.completed? "line-through" : " "}>
          <input type="checkbox" defaultChecked={task.completed} onClick={() => {
            complete(task.id);
          }} /> {task.title}
        </h1>
        <span className="flex items-center justify-between text-xs ml-4 ">
          <span className="text-xs ">{dateCreated.toLocaleString()}</span>
          <span className="text-xs">{reminderDate.toLocaleString()}</span>
        </span>
      </div>
      <button
        onClick={() => {
          onDelete(task.id);
        }}
      >
        <svg
          style={{ height: "1rem", width: "2rem" }}
          className="flex items-center justify-center"
          enableBackground="new 0 0 1792 1792"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m1082.2 896.6 410.2-410c51.5-51.5 51.5-134.6 0-186.1s-134.6-51.5-186.1 0l-410.2 410-410.1-410.1c-51.5-51.5-134.6-51.5-186.1 0s-51.5 134.6 0 186.1l410.2 410-410.2 410c-51.5 51.5-51.5 134.6 0 186.1 51.6 51.5 135 51.5 186.1 0l410.2-410 410.2 410c51.5 51.5 134.6 51.5 186.1 0 51.1-51.5 51.1-134.6-.5-186.2z" />
        </svg>
      </button>
    </div>
  );
};
export default Tasklist;
