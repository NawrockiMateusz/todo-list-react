import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        } else
            return null;

    };

    return <form className="form" onSubmit={onFormSubmit}>
        <input
            value={newTaskContent}
            onChange={({ target }) => setNewTaskContent(target.value)}
            type="text" className="form__input" autoFocus placeholder="Co jest do zrobienia?" />
        <button id="submit" className="form__button">Dodaj zadanie</button>
    </form>
};

export default Form;