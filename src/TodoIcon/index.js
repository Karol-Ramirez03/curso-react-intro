import "./TodoIcon.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


const iconTypes = {
    "check": (color) => <FaCheck className="Icon-svg"  fill={color}/>,
    "delete": (color) => <MdDelete className="Icon-svg" fill={color}/>
}

function TodoIcon({type, color, onClick}){
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
           {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}