import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [campo, setCampo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com');
        if (!response.ok) {
          throw new Error(`La solicitud fallo, codigo ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }

    fetchData();
  }, []);

  const AddTask = async () => {
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

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com', {
        method: 'POST',
        body: JSON.stringify(newTodoItem),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`La solicitud fallo, codigo ${response.status}`);
      }

      const data = await response.json();
      console.log('Tarea Creada:', data);
    } catch (error) {
      console.error('Error al crear una nueva tarea:', error);
    }
  };

  const deleteTask = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`La solicitud fallo, codigo ${response.status}`);
      }

      console.log('Tarea eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Todo List con Async</h1>
      <div>
        <input
          className='input'
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
      {campo ? <p className='alert'>El Campo Agregar Tarea no puede estar vacío</p> : null}
    </div>
  );
}

export default TodoList;

