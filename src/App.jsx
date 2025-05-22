import { useEffect, useState } from 'react';
import './App.css';
import NewToDo from './NewToDoFor';
import ToDoList from './ToDoList';

function App() {

  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(toDos))
  }, [toDos]);

  const addToDo = (title) => {
    setToDos(currentToDos => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    });
  }

  const toggleToDo = (id, completed) => {
    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  };

  const deleteToDo = (id) => {
    setToDos(currentToDos => {
      return currentToDos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <h1 className='header'>To Do List App</h1>
      <NewToDo onSubmit={addToDo} />
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  )
}

export default App
