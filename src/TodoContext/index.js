import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    
  const { item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setsearchValue] = React.useState("");
  const [openModal, setOpenModal ] = React.useState(false)

  console.log("los usuarios buscan: "+searchValue)
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  

    console.log(todos)
  const completeTodos = (text) => {
    const newTodos = [...todos];
    const TodoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[TodoIndex].completed = true;
    saveTodos(newTodos);
    console.log("completado")
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const TodoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(TodoIndex, 1);
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false,
    })
    saveTodos(newTodos);
  }
  return (
        <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setsearchValue,
          searchedTodos,
          deleteTodos,
          completeTodos,
          openModal,
          setOpenModal,
          addTodo}}>
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContext, TodoProvider };