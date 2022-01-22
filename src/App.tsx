import React from 'react'

import './App.css'
import { useState } from 'react'

interface Todo {
  title: string
  description: string
}

function App() {
  // our saved todos starting with an empty string
  const [todos, setTodos] = useState([] as Todo[])
  // title of a todo starting as an empty string
  const [title, setTitle] = useState('' as string)
  // description of a todo starting as an empty string
  const [description, setDescription] = useState('' as string)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent executing the default form submission event
    e.preventDefault()
    // Structure our todo from the current state
    const todo = {
      title,
      description,
    }
    // Add the todo to the state
    setTodos([...todos, todo])
    // Clean the title state
    setTitle('')
    // Clean the description state
    setDescription('')
  }
  return (
    <div className="todos-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder=""
            name="title"
            value={title}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
            name="description"
            value={description}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-submit-btn">
            ADD
          </button>
        </div>
      </form>
      {todos.length > 0 ? (
        <ul className="todos-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-todos">No todos yet</p>
      )}
    </div>
  )
}

export default App
