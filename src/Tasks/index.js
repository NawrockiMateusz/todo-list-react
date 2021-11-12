import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className={`listItem ${task.done && hideDoneTasks ? "listItem--hidden" : ""}`}>
                <button className="list__button list__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? " listItem--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
)

export default Tasks;