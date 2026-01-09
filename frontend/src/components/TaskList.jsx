import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onChange }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No tasks found
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onChange={onChange} />
      ))}
    </div>
  );
}
