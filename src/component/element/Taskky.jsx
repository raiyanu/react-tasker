import React from "react";

const Taskky = ({ task }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-2">Date: {task.date}</p>
        <p className="text-gray-600 mb-2">Last Date: {task.last_date}</p>
        <p className={`text-${task.completed ? "green" : "red"}-500 font-bold`}>
          {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
    </div>
  );
};

export default Taskky;
