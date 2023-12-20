import Tasklist from "./element/Tasklist.jsx";
const Task = ({ tasks, onDelete , complete  }) => {
  return (
    <div className="p-1 pb-2 w-full h-72 overflow-y-scroll">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Tasklist task={task} onDelete={onDelete} key={task.id} complete={complete}/>
        ))
      ) : (
        <h1 className="text-center text-indigo-700 w-full font-bold">
          No tasks
        </h1>
      )}
    </div>
  );
};
export default Task;
