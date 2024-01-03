import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || []
    if (storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter((todo) => todo !== todoToRemove))
  }

  const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  return (
    <>
      <Header />
      <InputForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </>
  )
}

export default App
