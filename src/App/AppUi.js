import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/TodoButton';

import React from 'react';

function AppUI({
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