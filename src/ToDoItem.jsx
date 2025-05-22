import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEnvelope, faTrashArrowUp, faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ToDoItem = ({ completed, id, title, toggleToDo, deleteToDo }) => {
    // This is also works
    /* const ToDoItem = (props) => {
    const { completed, id, title, toggleToDo, deleteToDo } = props; // Destructure *inside* */


    return (
        <li className='flex items-center justify-start my-1'>
            <label>
                <input type="checkbox" checked={completed}
                    onChange={e => toggleToDo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                onClick={() => { deleteToDo(id) }}
                className='btn btn-danger px-3.5 font-bold text-red-200 text-xl ml-4 border-0 bg-red-900 rounded-xl hover:scale-110 active:scale-105 transition-all'>
                <FontAwesomeIcon icon={faTrashArrowUp} />
            </button>
        </li>
    )
}
export default ToDoItem