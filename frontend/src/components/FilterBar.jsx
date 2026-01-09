export default function FilterBar({
  filter,
  setFilter,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white"
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white"
      >
        <option value="created">Newest First</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}
