import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" className="form__input" autoFocus placeholder="Co jest do zrobienia?" />
        <button id="submit" className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;