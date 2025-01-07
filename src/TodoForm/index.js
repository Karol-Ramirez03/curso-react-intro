import React from "react";
import "./TodoForm.css";
import {TodoContext} from "../TodoContext/index.js";

function  TodoForm( ) {

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {addTodo, setOpenModal} = React.useContext(TodoContext)

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea 
            placeholder="escribe tu nuevo compromiso"
            value={newTodoValue}
            onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}