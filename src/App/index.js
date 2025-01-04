import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUi';

import React from 'react';

// localStorage.setItem('Todos_v1',defaultTodos);
// localStorage.removeItem('Todos_v1')

const defaultTodos = [
  {id:1, text: 'cortar tomate', completed: true},
  {id:2, text: 'Tomar la clase de lit', completed: false},
  {id:3, text: 'conseguir trabajo en grafosoft', completed: false},
  {id:4, text: 'Tomar la clase de react', completed: false},
  {id:5, text: 'conseguir trabajo en amazon', completed: true} ,
  {id:6, text: 'Tomar la clase de manipulacion de arrays', completed: false},
  {id:7, text: 'conseguir el certificado', completed: false},
  {id:8, text: 'hablar ingles', completed: false},
  {id:9, text: 'limpiar mi cuarto', completed: false}
]


// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));



function App() {


  const{ item:todos, saveItem:saveTodos ,loading,error}= useLocalStorage('TODOS_V1', [])
  const [searchValue, setsearchValue] = React.useState("");

  console.log("los usuarios buscan: "+searchValue)
  
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const TodoSearchText = searchValue.toLowerCase();
      return todoText.includes(TodoSearchText)
    })
  

    console.log(todos)
  const completeTodos = (text) => {
    const newTodos = [...todos];
    const TodoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[TodoIndex].completed = true;
    saveTodos(newTodos);
    console.log("completado")
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const TodoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(TodoIndex, 1);
    saveTodos(newTodos);
  }


  return (
    <AppUI 
      loading={loading}
      error={error}
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setsearchValue = {setsearchValue}
      searchedTodos = {searchedTodos}
      deleteTodos = {deleteTodos}
      completeTodos = {completeTodos}
    />
  )

}

export default App;
