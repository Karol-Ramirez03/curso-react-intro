import './TodoItem.css'; 
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      
      <CompleteIcon onCompleted={props.onCompleted} completed={props.completed}/>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      
      <DeleteIcon onDelete={props.onDelete} completed={props.completed}/>
    </li>
  );
}

export { TodoItem };

