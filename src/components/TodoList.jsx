
function TodoList({ todos, removeTodo }) {
  return (
    <div>
      <ul>
        {todos.map((text, index) => (
          <li className='list-item' key={index}>
            <div className="text">{text}</div>
            <button className="remove" onClick={() => removeTodo(text)}>
              <i className='fa-solid fa-trash'></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
