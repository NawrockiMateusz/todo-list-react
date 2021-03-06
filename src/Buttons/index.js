import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick={toggleHideDone}
                className="buttons__button"
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setAllTasksDone}
                className="buttons__button" disabled={tasks.every(({ done }) => done) ? "disabled" : ""}>
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;