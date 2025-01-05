import React from "react";
import "./Todo.css";
import { TodoContext } from "../TodoContext";

// Forma1

// const estilos = {
//   fontSize:"24px",
//   textAlign:"center",
//   margin:0,
//   padding:"48px"
  
// }
// function TodoCounter({total,completed}){
//     return (
//       <h1 style={estilos}>
//         Has completado {completed} de {total} Todos
//       </h1>
//     );
  
//   }



// FORMA2: con el import

function TodoCounter(){
  const {completedTodos: completed, totalTodos:total} = React.useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> Todos
    </h1>
  );

}
export {TodoCounter}

// props .total