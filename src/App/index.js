import { TodoProvider } from '../TodoContext';
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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
