import ToDoItem from "./ToDoItem"

const ToDoList = ({ toDos, toggleToDo, deleteToDo }) => {

  return (
    <ul className={`list ${toDos.length === 0 ? 'text-center p-0 bg-neutral-500 rounded-2xl' : 'text-left list-decimal text-black bg-neutral-100 rounded-2xl py-0.5 hover:-translate-y-1 '} items-center justify-center transition-all`}>
      {toDos.length === 0 && 'No List To Do'}
      {toDos.map(
        toDo => {
          return (
            <ToDoItem
              id={toDo.id}
              completed={toDo.completed}
              title={toDo.title}
              key={toDo.id}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
            //Or you can just use spread like this: erase everything except key={toDo.key} and add {...toDo}
            />
          )
        }
      )}

    </ul>
  )
}

export default ToDoList