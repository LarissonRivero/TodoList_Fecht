import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [campo, setCampo] = useState(false);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error al obtener datos de la API:', error));
  }, []);//se crea un arreglo vacio para que solo se ejecute una vez

  const AddTask = () => {
    if (!newTodo.trim()) {
      setCampo(true);
      return;
  } else {
      setCampo(false);
  }

    const newTodoItem = {
      userId: 1,
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');

    fetch('https://jsonplaceholder.typicode.com', {
      method: 'POST',
      body: JSON.stringify(newTodoItem),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log('Tarea Creada:', data))
      .catch((error) => console.error('Error al crer una nueva tarea:', error));
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    fetch(`https://jsonplaceholder.typicode.com/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`La solicitud fallo, codigo ${response.status}`);
        }
        console.log('Tarea eliminada con éxito');
      })
      .catch((error) => console.error('Error al eliminar la tarea:', error));
  };

  return (
    <div className='container'>
      <h1>Todo List con Fetch</h1>
      <div>
        <input className='input'
          type="text"
          placeholder="Ingrese una Nueva tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='btnAdd' onClick={AddTask}>Agregar</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li className='list' key={todo.id}>
            {todo.title}
            <button className='btnDel' onClick={() => deleteTask(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      {campo ? <p className='alert'>El Campo Agregar Tarea no puede estar vacio</p> : null}
    </div>
  );
}

export default TodoList;