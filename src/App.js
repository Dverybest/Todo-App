import React,{useState} from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [todos,setTodos] = useState([
    {id:1,content:"Add more todo's",isChecked:false},
  ])

  const deleteTodo = (id) =>{
    let data = todos.filter(todo=>{
      return todo.id !== id
    })
    setTodos(data)
  }
  const addTodo = (todo)=>{
    todo.id = Math.random();
    todo.isChecked = false;
    setTodos([...todos,todo]);
  }
  const handleCheckChange =(id)=>{
    let index = todos.findIndex(todo=>todo.id===id);

    let data = [...todos];
    data[index].isChecked =!data[index].isChecked
    setTodos(data)
  }
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} handleCheckChange={handleCheckChange}/>
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
 