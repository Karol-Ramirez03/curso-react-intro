import "./TodoList.css"

function TodoList(props) {
    console.log(props.children);
    return (
        <ul className="TodoList">
            {props.children}
        </ul>
    );
}

// cuando creamos ua etiqueta abierta 
// y cerrada conveertimos todo lo que 
// esta adentro en el props
export {TodoList}