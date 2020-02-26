import React,{useState} from 'react';

const AddTodo = ({addTodo})=>{

    const [todo,setTodo] = useState({content:''})
//yarn add gh-pages --save-dev.... to add git deploy dependency
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(todo.content!==''){
            addTodo(todo);
            setTodo({content:''});
        }
    }
    const handleChange =(e)=>{
        setTodo({content:e.target.value})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add new todo and click enter</label>
                <input type="text" onChange={handleChange} value={todo.content}/>
            </form>
        </div>
    )
}
export default AddTodo;