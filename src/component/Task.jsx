import Tasklist from "./element/Tasklist.jsx";
const Task = ({ tasks }) => {
  return (
    <div className="p-1 pb-2">
      {tasks.map((task) => (
        <Tasklist task={task} />
      ))}
    </div>
  );
};
export default Task;
