import React, {useEffect, useState} from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');
    const addTodo = ()=>{
        if(input.length > 0){
            let data = {
                id : Math.floor(Math.random()*1000),
                title: input,
                done : false,
            }
            setInput('');
            setTodo((prev)=>([...prev, data]));
        }
        else{
            alert('Please input a todo');
        }
    }

    const updateTodo = (item)=>{
        let updatedTodoItems = todo.map((val)=>{
            if(val.id == item.id){
                return {...val, done : true}
            }
            else{
                return val
            }
        })

        setTodo(updatedTodoItems);
    }   

    const deleteTodo = (item) =>{
        setTodo((prev)=>(prev.filter((val)=>(val.id != item.id))));
    }

  return (
    <div className='container'>
        <h1>Todo List</h1>
        <div className='head'>
            <input type="text" name="title" id="title" value={input} onChange={(e)=>{
                setInput(e.target.value);
            }}/>
            <button onClick={addTodo} className='btn btn-add'>Add Todo</button>
        </div>
        <div>
            {
                (todo).map((val, index)=>{
                    return(
                        <div className='item'>
                            <div key={index} className={(val.done)?'done': ''}>
                                {val.title}
                            </div>
                            <div>
                                {(!val.done) && <button onClick={()=>updateTodo(val)} className='done-btn btn'>Done</button>}
                                <button onClick={()=>deleteTodo(val)} className='del-btn btn'>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Todo
