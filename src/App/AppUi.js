import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';

import React from 'react';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setsearchValue,
    searchedTodos,
    deleteTodos,
    completeTodos
}) {
    return (
        <React.Fragment>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch 
            searchValue={searchValue}
            setsearchValue={setsearchValue}
          />
    
          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.lenght === 0 ) && <p>Crea tu primer Todo</p>}
            {searchedTodos.map((todo) => (
              <TodoItem 
              onDelete={() => deleteTodos(todo.text)} 
              onCompleted={() => completeTodos(todo.text)} 
              key={todo.text}
              text={todo.text}
              completed={todo.completed} />
            ))}
          </TodoList>
          <CreateTodoButton />
          {/* <Car mundo="mundo" exclamacion = { signo }/> */}
        </React.Fragment>
        
      );
}

export {AppUI};