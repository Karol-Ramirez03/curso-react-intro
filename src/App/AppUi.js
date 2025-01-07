import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    deleteTodos,
    completeTodos,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)



  return (
        <>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0 ) && <p>Crea tu primer Todo</p>}
            {searchedTodos.map((todo) => (
              <TodoItem 
              onDelete={() => deleteTodos(todo.text)} 
              onCompleted={() => completeTodos(todo.text)} 
              key={todo.text}
              text={todo.text}
              completed={todo.completed} />
            ))}
          </TodoList>
          <CreateTodoButton setOpenModal={setOpenModal}/>
          {/* <Car mundo="mundo" exclamacion = { signo }/> */}
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </>
        
      );
}

export {AppUI};