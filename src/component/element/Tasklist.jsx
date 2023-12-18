import React, { useState } from "react";

const Tasklist = ({ task }) => {
  const [dateCreated, setStartDate] = useState(new Date(task.dateCreated));
  const [reminderDate, setEndDate] = useState(new Date(task.reminderDate));
  return (
    <div className="bg-white mt-2 mx-2 border rounded py-1 px-2">
      <h1>
        <input type="checkbox" /> {task.title}
      </h1>
      <span className="flex items-center justify-between text-xs ml-4 ">
        <span className="text-xs ">{dateCreated.toLocaleString()}</span>
        <span className="text-xs">{reminderDate.toLocaleString()}</span>
      </span>
    </div>
  );
};
export default Tasklist;
