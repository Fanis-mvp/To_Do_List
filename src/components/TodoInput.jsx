export default function TodoInput() {
  const { todos } = props;

  return (
    <header>
      <input placeholder="Enter ToDo..." />
      <button>Add</button>
    </header>
  );
}
